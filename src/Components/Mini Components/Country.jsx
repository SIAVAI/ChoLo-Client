import maldives from "../../assets/video/maldives.mp4";
import thai from "../../assets/video/thailand.mp4";
import vietnam from "../../assets/video/vietnam.mp4";

const Country = () => {
  return (
    <div className="font-rancho">
      <div className="min-h-screen bg-[#161618] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12">
            Explore by Country
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative ">
              <video
                src={maldives}
                alt="Country 2"
                className="w-full h-full object-cover rounded-md"
                autoPlay
                muted
                loop
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  Maldives
                </h3>
              </div>
            </div>
            {/* Thai */}
            <div className="relative ">
              <video
                src={thai}
                alt="Country 4"
                className="w-full h-full object-cover rounded-md"
                autoPlay
                muted
                loop
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  Thailand
                </h3>
              </div>
            </div>
            <div className="relative ">
              <video
                src={vietnam}
                alt="Country 5"
                className="w-full h-full object-cover rounded-md"
                autoPlay
                muted
                loop
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  Vietnam
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
