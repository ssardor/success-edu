// src/pages/VerifyOtp.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import authService from '../services/authService'; // Убедитесь, что путь верный

const VerifyOtp = () => {
  const [otpCode, setOtpCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await authService.verifyOtp({ email, otpCode });
      navigate('/reset-password', { state: { email } });
    } catch (error) {
      console.error('OTP Verification Error:', error);
      setError('Ошибка верификации OTP. Пожалуйста, попробуйте снова.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Проверка OTP</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-medium text-gray-700">Код OTP</label>
          <input
            type="text"
            value={otpCode}
            onChange={(e) => setOtpCode(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            {loading ? 'Проверка...' : 'Подтвердить OTP'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
