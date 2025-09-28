import type {
  ChatbotConfig,
  OpenAIChatRequest,
  OpenAIChatResponse,
  OpenAIMessage,
} from '@/types/chatbot';

class OpenAIService {
  private config: ChatbotConfig;
  private readonly baseURL = 'https://api.openai.com/v1';

  constructor(config: ChatbotConfig) {
    this.config = config;
  }

  /**
   * Update the service configuration
   */
  updateConfig(config: Partial<ChatbotConfig>): void {
    this.config = { ...this.config, ...config };
  }

  /**
   * Check if the service is properly configured
   */
  isConfigured(): boolean {
    return Boolean(this.config.apiKey);
  }

  /**
   * Get default headers for API requests
   */
  private getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.config.apiKey}`,
    };

    // Add secret key if provided (for specific OpenAI configurations)
    if (this.config.secretKey) {
      headers['OpenAI-Secret'] = this.config.secretKey;
    }

    return headers;
  }

  /**
   * Prepare messages for API request
   */
  private prepareMessages(messages: OpenAIMessage[]): OpenAIMessage[] {
    const preparedMessages: OpenAIMessage[] = [];

    // Add system prompt if configured
    if (this.config.systemPrompt) {
      preparedMessages.push({
        role: 'system',
        content: this.config.systemPrompt
      });
    }

    // Add conversation messages
    preparedMessages.push(...messages);

    return preparedMessages;
  }

  /**
   * Create chat completion request payload
   */
  private createChatRequest(messages: OpenAIMessage[]): OpenAIChatRequest {
    return {
      model: this.config.model || 'gpt-5-nano',
      messages: this.prepareMessages(messages),
      max_tokens: this.config.maxTokens || 150,
      temperature: this.config.temperature || 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stream: false
    };
  }

  /**
   * Handle API errors
   */
  private handleApiError(error: any): string {
    console.error('OpenAI API Error:', error);

    if (error.response) {
      const { status, data } = error.response;
      
      switch (status) {
        case 401:
          return 'Invalid API key. Please check your credentials.';
        case 429:
          return 'Rate limit exceeded. Please try again later.';
        case 500:
          return 'OpenAI service is temporarily unavailable.';
        case 503:
          return 'OpenAI service is overloaded. Please try again.';
        default:
          if (data?.error?.message) {
            return data.error.message;
          }
          return `API Error (${status}): Something went wrong.`;
      }
    }

    if (error.request) {
      return 'Network error. Please check your internet connection.';
    }

    return error.message || 'An unexpected error occurred.';
  }

  /**
   * Send chat completion request to OpenAI
   */
  async sendChatCompletion(messages: OpenAIMessage[]): Promise<string> {
    if (!this.isConfigured()) {
      throw new Error('OpenAI service is not configured. Please provide an API key.');
    }

    try {
      const requestPayload = this.createChatRequest(messages);
      
      const response = await fetch(`${this.baseURL}/chat/completions`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(requestPayload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const error = {
          response: {
            status: response.status,
            data: errorData
          }
        };
        throw error;
      }

      const data: OpenAIChatResponse = await response.json();
      
      if (!data.choices || data.choices.length === 0) {
        throw new Error('No response from OpenAI API');
      }

      const assistantMessage = data.choices[0].message.content;
      
      if (!assistantMessage) {
        throw new Error('Empty response from OpenAI API');
      }

      return assistantMessage.trim();

    } catch (error) {
      const errorMessage = this.handleApiError(error);
      throw new Error(errorMessage);
    }
  }

  /**
   * Stream chat completion (for future implementation)
   */
  async streamChatCompletion(
    messages: OpenAIMessage[],
    onChunk: (chunk: string) => void
  ): Promise<void> {
    if (!this.isConfigured()) {
      throw new Error('OpenAI service is not configured. Please provide an API key.');
    }

    try {
      const requestPayload = { ...this.createChatRequest(messages), stream: true };
      
      const response = await fetch(`${this.baseURL}/chat/completions`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(requestPayload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const error = {
          response: {
            status: response.status,
            data: errorData
          }
        };
        throw error;
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('Failed to get response stream reader');
      }

      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.trim() === '') continue;
          if (line.trim() === 'data: [DONE]') return;

          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));
              const content = data.choices?.[0]?.delta?.content;
              if (content) {
                onChunk(content);
              }
            } catch (e) {
              console.warn('Failed to parse stream chunk:', e);
            }
          }
        }
      }
    } catch (error) {
      const errorMessage = this.handleApiError(error);
      throw new Error(errorMessage);
    }
  }

  /**
   * Validate API key format
   */
  static validateApiKey(apiKey: string): boolean {
    return Boolean(apiKey && apiKey.startsWith('sk-') && apiKey.length > 20);
  }

  /**
   * Get current configuration (without sensitive data)
   */
  getConfig(): Omit<ChatbotConfig, 'apiKey' | 'secretKey'> {
    const { apiKey, secretKey, ...publicConfig } = this.config;
    return publicConfig;
  }
}

export default OpenAIService;