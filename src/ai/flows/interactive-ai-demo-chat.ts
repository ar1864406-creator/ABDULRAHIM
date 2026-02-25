'use server';
/**
 * @fileOverview A Genkit flow for a basic interactive AI chatbot demo.
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

const InteractiveAIDemoChatOutputSchema = z.object({
  response: z.string().describe("The AI chatbot's response to the user's message."),
});
export type InteractiveAIDemoChatOutput = z.infer<typeof InteractiveAIDemoChatOutputSchema>;

export async function interactiveAIDemoChat(input: InteractiveAIDemoChatInput): Promise<InteractiveAIDemoChatOutput> {
  return interactiveAIDemoChatFlow(input);
}

const interactiveAIDemoChatPrompt = ai.definePrompt({
  name: 'interactiveAIDemoChatPrompt',
  input: {schema: InteractiveAIDemoChatInputSchema},
  output: {schema: InteractiveAIDemoChatOutputSchema},
  prompt: `You are NeuroFlow AI, a helpful and engaging chatbot designed to assist users. Respond to the user's message in a friendly and concise manner, demonstrating your core capabilities. Keep your responses short and to the point, as this is a quick demo.

User message: {{{message}}}`,
});

const interactiveAIDemoChatFlow = ai.defineFlow(
  {
    name: 'interactiveAIDemoChatFlow',
    inputSchema: InteractiveAIDemoChatInputSchema,
    outputSchema: InteractiveAIDemoChatOutputSchema,
  },
  async input => {
    const {output} = await interactiveAIDemoChatPrompt(input);
    return output!;
  }
);
