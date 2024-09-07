import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { register } from '../services/authService';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isRegistered, setIsRegistered] = useState(false); // Статус успешной регистрации

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await register(firstName, lastName, email, password);
      console.log('Registration successful:', data);
      setIsRegistered(true); // Успешная регистрация
    } catch (error) {
      console.error('Registration error:', error);
      setErrorMessage('Failed to register. Please try again.');
    }
  };

  // Перенаправление после успешной регистрации
  if (isRegistered) {
    return <Navigate to="/otp" replace={true} />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;



// import React, { useState } from 'react';
// import { register } from '../services/authService'; // Путь к authService может отличаться

// const SignUp = ({ history }) => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!firstName || !lastName || !email || !password) {
//       setError('All fields are required');
//       return;
//     }

//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setError('Invalid email format');
//       return;
//     }

//     if (password.length < 6) {
//       setError('Password must be at least 6 characters long');
//       return;
//     }

//     try {
//       await register(firstName, lastName, email, password);
//       history.push('/otp');
//     } catch (err) {
//       setError(err.message || 'Registration failed');
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
//       {error && <p className="text-red-500 mb-4">{error}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="First Name"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//           className="p-2 border border-gray-300 rounded w-full"
//         />
//         <input
//           type="text"
//           placeholder="Last Name"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//           className="p-2 border border-gray-300 rounded w-full"
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="p-2 border border-gray-300 rounded w-full"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="p-2 border border-gray-300 rounded w-full"
//         />
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
