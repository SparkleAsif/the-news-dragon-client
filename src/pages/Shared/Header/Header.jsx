import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; 
import RightNav from "../RightNav/RightNav";
import LeftNav from '../LeftNav/LeftNav'


const Header = () => {
  const getCurrentDate = () => {
    const date = new Date();
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
    const monthName = date.toLocaleDateString("en-US", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();
    return `${dayName}, ${monthName} ${day}, ${year}`;
  };

  return (
    <div className="max-w-7xl mx-auto text-center py-6">
      {/* Name and Slogan */}
      <div className="max-w-7xl mx-auto text-center py-6">
      <h1 className="text-4xl font-bold">The News Dragon</h1>
      <p className="text-xl italic mt-2">Journalism Without Fear of Favour</p>

      {/* Date */}
      <p className="text-sm text-gray-500 mt-4">{getCurrentDate()}</p>

      {/* Marquee with Latest Button */}
      <div className="mt-4 bg-gray-100 p-2 flex items-center">
        <button className="bg-red-600 text-white px-4 py-2 rounded mr-4 hover:bg-red-700">
          Latest
        </button>
        <marquee behavior="scroll" direction="left" className="font-bold flex-grow">
          I can be a React component, multiple React components, or just some text...... I can be a React component, multiple React components, or just some text......
        </marquee>
      </div>
      </div>

      {/* Navigation with Profile Icon and Login Button */}
      <div className="flex flex-row justify-between items-center p-2 border">
        <div>

        </div>
        <nav className=" mt-4 flex text-lg font-semibold">
            <ul className="flex space-x-6 justify-center ml-[110px]">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
            <li><Link to="/career" className="hover:text-blue-500">Career</Link></li>
            </ul>

        </nav>
            <div className="flex items-center space-x-4 justify-end">
            <FaUserCircle className="text-2xl text-gray-600" />
            <button className="bg-blue-500 text-white px-7 py-2 rounded hover:bg-blue-600">Login</button>
            </div>
      </div>
      
    
      <div className="mt-8 grid grid-cols-12 gap-4">
      {/* Bottom Layout for Left Nav, Main Content, and Right Nav */}
      
      <LeftNav></LeftNav>
        {/* Main Content */}
        <div className="col-span-6 bg-white p-4">
          <h2 className="text-2xl font-bold mb-4">Dragon News Home</h2>
          <p>Your main content goes here.</p>
        </div>

        {/* Right Side Nav */}
        
        <RightNav> </RightNav>
        </div>
        
      </div>
     
    
  );
};

export default Header;
