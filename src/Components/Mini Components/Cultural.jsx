import one from "../../assets/culture/1.jpg";
import two from "../../assets/culture/2.jpg";
import three from "../../assets/culture/3.jpg";
import four from "../../assets/culture/4.jpg";
import five from "../../assets/culture/5.jpg";
import six from "../../assets/culture/6.jpg";
import "animate.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Cultural = () => {
  AOS.init();
  return (
    <div className="">
      <div className="min-h-screen py-16">
        <h2 className="text-center text-4xl font-bold mb-12 font-rancho">
          Discover Southeast Asian Culture
        </h2>
        <div className="mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative">
            <img
              src={one}
              alt="Cultural Image 1"
              data-aos="fade-up"
              data-aos-duration="1500"
              className=""
            />
          </div>
          <div className="relative">
            <img
              src={two}
              alt="Cultural Image 2"
              data-aos="fade-up"
              data-aos-duration="1500"
              className=""
            />
          </div>
          <div className="relative">
            <img
              src={three}
              alt="Cultural Image 3"
              data-aos-duration="1500"
              data-aos="fade-up"
              className=""
            />
          </div>
          <div className="relative">
            <img
              src={four}
              alt="Cultural Image 4"
              data-aos-duration="1500"
              data-aos="fade-up"
              className=""
            />
          </div>
          <div className="relative">
            <img
              src={five}
              alt="Cultural Image 5"
              data-aos-duration="1500"
              data-aos="fade-up"
              className=""
            />
          </div>
          <div className="relative">
            <img
              src={six}
              alt="Cultural Image 6"
              data-aos-duration="1500"
              data-aos="fade-up"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cultural;
