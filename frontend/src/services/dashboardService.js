import axios from "axios";

export const getDashboardStats = async () => {

    const response = await axios.get(
        "http://127.0.0.1:8000/dashboard"
    );

    return response.data;

};