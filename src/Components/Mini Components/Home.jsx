import Banner from "./Banner";
import MiniSlider from "./MiniSlider";
import Cultural from "./Cultural";
import Subscribe from "./Subscribe";
import Voice from "./Voice";

import Service from "./Service";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import Plane from "./Plane";
import Country from "./Country";
import CountrySection from "../CountrySection";

const Home = () => {
  AOS.init();
  const spots = useLoaderData();
  const [touristSpots, setTouristSpots] = useState(spots);
  //console.log(touristSpots);
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <MiniSlider></MiniSlider>

      {/* tourist spot */}
      <Plane></Plane>
      <div className="mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-rancho font-bold mt-10 mb-4 text-center">
          Featured Tourist Spots
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
          {touristSpots.map((spot) => (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              key={spot._id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <img
                src={spot.imageUrl}
                alt={spot.touristSpotName}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <div className="flex flex-col justify-start items-start gap-4 my-4 font-rancho">
                <h3 className="text-2xl font-bold mb-2">
                  {spot.touristSpotName}
                </h3>
                <h3 className="text-2xl font-bold mb-2">
                  Country : {spot.countryName}
                </h3>
                <p className="mb-2">Average Cost: ${spot.averageCost}</p>
                <p className="mb-2">
                  Total Visitors per Year: {spot.totalVisitorsPerYear}
                </p>
                <p className="mb-2">Travel Time: {spot.travelTime}</p>
                <p className="mb-2">Seasonality: {spot.seasonality}</p>
              </div>
              <Link
                to={`/allTourist/${spot._id}`}
                className="bg-transparent border-2 border-white hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>

      <CountrySection></CountrySection>

      <Cultural></Cultural>
      <Country></Country>

      <Voice></Voice>

      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
