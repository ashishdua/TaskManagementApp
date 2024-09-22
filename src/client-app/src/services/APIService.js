import axios from 'axios';

const API_URL = 'http://localhost:5055/api/WorkItem';

export const addWorkItem = async (workItem) => {
    try {
        const response = await axios.post(API_URL, workItem);
        return response.data;
    } catch (error) {
        // You can also log error details here if needed
        throw new Error('Error adding work item: ' + error.message);
    }
};
