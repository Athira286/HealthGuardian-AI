import axios from "axios";

export const getDashboardStats = async () => {
  try {
    const response = await axios.get(
      "https://healthguardian-ai-backend.onrender.com/dashboard"
    );

    console.log("Dashboard Response:", response.data);

    return response.data;
  } catch (err) {
    console.error("Dashboard Error:", err);
    throw err;
  }
};