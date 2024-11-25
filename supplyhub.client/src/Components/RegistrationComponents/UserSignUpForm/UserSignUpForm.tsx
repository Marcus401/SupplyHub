import React, { useState } from 'react';
<<<<<<< HEAD
import {Link, useNavigate} from 'react-router-dom';
=======
import { Link, useNavigate } from 'react-router-dom';
>>>>>>> reyes
import { UserSignUpRequestDto } from "../../../Dtos/Account/UserSignUpRequestDto.ts";
import { registerUser } from "../../../api/account.tsx";

const UserSignUpForm: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Password validation logic
  const validatePassword = (password: string): string | null => {
    if (!password) return null; 
    if (password.length < 8) {
      return 'Password must be at least 8 characters.';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must include at least one capital letter.';
    }
    if (!/[0-9]/.test(password)) {
      return 'Password must include at least one number.';
    }
    if (!/[!@#$%^&*(),.?":{}|<>~`_+\-=\\[\]\/]/.test(password)) { 
      return 'Password must include at least one special character.';
    }
    return null;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

    // Update the password error state
    const validationMessage = validatePassword(inputPassword);
    setPasswordError(validationMessage);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationMessage = validatePassword(password);
    if (validationMessage) {
      setPasswordError(validationMessage); 
      return;
    }

    const signUpDto: UserSignUpRequestDto = {
      firstName,
      lastName,
      email,
      password,
    };

    const registerSuccess = await registerUser(signUpDto);
    if (registerSuccess) {
      navigate('/');
    }
  };

  return (
    <div
      className="flex items-center justify-center w-full max-w-md p-8 bg-opacity-70 backdrop-blur-md rounded-md shadow-md"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      }}
    >
      <div className="w-full relative">
        {/* Seller Sign-Up Link at the top */}
        <p className="text-center text-white mb-4">
          Signing up as a seller?{' '}
          <Link to="/register/seller" className="text-blue-400 underline hover:text-blue-600">
            Click here
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="w-full relative">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-semibold mb-2">First Name:</label>
            <input
              type="text"
              id="name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 bg-transparent text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-white font-semibold mb-2">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 bg-transparent text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-semibold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 bg-transparent text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-white font-semibold mb-2">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="w-full px-4 py-2 border border-gray-300 bg-transparent text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
            />
            
            {passwordError && (
              <div
                className="absolute right-0 top-0 mt-2 text-black bg-white text-xs p-2 rounded shadow-lg"
                style={{ width: '200px', transform: 'translateX(110%)', zIndex: 10 }}
              >
                {passwordError}
              </div>
            )}
          </div>

          <button type="submit" className="w-full bg-white text-black py-2 rounded hover:bg-gray-300 transition">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSignUpForm;
