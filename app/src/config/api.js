import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

// API Base URL - có thể thay đổi theo môi trường
const API_URL = process.env.EXPO_PUBLIC_API_URL || 'https://devops-3-yqd0.onrender.com';

const api = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor để thêm token vào request
api.interceptors.request.use(
  async (config) => {
    try {
      const token = await SecureStore.getItemAsync('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error getting token:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor để xử lý response và lỗi
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response) {
      // Xử lý lỗi 401, 403 - token không hợp lệ
      if (error.response.status === 401 || error.response.status === 403) {
        await SecureStore.deleteItemAsync('token');
        await SecureStore.deleteItemAsync('user');
        // Navigation sẽ được xử lý trong AuthContext
      }
    }
    return Promise.reject(error);
  }
);

export default api;

