import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SellerSignUpRequestDto } from "../../../Dtos/Account/SellerSignUpRequestDto.ts";
import { registerSeller } from "../../../api/account.tsx";

const SellerSignUpForm: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const navigate = useNavigate();

  // Password validation logic
  const validatePassword = (password: string): string | null => {
    if (!password) return null; // Hide validation checker if empty
    if (password.length < 8) {
      return 'Password must be at least 8 characters.';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must include at least one capital letter.';
    }
    if (!/[0-9]/.test(password)) {
      return 'Password must include at least one number.';
    }
    if (!/[!@#$%^&*(),.?":{}|<>~`_+\-=\\[\]\\//]/.test(password)) { 
      return 'Password must include at least one special character.';
    }
    return null;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

  
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

    const signUpDto: SellerSignUpRequestDto = {
      firstName,
      lastName,
      email,
      password,
      location,
    };

    const registerSuccess = await registerSeller(signUpDto);

    if (registerSuccess) {
      navigate('/seller');
    }
  };

  return (
    <div
      className="flex items-center justify-center w-full max-w-md p-8 bg-opacity-70 backdrop-blur-md rounded-md shadow-md"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      }}
    >
      <form onSubmit={handleSubmit} className="w-full relative">
        {[ 
          { id: 'firstname', label: 'First Name', value: firstName, setter: setFirstName },
          { id: 'lastname', label: 'Last Name', value: lastName, setter: setLastName },
          { id: 'email', label: 'Email', value: email, setter: setEmail, type: 'email' },
          { id: 'location', label: 'Location', value: location, setter: setLocation },
        ].map(({ id, label, value, setter, type = 'text' }) => (
          <div key={id} className="mb-4">
            <label htmlFor={id} className="block text-white font-semibold mb-2">{label}:</label>
            <input
              type={type}
              id={id}
              value={value}
              onChange={(e) => setter(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 bg-transparent text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        ))}
        
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

        <button
          type="submit"
          className="w-full bg-white text-black py-2 rounded hover:bg-gray-300 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SellerSignUpForm;
