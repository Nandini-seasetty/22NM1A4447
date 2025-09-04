import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

export const shortenUrl = async (longUrl, validityPeriod, shortcode) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/shorten`, {
            longUrl,
            validityPeriod,
            shortcode,
        });
        return response.data;
    } catch (error) {
        throw new Error('Error shortening URL: ' + error.message);
    }
};

export const getAnalytics = async (shortcode) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/analytics/${shortcode}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching analytics: ' + error.message);
    }
};