import axios from 'axios';

const API_URL = 'http://localhost:5055/api/WorkItem';

export const addWorkItem = async (workItem) => {
    try {
        const response = await axios.post(API_URL, workItem);
        return response.data;
    } catch (error) {
        throw new Error('Error adding work item: ' + error.message);
    }
};

export const getWorkItems = async () => {
    try {
        return await axios.get(API_URL);
    } catch (error) {
        throw new Error('Error in fetching work items: ' + error.message);
    }
}
