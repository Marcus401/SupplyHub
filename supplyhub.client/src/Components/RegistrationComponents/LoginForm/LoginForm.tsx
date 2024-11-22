import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../../../api/account.tsx";
import { UserLoginRequestDto } from "../../../Dtos/Account/UserLoginRequestDto.ts";
import default_avatar from "../../../assets/default-avatar.png"

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null); 
  const navigate = useNavigate();

  // Validate password criteria
  const validatePassword = (password: string): string | null => {
    if (password.length < 8) {
      return 'Password must be at least 8 characters.';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must include at least one capital letter.';
    }
    if (!/[0-9]/.test(password)) {
      return 'Password must include at least one number.';
    }
    
    return null; 
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setErrorMessage(null); 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const byteArray = await fetch(default_avatar).then(res => res.arrayBuffer()).then(buffer => new Uint8Array(buffer));
    const byteArrayString = Array.from(byteArray).join(", ");
    
    
    console.log(byteArrayString);

    const validationError = validatePassword(password);
    if (validationError) {
      setErrorMessage(validationError);
      return; 
    }

    const loginDto: UserLoginRequestDto = {
      email,
      password
    };

    const loginSuccess = await loginUser(loginDto);
    if (loginSuccess) {
      navigate('/');
    }
  };

  return (
    <div
      className="flex items-center justify-center w-full max-w-md p-8 bg-opacity-70 backdrop-blur-md rounded-md shadow-md"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
      }}
    >
      <form onSubmit={handleSubmit} className="w-full relative">
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
          {errorMessage && (
            <div
              className="absolute top-full mt-2 left-0 bg-white text-black text-sm p-2 rounded shadow-md"
              style={{ zIndex: 10 }}
            >
              {errorMessage}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-white text-black py-2 rounded hover:bg-gray-300 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
