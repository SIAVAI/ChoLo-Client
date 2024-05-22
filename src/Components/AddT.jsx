import { useContext } from "react";
import add from "../assets/img/add.jpg";

import Swal from "sweetalert2";
import { AuthContext } from "./Auth/FirebaseProvider";

const AddT = () => {
  const { user } = useContext(AuthContext);
  //console.log(user);
  //console.log(user.displayName);
  //console.log(user.email);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const imageUrl = form.imageUrl.value;
    const touristSpotName = form.touristSpotName.value;
    const countryName = form.countryName.value;
    const location = form.location.value;
    const description = form.description.value;
    const averageCost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;

    const newData = {
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
    };
    console.log(newData);
    fetch("https://cholo-server.vercel.app/allTouristSpots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "New Tourist Spot has been Added!!!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    form.reset();
  };
  return (
    <div className="font-rancho pt-12">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${add})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content w-full">
          <div className="w-full">
            {/* Start */}
            <div className="bg-transparent text-white flex items-center justify-center py-12">
              <div className="w-full max-w-lg">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
                  Add Tourist Spot
                </h2>
                {/* Form Starts */}
                <form
                  onSubmit={handleSubmit}
                  className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-4 w-auto"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="imageUrl"
                      >
                        Image URL
                      </label>
                      <input
                        type="url"
                        name="imageUrl"
                        className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 focus:outline-none focus:border-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="touristSpotName"
                      >
                        Tourist Spot Name
                      </label>
                      <input
                        type="text"
                        name="touristSpotName"
                        className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 focus:outline-none focus:border-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="countryName"
                      >
                        Country Name
                      </label>
                      <input
                        type="text"
                        name="countryName"
                        className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 focus:outline-none focus:border-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="location"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 focus:outline-none focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="description"
                    >
                      Short Description
                    </label>
                    <textarea
                      name="description"
                      className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 focus:outline-none focus:border-blue-500"
                      required
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="averageCost"
                      >
                        Average Cost
                      </label>
                      <input
                        type="number"
                        name="averageCost"
                        className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 focus:outline-none focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="seasonality"
                      >
                        Seasonality
                      </label>
                      <input
                        type="text"
                        name="seasonality"
                        className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 focus:outline-none focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="travelTime"
                      >
                        Travel Time (e.g., 7 days)
                      </label>
                      <input
                        type="text"
                        name="travelTime"
                        className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 focus:outline-none focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        htmlFor="totalVisitorsPerYear"
                      >
                        Total Visitors Per Year
                      </label>
                      <input
                        type="number"
                        name="totalVisitorsPerYear"
                        className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 focus:outline-none focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="userEmail"
                    >
                      User Email
                    </label>
                    <input
                      type="email"
                      name="userEmail"
                      value={user.email}
                      className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="userName"
                    >
                      User Name
                    </label>
                    <input
                      type="text"
                      name="userName"
                      value={user.displayName}
                      className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  {/* Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-transparent border-2 border-white hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddT;
