// src/pages/ForgotPassword.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService'; // Убедитесь, что путь верный

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await authService.sendOtp({ email });
      navigate('/verify-otp', { state: { email } });
    } catch (error) {
      console.error('Forgot Password Error:', error);
      setError('Ошибка отправки OTP. Пожалуйста, попробуйте снова.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Восстановление пароля</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            {loading ? 'Отправка...' : 'Отправить OTP'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
