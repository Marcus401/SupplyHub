import React, { useState } from 'react';

const SellerSignUpForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  const handleSignUpSubmit = (data: { name: string; lastname: string; email: string; password: string; location: string }) => {
    console.log('Sign Up data:', data);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSignUpSubmit({ name, lastname, email, password, location });
  };

  return (
    <div className="flex items-center justify-center w-full max-w-md p-8 bg-opacity-70 backdrop-blur-md rounded-md shadow-md"
         style={{
           backgroundColor: 'rgba(0, 0, 0, 0.6)'
         }}
    >
      <form onSubmit={handleSubmit} className="w-full">
        {[
          { id: 'name', label: 'Name', value: name, setter: setName },
          { id: 'lastname', label: 'Last Name', value: lastname, setter: setLastname },
          { id: 'email', label: 'Email', value: email, setter: setEmail, type: 'email' },
          { id: 'password', label: 'Password', value: password, setter: setPassword, type: 'password' },
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

        <button type="submit" className="w-full bg-white text-black py-2 rounded hover:bg-gray-300 transition">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SellerSignUpForm;
