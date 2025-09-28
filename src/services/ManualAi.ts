import { apiService } from '../config/api2';
import type { AxiosResponse } from '../config/api2';

// Types for the API
export interface AiQuestionRequest {
  question: string;
}

export interface AiQuestionResponse {
  message: string;
}

// Manual AI service
export const manualAiService = {
  // Ask a question to the AI
  askQuestion: async (question: string): Promise<AiQuestionResponse> => {
    try {
      const requestData: AiQuestionRequest = {
        question
      };

      const response: AxiosResponse<AiQuestionResponse> = await apiService.post(
        '/mln', // Since the base URL is already set to include '/mln'
        requestData
      );

      return response.data;
    } catch (error) {
      console.error('Error asking AI question:', error);
      throw error;
    }
  }
};

// Export default
export default manualAiService;