import axios from "axios";

const API = "https://healthguardian-ai-backend.onrender.com";

export const askAI = async (question) => {
  const response = await axios.post(`${API}/ask-ai`, {
    question,
  });

  return response.data.answer;
};