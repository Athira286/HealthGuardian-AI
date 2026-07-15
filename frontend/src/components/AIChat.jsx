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

      <pre
        style={{
          whiteSpace: "pre-wrap",
          textAlign: "left",
          background: "#1f2937",
          padding: "20px",
          borderRadius: "12px",
          color: "white",
          fontSize: "16px",
          marginTop: "20px",
        }}
      >
        {answer}
      </pre>
    </div>
  );
}

export default AIChat;