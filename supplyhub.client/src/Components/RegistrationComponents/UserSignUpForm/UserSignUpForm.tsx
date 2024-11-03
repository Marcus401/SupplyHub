import React, { useState } from 'react';

const UserSignUpForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignUpSubmit = (data: { name: string; lastname: string; email: string; password: string }) => {
    console.log('Sign Up data:', data);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSignUpSubmit({ name, lastname, email, password });
  };

  return (
    <div className="flex items-center justify-center w-full max-w-md p-8 bg-opacity-70 backdrop-blur-md rounded-md shadow-md"
         style={{
           backgroundColor: 'rgba(0, 0, 0, 0.6)'
         }}
    >
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-semibold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 bg-transparent text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastname" className="block text-white font-semibold mb-2">Last Name:</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
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
