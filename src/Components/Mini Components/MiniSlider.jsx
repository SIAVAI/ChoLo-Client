import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "animate.css";
import { GiWindSlap } from "react-icons/gi";
import { GiWindyStripes } from "react-icons/gi";
const MiniSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h2 className="animate__animated animate__zoomIn flex justify-center items-center text-4xl md:text-5xl lg:text-6xl font-rancho font-medium mt-16 mb-6">
        <GiWindyStripes />
        Delve Into
        <GiWindSlap />
      </h2>
      <div className="overflow-hidden font-rancho p-2">
        <div className=" bg-[#161618] p-4 flex items-center justify-center ">
          <Slider {...settings} className="w-full">
            <div className="p-2">
              <div className="flex flex-col items-center justify-center bg-transparent text-white p-6 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl border-2 border-white hover:border-2 hover:border-blue-600">
                <div className="text-4xl mb-4">🚢</div>
                <h3 className="text-lg font-semibold mb-2 text-blue-500">
                  Ship Cruise
                </h3>
                <p className="text-sm text-blue-500">10+</p>
              </div>
            </div>
            <div className="p-2">
              <div className="flex flex-col items-center justify-center bg-transparent text-white p-6 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl border-2 border-white hover:border-2 hover:border-blue-600">
                <div className="text-4xl mb-4">🍴</div>
                <h3 className="text-lg font-semibold mb-2 text-blue-500">
                  Food Tours
                </h3>
                <p className="text-sm text-blue-500">20+</p>
              </div>
            </div>
            <div className="p-2">
              <div className="flex flex-col items-center justify-center bg-transparent text-white p-6 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl border-2 border-white hover:border-2 hover:border-blue-600">
                <div className="text-4xl mb-4">🌞</div>
                <h3 className="text-lg font-semibold mb-2 text-blue-500">
                  Summer Rest
                </h3>
                <p className="text-sm text-blue-500">15+</p>
              </div>
            </div>
            <div className="p-2">
              <div className="flex flex-col items-center justify-center bg-transparent text-white p-6 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl border-2 border-white hover:border-2 hover:border-blue-600">
                <div className="text-4xl mb-4">🏔️</div>
                <h3 className="text-lg font-semibold mb-2 text-blue-500">
                  Mountain Tours
                </h3>
                <p className="text-sm text-blue-500">8+</p>
              </div>
            </div>
            <div className="p-2">
              <div className="flex flex-col items-center justify-center bg-transparent text-white p-6 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl border-2 border-white hover:border-2 hover:border-blue-600">
                <div className="text-4xl mb-4">🏖️</div>
                <h3 className="text-lg font-semibold mb-2 text-blue-500">
                  Beach Rest
                </h3>
                <p className="text-sm text-blue-500">12+</p>
              </div>
            </div>
            <div className="p-2">
              <div className="flex flex-col items-center justify-center bg-transparent text-white p-6 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl border-2 border-white hover:border-2 hover:border-blue-600">
                <div className="text-4xl mb-4">🏕️</div>
                <h3 className="text-lg font-semibold mb-2 text-blue-500">
                  Camping
                </h3>
                <p className="text-sm text-blue-500">5+</p>
              </div>
            </div>
            <div className="p-2">
              <div className="flex flex-col items-center justify-center bg-transparent text-white p-6 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl border-2 border-white hover:border-2 hover:border-blue-600">
                <div className="text-4xl mb-4">🛶</div>
                <h3 className="text-lg font-semibold mb-2 text-blue-500">
                  Kayaking
                </h3>
                <p className="text-sm text-blue-500">7+</p>
              </div>
            </div>
            <div className="p-2">
              <div className="flex flex-col items-center justify-center bg-transparent text-white p-6 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl border-2 border-white hover:border-2 hover:border-blue-600">
                <div className="text-4xl mb-4">🎢</div>
                <h3 className="text-lg font-semibold mb-2 text-blue-500">
                  Theme Parks
                </h3>
                <p className="text-sm text-blue-500">9+</p>
              </div>
            </div>
            <div className="p-2">
              <div className="flex flex-col items-center justify-center bg-transparent text-white p-6 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl border-2 border-white hover:border-2 hover:border-blue-600">
                <div className="text-4xl mb-4">✈️</div>
                <h3 className="text-lg font-semibold mb-2 text-blue-500">
                  Air Tours
                </h3>
                <p className="text-sm text-blue-500">11+</p>
              </div>
            </div>
            <div className="p-2">
              <div className="flex flex-col items-center justify-center bg-transparent text-white p-6 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl border-2 border-white hover:border-2 hover:border-blue-600">
                <div className="text-4xl mb-4">🚴‍♂️</div>
                <h3 className="text-lg font-semibold mb-2 text-blue-500">
                  Biking
                </h3>
                <p className="text-sm text-blue-500">6+</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MiniSlider;
