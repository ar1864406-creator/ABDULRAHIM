'use server';
/**
 * @fileOverview Optimized Genkit flow for a high-speed interactive AI chatbot demo.
 *
 * - interactiveAIDemoChat - A function that handles the AI chatbot demo interaction.
 * - InteractiveAIDemoChatInput - The input type for the interactiveAIDemoChat function.
 * - InteractiveAIDemoChatOutput - The return type for the interactiveAIDemoChat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InteractiveAIDemoChatInputSchema = z.object({
  message: z.string().describe("The user's message to the AI chatbot."),
});
export type InteractiveAIDemoChatInput = z.infer<typeof InteractiveAIDemoChatInputSchema>;

// We return a simple object with a string response. 
// Removing the Zod output schema from definePrompt disables JSON mode, 
// which significantly reduces latency.
export type InteractiveAIDemoChatOutput = {
  response: string;
};

export async function interactiveAIDemoChat(input: InteractiveAIDemoChatInput): Promise<InteractiveAIDemoChatOutput> {
  return interactiveAIDemoChatFlow(input);
}

const interactiveAIDemoChatPrompt = ai.definePrompt({
  name: 'interactiveAIDemoChatPrompt',
  input: {schema: InteractiveAIDemoChatInputSchema},
  prompt: `You are NeuroFlow AI, a highly advanced neural assistant designed for clarity and speed. 
Your goal is to provide responses that are easy to understand, clear, and helpful. 
Use natural language and avoid overly complex jargon unless the user specifically asks for technical details.
Be direct and efficient, but ensure your explanations are accessible to everyone.

User message: {{{message}}}`,
});

const interactiveAIDemoChatFlow = ai.defineFlow(
  {
    name: 'interactiveAIDemoChatFlow',
    inputSchema: InteractiveAIDemoChatInputSchema,
  },
  async input => {
    // Generate response using the optimized prompt. 
    // We access .text directly for the fastest turnaround.
    const response = await interactiveAIDemoChatPrompt(input);
    return {
      response: response.text,
    };
  }
);
