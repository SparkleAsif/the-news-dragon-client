import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div className="col-span-3 p-4 border">
      <div className="flex flex-col space-y-3 mb-10">
        <h2 className="text-2xl font-semibold mb-2">Login With</h2>
        <button className="w-full p-2 border rounded flex items-center justify-start space-x-2">
          <FaGoogle />
          <span>Login with Google</span>
        </button>
        <button className="w-full p-2 border rounded flex items-center justify-start space-x-2">
          <FaGithub />
          <span>Login with Github</span>
        </button>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Find Us On</h2>
        <div className="text-start ">
          <button className="w-full p-5 border  flex items-center justify-start space-x-2">
            <FaFacebook />
            <span>Facebook</span>
          </button>
          <button className="w-full p-5 border  flex items-center justify-start space-x-2">
            <FaTwitter />
            <span>Twitter</span>
          </button>
          <button className="w-full p-5 border  flex items-center justify-start space-x-2">
            <FaInstagram />
            <span>Instagram</span>
          </button>
        </div>
      </div>
      <QZone></QZone>
      
      
      <div
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center mt-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-6">
          <h2 className="text-3xl font-bold mb-4">
            Create an Amazing Newspaper
          </h2>
          <p className="text-lg text-center max-w-2xl">
            Discover thousands of <br /> options, easy to <br /> customize layouts, one-<br /> click 
            to import demo <br /> and much more
          </p>
          <button className="bg-red-600 mt-5 p-3">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
