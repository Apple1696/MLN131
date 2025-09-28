// Chat message interface
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

// OpenAI API request/response types
export interface OpenAIMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface OpenAIChatRequest {
  model: string;
  messages: OpenAIMessage[];
  max_tokens?: number;
  temperature?: number;
  top_p?: number;
  frequency_penalty?: number;
  presence_penalty?: number;
  stream?: boolean;
}

export interface OpenAIChatChoice {
  index: number;
  message: OpenAIMessage;
  finish_reason: string;
}

export interface OpenAIChatResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: OpenAIChatChoice[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

// Configuration interface
export interface ChatbotConfig {
  apiKey: string;
  secretKey?: string;
  model?: string;
  maxTokens?: number;
  temperature?: number;
  systemPrompt?: string;
}

// Error types
export interface OpenAIError {
  error: {
    message: string;
    type: string;
    code?: string;
  };
}

// Chat state interface
export interface ChatState {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  isConfigured: boolean;
}

// API response status
export type ApiResponseStatus = 'success' | 'error' | 'loading';

// Hook return type
export interface UseChatbotReturn {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  isConfigured: boolean;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
  setSystemPrompt: (prompt: string) => void;
}