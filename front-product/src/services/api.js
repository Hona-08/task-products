import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const getProducts = () => api.get('/products');
export const placeOrder = (selectedItems) => api.post('/place-order', { selectedItems });

export default api;
