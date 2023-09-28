import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Register from './register';
// import Login from './login';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-b border-gray-800 p-2 flex justify-between items-center">
      <div className="flex items-center">
        <button
          className="lg:hidden text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 mr-4"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <h1 className="text-xl font-semibold">HR Admin System</h1>
      </div>
      <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
        <Link to="/">
        
            
            {/* <a
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-blue-600 mr-4"
            href="#"
            >
            Home
            </a> */}
            <Link to="/register">
            <a
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-blue-600 mr-4"
             href="./register.tsx"
            >
            Register
            </a>
            </Link>
            <Link to="/login">
            <a
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-blue-600"
            href="./login.tsx"
            >
            Login
            </a>
            </Link>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
