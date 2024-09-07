import React, { useState } from 'react';
import { login } from '../services/authService';  // Импорт функции логина
import { useNavigate } from 'react-router-dom';  // Для перенаправления пользователя после успешного входа

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();  // Для навигации между страницами

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');  // Очистка предыдущего сообщения об ошибке

    try {
      const data = await login(email, password);  // Вызов функции логина
      console.log('Login successful:', data);
      
      // Здесь вы можете сохранить токен или данные пользователя, если они приходят с сервера
      // Например: localStorage.setItem('token', data.token);
      
      // Перенаправление пользователя на страницу аккаунта
      navigate('/account');  // Перенаправляем на страницу аккаунта после успешного логина
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Failed to login. Please check your email and password.');  // Отображение сообщения об ошибке
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="text-red-500 text-sm mb-4">
            {errorMessage}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Sign In
        </button>

        {/* Link to Sign Up */}
        <div className="mt-4 text-center">
          <a href="/signup" className="text-indigo-600 hover:underline">
            Don't have an account? Sign up
          </a>
        </div>

        {/* Link to Forgot Password */}
        <div className="mt-2 text-center">
          <a href="/forgot-password" className="text-indigo-600 hover:underline">
            Forgot your password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
