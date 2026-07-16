import axios from "axios";

export const getDashboardStats = async () => {

    const response = await axios.get(
        "https://healthguardian-ai-backend.onrender.com/dashboard"
    );

    return response.data;

};