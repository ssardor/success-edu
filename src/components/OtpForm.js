import { useState } from 'react';

const OtpForm = ({ onSubmit }) => {
  const [otp, setOtp] = useState('');

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      onSubmit(otp);
    } else {
      alert('OTP must be 6 digits');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <div>
        <label>Enter OTP</label>
        <input
          type="text"
          name="otp"
          value={otp}
          onChange={handleChange}
          maxLength="6"
          className="border p-2 w-full mb-4 text-center tracking-widest"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Verify OTP</button>
    </form>
  );
};

export default OtpForm;
