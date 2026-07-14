import axios from "axios";

const API = "http://127.0.0.1:8000";

export const askAI = async (question) => {
  const response = await axios.post(`${API}/ask-ai`, {
    question,
  });

  return response.data.answer;
};