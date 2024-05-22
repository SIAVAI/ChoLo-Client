import { Typewriter } from "react-simple-typewriter";
import videoUrl from "../../assets/plane/plane1.mp4";
import imageUrl1 from "../../assets/plane/plane2.jpg";
import imageUrl2 from "../../assets/plane/plane3.jpg";
const Plane = () => {
  return (
    <div>
      <div className="my-10 bg-[#161618] flex flex-col justify-center items-center text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-rancho">
            <Typewriter
              words={[
                "Explore the World",
                "Discover New Horizons",
                "Find Your Adventure",
              ]}
              loop={10}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-8">
            <div className="transform transition-transform duration-500 hover:scale-105 flex justify-center items-center">
              <video
                src={videoUrl}
                alt="Travel Video"
                className="w-[60%] h-auto object-cover rounded-md "
                autoPlay
                muted
                loop
              />
            </div>
            <div className="flex justify-center items-center gap-8">
              <div className="transform transition-transform duration-500 hover:scale-105">
                <img
                  src={imageUrl1}
                  alt="Travel Image 1"
                  className="h-auto object-cover rounded-md w-auto"
                />
              </div>
              <div className="transform transition-transform duration-500 hover:scale-105">
                <img
                  src={imageUrl2}
                  alt="Travel Image 2"
                  className=" h-auto object-cover rounded-md w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plane;
