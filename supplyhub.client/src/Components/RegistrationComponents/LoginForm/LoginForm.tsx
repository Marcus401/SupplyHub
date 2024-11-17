import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../../../api/account.tsx";
import {UserLoginRequestDto} from "../../../Dtos/Account/UserLoginRequestDto.ts";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const loginDto: UserLoginRequestDto = {
      email,
      password
    };
    
    const loginSuccess = await loginUser(loginDto);
    console.log(email);
    console.log(password);
    if (loginSuccess) {
      navigate('/');
    } 
  };

  return (
    <div className="flex items-center justify-center w-full max-w-md p-8 bg-opacity-70 backdrop-blur-md rounded-md shadow-md"
         style={{
           backgroundColor: 'rgba(0, 0, 0, 0.6)'
         }}
    >
      <form onSubmit={handleSubmit} className="w-full">
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
          <div className="text-right mt-2">
            <a href="#" className="text-sm text-gray-300 hover:text-gray-200">Forgot Password?</a>
          </div>
        </div>
        <button type="submit" className="w-full bg-white text-black py-2 rounded hover:bg-gray-300 transition">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
