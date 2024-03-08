import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

// Access your API key (see "Set up your API key" above)
const API_KEY = "AIzaSyAVMHYel-lFd-ToAJOzo5y7HmCSbo29Bis";
const genAI = new GoogleGenerativeAI(API_KEY);

export async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = "Qual o clima de São luis do Maranhão";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}
