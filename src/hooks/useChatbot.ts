import { useState, useCallback, useRef, useEffect } from 'react';
import type { ChatMessage, ChatbotConfig, UseChatbotReturn, OpenAIMessage } from '@/types/chatbot';
import OpenAIService from '@/services/openai';

/**
 * Custom hook for managing chatbot state and interactions
 */
export const useChatbot = (
  apiKey?: string,
  secretKey?: string,
  initialConfig?: Partial<ChatbotConfig>
): UseChatbotReturn => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Create service instance ref
  const serviceRef = useRef<OpenAIService | null>(null);

  // Default configuration
  const defaultConfig: ChatbotConfig = {
    apiKey: apiKey || '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',
    secretKey: secretKey,
    model: 'gpt-5-nano',
    maxTokens: 150,
    temperature: 0.7,
    systemPrompt: 'You are a helpful AI assistant. Be concise and friendly in your responses.',
    ...initialConfig
  };

  // Initialize or update service when config changes
  useEffect(() => {
    if (apiKey) {
      const config = { ...defaultConfig, apiKey, secretKey };
      
      if (serviceRef.current) {
        serviceRef.current.updateConfig(config);
      } else {
        serviceRef.current = new OpenAIService(config);
      }
    }
  }, [apiKey, secretKey]);

  /**
   * Check if the chatbot is properly configured
   */
  const isConfigured = Boolean(apiKey && serviceRef.current?.isConfigured());

  /**
   * Generate unique message ID
   */
  const generateMessageId = useCallback((): string => {
    return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }, []);

  /**
   * Create a new chat message
   */
  const createMessage = useCallback((
    role: ChatMessage['role'],
    content: string
  ): ChatMessage => {
    return {
      id: generateMessageId(),
      role,
      content,
      timestamp: new Date()
    };
  }, [generateMessageId]);

  /**
   * Convert chat messages to OpenAI format
   */
  const convertToOpenAIMessages = useCallback((chatMessages: ChatMessage[]): OpenAIMessage[] => {
    return chatMessages
      .filter(msg => msg.role !== 'system') // System messages are handled by the service
      .map(msg => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content
      }));
  }, []);

  /**
   * Add a message to the chat
   */
  const addMessage = useCallback((message: ChatMessage) => {
    setMessages(prev => [...prev, message]);
  }, []);

  /**
   * Clear error state
   */
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  /**
   * Send a message to the AI and get response
   */
  const sendMessage = useCallback(async (content: string): Promise<void> => {
    if (!serviceRef.current || !isConfigured) {
      setError('Chatbot is not configured. Please provide API credentials.');
      return;
    }

    if (!content.trim()) {
      setError('Message cannot be empty.');
      return;
    }

    clearError();
    setIsLoading(true);

    try {
      // Add user message
      const userMessage = createMessage('user', content);
      addMessage(userMessage);

      // Prepare messages for API call
      const currentMessages = [...messages, userMessage];
      const openAIMessages = convertToOpenAIMessages(currentMessages);

      // Send request to OpenAI
      const assistantResponse = await serviceRef.current.sendChatCompletion(openAIMessages);

      // Add assistant response
      const assistantMessage = createMessage('assistant', assistantResponse);
      addMessage(assistantMessage);

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [isConfigured, messages, createMessage, addMessage, clearError, convertToOpenAIMessages]);

  /**
   * Clear all messages
   */
  const clearMessages = useCallback(() => {
    setMessages([]);
    clearError();
  }, [clearError]);

  /**
   * Update system prompt
   */
  const setSystemPrompt = useCallback((prompt: string) => {
    if (serviceRef.current) {
      serviceRef.current.updateConfig({ systemPrompt: prompt });
    }
  }, []);

  /**
   * Update chatbot configuration
   */
  const updateConfig = useCallback((newConfig: Partial<ChatbotConfig>) => {
    if (serviceRef.current) {
      serviceRef.current.updateConfig(newConfig);
    }
  }, []);

  /**
   * Get current configuration
   */
  const getConfig = useCallback(() => {
    return serviceRef.current?.getConfig() || {};
  }, []);

  /**
   * Retry last message (useful for error recovery)
   */
  const retryLastMessage = useCallback(async () => {
    const lastUserMessage = messages
      .filter(msg => msg.role === 'user')
      .pop();

    if (lastUserMessage) {
      // Remove the last assistant message if it exists and there was an error
      setMessages(prev => {
        const lastMessage = prev[prev.length - 1];
        if (lastMessage?.role === 'assistant') {
          return prev.slice(0, -1);
        }
        return prev;
      });

      // Resend the last user message
      const openAIMessages = convertToOpenAIMessages(
        messages.filter(msg => msg.id !== lastUserMessage.id)
      );
      openAIMessages.push({ role: 'user', content: lastUserMessage.content });

      clearError();
      setIsLoading(true);

      try {
        if (!serviceRef.current) {
          throw new Error('Service not initialized');
        }

        const assistantResponse = await serviceRef.current.sendChatCompletion(openAIMessages);
        const assistantMessage = createMessage('assistant', assistantResponse);
        addMessage(assistantMessage);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Retry failed';
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    }
  }, [messages, createMessage, addMessage, clearError, convertToOpenAIMessages]);

  // Return hook interface
  return {
    messages,
    isLoading,
    error,
    isConfigured,
    sendMessage,
    clearMessages,
    setSystemPrompt,
    // Additional methods for advanced usage
    updateConfig,
    getConfig,
    retryLastMessage
  } as UseChatbotReturn & {
    updateConfig: (config: Partial<ChatbotConfig>) => void;
    getConfig: () => Partial<ChatbotConfig>;
    retryLastMessage: () => Promise<void>;
  };
};