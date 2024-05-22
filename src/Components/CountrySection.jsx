import { Link } from "react-router-dom";
import bg from "../assets/CountrySection/bangladesh.jpg";
import thai from "../assets/CountrySection/thailand.jpg";
import mal from "../assets/CountrySection/maldives.jpg";
import indo from "../assets/CountrySection/indonesia.jpg";
import viet from "../assets/CountrySection/vietnam.jpg";
import nepal from "../assets/CountrySection/nepal.jpg";

const CountrySection = () => {
  return (
    <div>
      <div className="py-12 bg-[#161618] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 font-rancho">
            Explore Countries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1 */}
            <Link to="">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <img
                  src={bg}
                  alt="Bangladesh"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">Bangladesh</h3>
                <p>
                  Explore the beauty of the Sundarbans and historical sites.
                </p>
              </div>
            </Link>
            {/* 2 */}
            <Link to="">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <img
                  src={thai}
                  alt="Thailand"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">Thailand</h3>
                <p>Experience vibrant culture and stunning beaches.</p>
              </div>
            </Link>
            {/* 3 */}
            <Link to="">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <img
                  src={mal}
                  alt="Maldives"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">Maldives</h3>
                <p>Relax in the crystal-clear waters and luxurious resorts.</p>
              </div>
            </Link>
            {/* 4 */}
            <Link to="">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <img
                  src={indo}
                  alt="Indonesia"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">Indonesia</h3>
                <p>Discover diverse landscapes and rich heritage.</p>
              </div>
            </Link>
            {/* 5 */}
            <Link to="">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <img
                  src={viet}
                  alt="Vietnam"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">Vietnam</h3>
                <p>Enjoy beautiful landscapes and delicious cuisine.</p>
              </div>
            </Link>
            {/* 6 */}
            <Link to="">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <img
                  src={nepal}
                  alt="Nepal"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">Nepal</h3>
                <p>Adventure awaits in the mountains and spiritual sites.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountrySection;
