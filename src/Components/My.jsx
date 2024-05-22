import { useEffect, useState, useContext } from "react";
import { AuthContext } from "./Auth/FirebaseProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const My = () => {
  const { user } = useContext(AuthContext);
  const [touristSpots, setTouristSpots] = useState([]);

  useEffect(() => {
    if (user) {
      fetchUserTouristSpots(user.displayName)
        .then((data) => setTouristSpots(data))
        .catch((error) => console.log(error));
    } else {
      setTouristSpots([]);
    }
  }, [user]);

  const fetchUserTouristSpots = async (name) => {
    // Replace with your API endpoint to fetch user-specific tourist spots
    const response = await fetch(
      "https://cholo-server.vercel.app/allTouristSpots"
    );
    const data = await response.json();
    const myData = data.filter((spot) => spot.userName === name);
    console.log(myData);
    return myData;
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Replace with your API endpoint to delete a tourist spot
        fetch(`https://cholo-server.vercel.app/allTouristSpots/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            setTouristSpots(touristSpots.filter((spot) => spot._id !== id));
            toast.success("Tourist spot deleted successfully!");
          })
          .catch((error) => console.log(error));
      }
    });
  };
  return (
    <div>
      <div className="min-h-screen bg-[#161618] text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-rancho text-center pt-10 pb-10">
            My List
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800 text-left text-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-700">Name</th>
                  <th className="py-2 px-4 border-b border-gray-700">
                    Location
                  </th>
                  <th className="py-2 px-4 border-b border-gray-700">
                    Average Cost
                  </th>
                  <th className="py-2 px-4 border-b border-gray-700">
                    Seasonality
                  </th>
                  <th className="py-2 px-4 border-b border-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {touristSpots.map((spot) => (
                  <tr key={spot._id}>
                    <td className="py-2 px-4 border-b border-gray-700">
                      {spot.touristSpotName}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      {spot.location}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      ${spot.averageCost}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700">
                      {spot.seasonality}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-700 flex space-x-4">
                      <Link
                        to={`/update/${spot._id}`}
                        className="bg-transparent border border-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(spot._id)}
                        className="bg-transparent border border-red-500 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default My;
