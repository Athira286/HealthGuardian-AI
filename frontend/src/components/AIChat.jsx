import { useState } from "react";
import { askAI } from "../services/aiService";

function AIChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    if (!question) return;

    const response = await askAI(question);

    setAnswer(response);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>HealthGuardian AI</h2>

      <input
        type="text"
        placeholder="Ask something..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button onClick={handleAsk}>
        Ask AI
      </button>

      <p>{answer}</p>
    </div>
  );
}

export default AIChat;