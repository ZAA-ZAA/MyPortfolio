import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, SKILLS, EDUCATION } from '../constants';

// We prepare a system prompt that gives the AI context about Zoen
const SYSTEM_INSTRUCTION = `
You are an AI assistant for Zoen A. Aldueza's professional portfolio. 
Your goal is to answer questions from recruiters (like HR at Nestle) about Zoen's skills, education, and projects.

Here is Zoen's Data:
- Name: ${PERSONAL_INFO.name}
- Title: ${PERSONAL_INFO.title}
- Bio: ${PERSONAL_INFO.bio}
- Email: ${PERSONAL_INFO.email}
- Phone: ${PERSONAL_INFO.phone}

Education:
${JSON.stringify(EDUCATION)}

Skills:
${JSON.stringify(SKILLS)}

Projects:
${JSON.stringify(PROJECTS)}

Guidelines:
1. Be professional, polite, and concise.
2. If asked about experience, emphasize his Capstone project and academic achievements (Dean's List) since he is a fresh graduate/student.
3. Highlight his adaptability and willingness to learn.
4. If asked something not in the data, say you don't have that information but suggest contacting Zoen directly via email.
5. Keep answers short (under 3 sentences) unless asked for details.
`;

export const generateResponse = async (apiKey: string, history: {role: string, parts: {text: string}[]}[], message: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // Convert history to the format expected by the new SDK if needed, 
    // or simply use generateContent if we don't need multi-turn persistence for this simple widget.
    // For a simple portfolio chat, single turn with context is often safer to avoid token limits, 
    // but Chat mode is better for conversation.
    
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
          role: h.role,
          parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    throw new Error(error.message || "Failed to generate response");
  }
};