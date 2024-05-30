import axios from 'axios';

const API_URL = 'http://localhost:3001/api/orders/buyer';

const getAuthToken = () => localStorage.getItem('token');

export const fetchOrderHistory = async () => {
    const token = getAuthToken();
    const response = await axios.get(`${API_URL}/myorders`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const updateOrder = async (orderId) => {
    const token = getAuthToken();
    const response = await axios.put(`${API_URL}/${orderId}`, {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const deleteOrder = async (orderId) => {
    const token = getAuthToken();
    const response = await axios.delete(`${API_URL}/${orderId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};
