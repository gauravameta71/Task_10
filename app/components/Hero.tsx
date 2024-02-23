import React from "react";
import Details from "../Details";
import Form from "./Form";

const Hero = () => {
  return (
    <div className="h-full w-screen flex flex-col">
      <img src="/hero1.png" alt="" className="w-screen h-[550px] bg-cover" />
      {/* contact form */}
      <Form />
      {/* why choose us section */}
      <Details />
    </div>
  );
};

export default Hero;
