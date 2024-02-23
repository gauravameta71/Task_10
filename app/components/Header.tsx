import React from "react";

const Header = () => {
  return (
    
<>
    <div className="w-full h-16 flex text-black font-semibold text-sm bg-white">
      <img
        src="/logo.png"
        alt=""
        className="w-[230px] h-6 mr-4  mt-5 pl-[150px]"
      />

      <div className="flex justify-start pl-20  mt-6 gap-4">
        <a href="#features" className="hover:text-gray-3">
          About
        </a>
        <a href="#features" className="hover:text-gray-3">
          Services
        </a>
        <a href="#features" className="hover:text-gray-3">
          Review
        </a>
        <a href="#features" className="hover:text-gray-3">
          Location
        </a>

        <p className="text-black flex pl-[36rem] pb-2">
          <span className="text-blue-500 font-bold text-xl">
            P : +1234567890
          </span>
        </p>
      </div>
      
    </div>

    
<div className="text-xs text-black flex justify-end pr-44 mt-[-22px]"><p>12, xyz street, London</p></div>

</>
  );
};

export default Header;
