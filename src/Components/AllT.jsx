/* eslint-disable react-hooks/exhaustive-deps */
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const AllT = () => {
  AOS.init();
  const spots = useLoaderData();
  const [touristSpots, setTouristSpots] = useState(spots);
  const [sortOrder, setSortOrder] = useState("ascending");

  useEffect(() => {
    sortTouristSpots(sortOrder);
  }, [sortOrder]);

  const handleSortChange = (e) => {
    const order = e.target.value;
    //console.log(order);
    setSortOrder(order);
  };

  const sortTouristSpots = (order) => {
    const sorted = [...touristSpots].sort((a, b) => {
      const aCost = parseInt(a.averageCost);
      const bCost = parseInt(b.averageCost);
      return order === "ascending" ? aCost - bCost : bCost - aCost;
    });
    setTouristSpots(sorted);
  };

  return (
    <div className="pt-20">
      <div className="min-h-screen bg-[#161618] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-between items-center mb-8 gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-rancho flex justify-center items-center">
              All Tourist Spots
              <AiOutlineDoubleRight />
            </h2>
            <select
              className="bg-gray-800 border border-gray-600 text-white rounded-lg py-2 px-4"
              value={sortOrder}
              onChange={handleSortChange}
            >
              <option value="ascending">Sort by Cost: Low to High</option>
              <option value="descending">Sort by Cost: High to Low</option>
            </select>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </div>
  );
};

export default AllT;
