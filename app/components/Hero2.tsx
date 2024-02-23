import React from 'react';

const Services = () => {
  return (
    <>
      <div
        className="h-screen  bg-white p-[60px]"
        style={{ backgroundImage: "url(/assets/bg2.png)" }}
      >
        <h1 className="text-4xl font-semibold text-center mb-8 text-blue-900">
          Our Services
        </h1>

        <p className="text-gray-700 text-xs flex justify-center mb[-34px] pb-4">
          We offer complete healthcare to individuals with various health
          concern.
        </p>
        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 pl-16">
          {/* Card 1 */}
          <div className="bg-white rounded-md overflow-hidden shadow-md w-[235px]">
            <div className=" overflow-hidden">
              <img
                src="/doc1.jpg"
                alt="Service 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-blue-900">
                Health Care <br /> Program
              </h2>
              <p className="text-gray-700 overflow-auto text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                itaque voluptatem possimus excepturi provident, sit nostrum.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-md overflow-hidden shadow-md w-[235px]">
            <div className=" overflow-hidden">
              <img
                src="/doc2.jpg"
                alt="Service 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-blue-900">
                Pregnancy & <br /> Child Birth.
              </h2>
              <p className="text-gray-700 overflow-auto text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                itaque voluptatem possimus excepturi provident, sit nostrum.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-md overflow-hidden shadow-md w-[235px]">
            <div className=" overflow-hidden">
              <img
                src="/doc3.png"
                alt="Service 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-blue-900">
                Laboratory <br />
                Analysis
              </h2>
              <p className="text-gray-700 overflow-auto text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                itaque voluptatem possimus excepturi provident, sit nostrum.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-md overflow-hidden shadow-md w-[235px]">
            <div className=" overflow-hidden">
              <img
                src="/doc4.png"
                alt="Service 4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-blue-900">
                Imaging & <br /> Diagnostics
              </h2>
              <p className="text-gray-700 overflow-auto text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                itaque voluptatem possimus excepturi provident, sit nostrum.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <div
        className="flex p-[166px] pb-24"
        style={{ backgroundImage: "url(/bg3.png)" }}
      >
        {/* Left Side (Image Card) */}
        <div className="w-1/2">
          <img
            src="/vid.png"
            alt=""
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>

        {/* Right Side (Heading and Subheading) */}
        <div className="w-1/2 p-4">
          <h2 className="text-3xl font-semibold mb-2 text-blue-800 pt-28 pl-8">
            Watch Video
          </h2>
          <p className="text-gray-600  text-xs pl-8">
            Find out about our clinic by watching <br /> this video presentation
            of Medical{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
