// Подтверждение OTP
import axios from 'axios';

const API_URL = 'http://3.122.115.219:9093';  // Базовый URL для API
 let ok="ok"
 let numbers=1234

export const register = async (firstName, lastName, email, password) => {
    try {
      const response = await axios.post(`${API_URL}/student/register`, {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        code: numbers,
        phone_number: ok,
      });
      return response.data;  // Успешная регистрация
    } catch (error) {
      console.error('Registration Error:', error);
      throw error;  // Ошибка регистрации
    }
  };
  
  // Функция для логина
  export const login = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/student/login`, {
        email,
        password
      });
      return response.data;  // Успешный логин
    } catch (error) {
      console.error('Login Error:', error);
      throw error;  // Ошибка логина
    }
  };

// Отправка OTP на email
export const sendOtp = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/student/forgot-password`, { email });
    return response.data;
  } catch (error) {
    console.error('Send OTP Error:', error);
    throw error.response?.data || 'Failed to send OTP';
  }
};


// Функция для регистрации


// Функция для проверки OTP
export const verifyOtp = async ({ email, otpCode }) => {
    try {
      const response = await axios.post(`${API_URL}/student/accept-code`, {
        email,
        code: otpCode // Убедитесь, что это правильное имя поля
      });
      return response;
    } catch (error) {
      console.error('OTP Verification Error:', error.response ? error.response.data : error.message);
      throw error; // Проброс ошибки для обработки в компоненте
    }
  };

// Сброс пароля
export const resetPassword = async (email, code, newPassword) => {
  try {
    const response = await axios.post(`${API_URL}/student/reset-password`, {
      email,
      code,
      password: newPassword,
    });
    return response.data;
  } catch (error) {
    console.error('Reset Password Error:', error);
    throw error.response?.data || 'Password reset failed';
  }
};
