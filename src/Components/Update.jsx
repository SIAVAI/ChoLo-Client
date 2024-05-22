import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./Auth/FirebaseProvider";

const Update = () => {
  const data = useLoaderData();
  const { _id } = data;
  const id = _id;
  console.log(data);

  const { user } = useContext(AuthContext);

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
    //console.log(newData);
    fetch(`https://cholo-server.vercel.app/allTouristSpots/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Tourist Spot has been Updated!!!",
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
    <div className="font-rancho pt-10">
      <div className="bg-transparent text-white flex items-center justify-center py-12">
        <div className="w-full max-w-lg">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
            Update Tourist Spot
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
                  placeholder="Update imageUrl"
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
                  placeholder="Update touristSpotName"
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
                  placeholder="Update countryName"
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
                  placeholder="Update location"
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
                placeholder="Update description"
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
                  placeholder="Update averageCost"
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
                  placeholder="Update seasonality"
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
                  placeholder="Update travelTime"
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
                  placeholder="Update totalVisitorsPerYear"
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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
