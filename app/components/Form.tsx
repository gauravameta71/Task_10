import React from "react";

const ContactForm = () => {
  return (
    <div className=" text-white shadow-md p-6 w-[350px] h-full rounded-2xl flex flex-col ml-[63%] m-0 bg-transparent bg-white mt-[-438px]">
      <h1 className="text-2xl font-bold mb-4 flex justify-center bg-blue-900 h-[80px] pt-6 m-0">
        Make an Appoiintment
      </h1>
      <p className="text-xs mb-6 text-black">
        Please fill out the form below to get in touch with us.
      </p>

      <form className="max-w-md mx-auto">
        <div className="mb-4 text-gray-600">
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border rounded"
            placeholder="Name"
            required
          />
        </div>

        <div className="mb-4 text-gray-600">
          <label htmlFor="email" className="block text-sm font-semibold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border rounded"
            placeholder="Email"
            required
          />
        </div>

        <div className="mb-4 text-gray-600">
          <label htmlFor="phone" className="block text-sm font-semibold">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full p-2 border rounded"
            placeholder="Phone"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-white text-blue-500 py-2 px-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white"
        >
          Buy Now
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
