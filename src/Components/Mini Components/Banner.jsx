import bg from "../../assets/video/mountain.mp4";

import { Fade } from "react-awesome-reveal";

import { useState } from "react";
const Banner = () => {
  const [price, setPrice] = useState(0);
  const [countries] = useState([
    "Thailand",
    "Vietnam",
    "Malaysia",
    "Singapore",
    "Indonesia",
    "Philippines",
    "Cambodia",
    "Laos",
    "Myanmar",
    "Brunei",
    "Timor-Leste",
  ]);
  return (
    <div className="pt-12">
      {/* Banner */}
      <div className="hero min-h-screen relative">
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover"
        >
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay bg-opacity-60 absolute w-full h-full"></div>
        <div className="hero-content text-center text-neutral-content relative z-10">
          <div className="">
            <h1 className="mb-5 text-4xl md:text-5xl lg:text-6xl font-bold font-dance">
              <Fade>
                <p>Let us Take You</p>
                <p>Away</p>
              </Fade>
            </h1>
            <p className="my-8 text-xl font-rancho">
              Experience the beauty, culture, and adventure across stunning
              destinations.
            </p>
            <div className="flex justify-between items-center font-roboto font-bold">
              <Fade cascade>
                <p>B</p>
                <p>O</p>
                <p>O</p>
                <p>K</p>
                <p>N</p>
                <p>O</p>
                <p>W</p>
              </Fade>
            </div>

            <div className="mt-10 flex items-center justify-center bg-cover bg-center relative font-rancho">
              <div className="relative z-10 p-8 bg-[#161618] bg-opacity-30 rounded-lg shadow-lg max-w-4xl mx-auto text-gray-700">
                <form className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                  <div className="relative">
                    <label
                      htmlFor="destination"
                      className="block text-sm font-medium text-white"
                    >
                      Where To
                    </label>
                    <div className="mt-1 relative">
                      <select
                        id="destination"
                        name="destination"
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="arrival"
                      className="block text-sm font-medium text-white"
                    >
                      Arrival Date
                    </label>
                    <input
                      type="date"
                      id="arrival"
                      name="arrival"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="leaving"
                      className="block text-sm font-medium text-white"
                    >
                      Leaving Date
                    </label>
                    <input
                      type="date"
                      id="leaving"
                      name="leaving"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-white"
                    >
                      Price Range
                    </label>
                    <div className="text-center mt-2 text-white">${price}</div>
                    <input
                      type="range"
                      id="price"
                      name="price"
                      min="0"
                      max="10000"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="mt-1 block w-full"
                    />
                  </div>
                </form>
                <div className="lg:col-span-4 flex justify-center mt-4">
                  <button className="px-6 py-2 bg-transparent text-white font-semibold rounded-lg hover:border-2 hover:border-blue-500 transition duration-300 border-2 border-white">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
