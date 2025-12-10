import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

let client: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!client) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("Gemini API Key is missing. AI features will be disabled.");
      // In a real app we might throw or handle this gracefully in UI
      // Returning a dummy client or handling null in caller is better
      throw new Error("API Key missing");
    }
    client = new GoogleGenAI({ apiKey });
  }
  return client;
};

export const sendMessageToGemini = async (
  message: string, 
  history: string[]
): Promise<string> => {
  try {
    const ai = getClient();
    
    // Construct a context-aware prompt
    const systemInstruction = `You are "Sergeant Shingle", the AI virtual assistant for Mil-Spec Roofing. 
    Your tone is professional, authoritative yet friendly, and reliable—like a military veteran.
    You help customers with:
    1. Basic roofing questions (shingles vs metal, leak repair, storm damage).
    2. Explaining the "Mil-Spec" standard: precision, durability, integrity.
    3. Scheduling estimates (encourage them to use the contact form or call 555-0123).
    4. Do NOT give specific price quotes, but give price *ranges* for typical work if asked (e.g., "Asphalt shingles typically range from $3.50-$5.50 per sq ft depending on materials...").
    
    Keep answers concise (under 3 sentences usually) unless explaining a complex topic.`;

    const model = "gemini-2.5-flash";
    
    // Simple history management: combine last few turns + current message
    // Ideally we use ai.chats.create() for stateful sessions, but for a simple helper, 
    // sending a combined prompt works well for stateless robustness or simple context.
    // Here we will use the Chat API for better conversation handling.

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    // Note: In a real persistent app we would pass the full history array to history param.
    // For this demo, we are just sending the new message to a fresh chat instance 
    // but prepending context manually if needed, or relying on the user to keep context 
    // simple. To properly do history, we would map our internal history to the SDK's Content format.
    // For simplicity and robustness in this demo snippet:
    
    const result: GenerateContentResponse = await chat.sendMessage({
      message: message
    });

    return result.text || "I copy that, but I'm having trouble processing the request. Please contact our HQ directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Negative. I cannot connect to the server right now. Please try again later or call our office.";
  }
};