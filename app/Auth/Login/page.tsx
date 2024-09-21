'use client';

import React, { useState, ChangeEvent } from 'react';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/authbg.png')` }}
    >
      <div className='bg-black bg-opacity-50 backdrop-blur-lg p-8 rounded-lg shadow-lg'>
        <h3 className="text-center text-xl font-bold mb-4 text-white">Login</h3>
        
        <div className="relative mb-4">
          <input
            id="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
            className="w-full p-2 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <label
            htmlFor="email"
            className={`absolute left-3 top-2 transition-all duration-300 ${email ? "text-blue-600 text-xs" : "text-gray-400"} 
                        ${email ? "translate-y-[-10px]" : "translate-y-0"}`}
          >
            Email
          </label>
        </div>

        <div className="relative mb-4">
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full p-2 border border-gray-300 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <label
            htmlFor="password"
            className={`absolute left-3 top-2 transition-all duration-300 ${password ? "text-blue-600 text-xs" : "text-gray-400"} 
                        ${password ? "translate-y-[-10px]" : "translate-y-0"}`}
          >
            Password
          </label>
        </div>

        <button className="w-full bg-black text-white font-bold py-2 rounded">Login</button>

        <Link href={'../../Auth/SignUp'} className='text-white text-center block mt-4'>Sign Up</Link>

      </div>
      
    </div>
  );
}
