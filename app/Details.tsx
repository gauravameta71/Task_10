// Import React
import React from "react";


const MyComponent = () => {
  return (
    <div className=" p-6 bg-white flex ">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h1 className="text-2xl font-bold text-start mb-4 text-blue-900 flex justify-start">
            Why choose us
          </h1>
          <p className="text-sm mb-6 text-gray-600 flex justify-start">
            Here is few reasons why Medical is the best healthcare provider of
            choice
          </p>

          <div className="flex flex-row gap-4">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-lg w-full sm:w-1/2 md:w-1/3">
              <img
                className="w-8 h-10 fill-current text-blue-500 mb-2"
                src="/doc.png"
              >
                {/* Your SVG icon for Card 1 */}
              </img>
              <h2 className="text-xl font-semibold text-blue-500 mb-2">
                Professional Doctor
              </h2>
              <p className="text-gray-600 text-sm">
                Our clinic hires experienced and nationally <br /> certified
                doctors and nurses..
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded-lg  w-full sm:w-1/2 md:w-1/3">
              <img
                className="w-8 h-10 fill-current text-green-500 mb-2"
                src="/fam.png"
              >
                {/* Your SVG icon for Card 2 */}
              </img>
              <h2 className="text-xl font-semibold text-blue-500 mb-2">
                Family Medicine
              </h2>
              <p className="text-gray-600 text-sm">
                We provide a wide variety of family <br /> medicine services
                including hospital care.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 rounded-lg  w-full sm:w-1/2 md:w-1/3">
              <img
                className="w-8 h-10 fill-current text-red-500 mb-2"
                src="/hours.png"
              >
                {/* Your SVG icon for Card 3 */}
              </img>
              <h2 className="text-xl font-semibold text-blue-500 mb-2">
                24/7 Patient support
              </h2>
              <p className="text-gray-600 text-sm">
                Our clinic provides extensive medical <br /> support and
                healthcare services 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
