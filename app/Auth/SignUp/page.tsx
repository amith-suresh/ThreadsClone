'use client';
import React, { useState, ChangeEvent, MouseEvent } from 'react';


const SignUp: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [number, setNumber] = useState<number | undefined>(undefined);


  

  const registerHandle = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(name, username, email, password, number);
  };

  return (
    <div className='flex items-center justify-center h-screen bg-cover bg-center' style={{ backgroundImage: `url('/assets/authbg.png')` }}>
      <div className='bg-black bg-opacity-50 backdrop-blur-lg p-6 md:p-8 rounded-lg shadow-lg w-11/12 md:w-1/3'>
        <form className="flex flex-col">
          <h3 className="text-white text-lg md:text-xl font-semibold mb-4">Sign Up</h3>
          
          <label htmlFor="name" className="text-white">Name</label>
          <input 
            id="name" 
            type="text" 
            placeholder="Name.." 
            value={name} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
            className="mb-4 p-2 rounded bg-transparent border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          
          <label htmlFor="username" className="text-white">Username</label>
          <input 
            id="username" 
            type="text" 
            placeholder="Username.." 
            value={username} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} 
            className="mb-4 p-2 rounded bg-transparent border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          
          <label htmlFor="email" className="text-white">Email</label>
          <input 
            id="email" 
            type="email" 
            placeholder="Email.." 
            value={email} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
            className="mb-4 p-2 rounded bg-transparent border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          
          <label htmlFor="password" className="text-white">Password</label>
          <input 
            id="password" 
            type="password" 
            placeholder="Password.." 
            value={password} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} 
            className="mb-4 p-2 rounded bg-transparent border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          
          <label htmlFor="number" className="text-white">Phone Number</label>
          <input 
            id="number" 
            type="number" 
            placeholder="Number" 
            value={number ?? ""} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNumber(Number(e.target.value))} 
            className="mb-4 p-2 rounded bg-transparent border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          
          <button 
            type="submit" 
            onClick={registerHandle} 
            className="bg-black text-white p-2 rounded transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
