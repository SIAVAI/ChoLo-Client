import { useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

/* eslint-disable react/prop-types */
const ViewDetails = () => {
  const data = useLoaderData();
  const {
    imageUrl,
    touristSpotName,
    countryName,
    location,
    description,
    averageCost,
    seasonality,
    travelTime,
    totalVisitorsPerYear,
    userEmail,
    userName,
  } = data;
  return (
    <div className=" text-white pt-20">
      <h2 className="text-4xl md:tex-5xl lg:text-6xl font-bold font-rancho  mb-6 text-center">
        This the Details of {touristSpotName}
      </h2>
      <div className="flex justify-center items-center">
        <div className="card w-full md:w-[60%] lg:w-[60%] bg-gray-700 shadow-xl p-6">
          <figure>
            <img src={imageUrl} alt="Spot" />
          </figure>
          <div className="card-body font-rancho text-white text-2xl">
            <Fade cascade>
              <h2 className="card-title text-4xl font-bold">
                {touristSpotName}
              </h2>
              <p>Name of the Country : {countryName}</p>
              <p>Location : {location}</p>
              <p>Cost Avg : {averageCost}</p>
              <p>Seasonality : {seasonality}</p>
              <p>TravelTime : {travelTime}</p>
              <p>Total Visitors Per Year : {totalVisitorsPerYear}</p>
              <p>Some Description :</p>
              <p>{description}</p>
            </Fade>
            <div className="mt-2 text-4xl flex flex-col justify-end items-center">
              <p>Name: {userName}</p>
              <p>Email: {userEmail}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
