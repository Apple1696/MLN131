import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Message } from '@/lib/types';

/**
 * Utility function for combining CSS classes with Tailwind merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generate a unique ID for messages
 */
export const generateMessageId = (): string => {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Format timestamp for display
 */
export const formatTimestamp = (date: Date): string => {
  const now = new Date();
  const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

  if (diffInHours < 1) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } else if (diffInHours < 24) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } else {
    return date.toLocaleDateString([], { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit', 
      minute: '2-digit' 
    });
  }
};

/**
 * Validate message content
 */
export const isValidMessage = (content: string): boolean => {
  return content.trim().length > 0 && content.length <= 4000;
};

/**
 * Truncate long messages for display
 */
export const truncateMessage = (content: string, maxLength: number = 500): string => {
  if (content.length <= maxLength) return content;
  return content.slice(0, maxLength) + '...';
};

/**
 * Count words in a message
 */
export const countWords = (text: string): number => {
  return text.trim().split(/\s+/).filter(word => word.length > 0).length;
};

/**
 * Export chat history as JSON
 */
export const exportChatHistory = (messages: Message[]): string => {
  const exportData = {
    exportDate: new Date().toISOString(),
    messageCount: messages.length,
    messages: messages.map(msg => ({
      id: msg.id,
      content: msg.content,
      role: msg.role,
      timestamp: msg.timestamp.toISOString()
    }))
  };
  
  return JSON.stringify(exportData, null, 2);
};

/**
 * Import chat history from JSON
 */
export const importChatHistory = (jsonData: string): Message[] => {
  try {
    const data = JSON.parse(jsonData);
    
    if (!data.messages || !Array.isArray(data.messages)) {
      throw new Error('Invalid chat history format');
    }
    
    return data.messages.map((msg: any) => ({
      id: msg.id || generateMessageId(),
      content: msg.content || '',
      role: msg.role === 'assistant' ? 'assistant' : 'user',
      timestamp: new Date(msg.timestamp || Date.now())
    }));
  } catch (error) {
    throw new Error('Failed to parse chat history');
  }
};

/**
 * Check if the environment is properly configured
 */
export const checkEnvironmentConfig = (): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!import.meta.env.VITE_GEMINI_API_KEY) {
    errors.push('VITE_GEMINI_API_KEY is not set');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Debounce function for input handling
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};