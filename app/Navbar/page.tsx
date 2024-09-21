'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-black">

    <Image 
   src="/assets/threads.png"
    alt='threads logo' 
    width={40} 
    height={40} 
    className="flex-shrink-0 rounded-lg"/>

    <div className="flex-grow text-center text-white transform">
     Home
    </div>

    <div className="flex-grow text-center  text-white">
     About
    </div>

    <div className="flex-grow text-center  text-white">
     Post
    </div>

    <div className="flex-grow text-center  text-white">
     Search
    </div>

    <div className="flex-shrink-0 text-black">
     <Link href={'../../Auth/Login'}><button className='text-black font-medium bg-[white] rounded-lg h-9 w-20 mr-7'>Login</button></Link> 
    </div>
  </nav>
  );
};

export default NavBar;
