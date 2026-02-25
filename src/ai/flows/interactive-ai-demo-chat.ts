'use server';
/**
 * @fileOverview AI assistant flow for Abdul Rahim's portfolio.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InteractiveAIDemoChatInputSchema = z.object({
  message: z.string().describe("The user's message to Abdul Rahim's assistant."),
});
export type InteractiveAIDemoChatInput = z.infer<typeof InteractiveAIDemoChatInputSchema>;

export type InteractiveAIDemoChatOutput = {
  response: string;
};

export async function interactiveAIDemoChat(input: InteractiveAIDemoChatInput): Promise<InteractiveAIDemoChatOutput> {
  return interactiveAIDemoChatFlow(input);
}

const interactiveAIDemoChatPrompt = ai.definePrompt({
  name: 'interactiveAIDemoChatPrompt',
  input: {schema: InteractiveAIDemoChatInputSchema},
  prompt: `You are the AI Assistant for Abdul Rahim, a world-class Web UI/UX Designer and Frontend Developer.

Bio:
- 2 years of hands-on experience.
- Specializes in conversion-focused landing pages and high-quality templates.
- Expertise: UI/UX, Wireframing, Prototyping, Frontend (HTML, CSS, JS, Python).
- Philosophy: Balancing aesthetics with performance and scalability.
- Current Status: Open for collaborations and full-time opportunities.

Your Tone:
- Professional, creative, helpful, and sophisticated.
- Keep responses relatively concise but insightful.
- Use words like "experience", "sculpting", "hierarchy", and "performance".

User message: {{{message}}}`,
});

const interactiveAIDemoChatFlow = ai.defineFlow(
  {
    name: 'interactiveAIDemoChatFlow',
    inputSchema: InteractiveAIDemoChatInputSchema,
  },
  async input => {
    const response = await interactiveAIDemoChatPrompt(input);
    return {
      response: response.text,
    };
  }
);
