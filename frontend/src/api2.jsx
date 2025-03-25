import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/cultural-details";  

export const fetchEventNames = async () => {
    const response = await axios.get(`${API_BASE_URL}/event-names`);
    return response.data;
};

export const fetchEventCategories = async () => {
    const response = await axios.get(`${API_BASE_URL}/event-categories`);
    return response.data;
};

export const addCulturalDetail = async (culturalDetail) => {
    const response = await axios.post(`${API_BASE_URL}/add`, culturalDetail);
    return response.data;
};
