import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {UserSignUpRequestDto} from "../../../Dtos/Account/UserSignUpRequestDto.ts";
import {registerUser} from "../../../api/account.tsx";

const UserSignUpForm: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const signUpDto : UserSignUpRequestDto = {
        firstName,
        lastName,
        email,
        password
    };
    
    const registerSuccess = await registerUser(signUpDto);
    if(registerSuccess){
        navigate('/');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md p-8 bg-opacity-70 backdrop-blur-md rounded-md shadow-md"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
      }}
    >
      <div className="text-center mb-6">
        <p className="text-white">
          Signing up as a seller?{' '}
          <Link to="/register/seller" className="text-blue-400 cursor-pointer underline">
            Click here
          </Link>.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-semibold mb-2">Name:</label>
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
        <div className="mb-4">
          <label htmlFor="password" className="block text-white font-semibold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 bg-transparent text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
        <button type="submit" className="w-full bg-white text-black py-2 rounded hover:bg-gray-300 transition">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default UserSignUpForm;
