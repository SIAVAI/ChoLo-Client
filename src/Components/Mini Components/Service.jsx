/* eslint-disable react/no-unescaped-entities */
import one from "../../assets/img/planning.png";
import two from "../../assets/img/map.png";
import three from "../../assets/img/trust.png";

import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  AOS.init();
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-4 p-6">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="flex flex-col justify-center items-center gap-4"
      >
        <img src={one} alt="" />
        <h2 className="text-2xl md:3xl lg:4xl font-bold font-rancho">
          Seamless Travel Planning
        </h2>
        <p className="text-center max-w-md font-rancho font-medium">
          Experience seamless travel planning like never before. Our intuitive
          platform simplifies every step, from booking flights and
          accommodations to crafting personalized itineraries. Enjoy a
          hassle-free journey with real-time updates, expert recommendations,
          and 24/7 support. Travel planning has never been this effortless.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="flex flex-col justify-center items-center gap-4"
      >
        <img src={two} alt="" />
        <h2 className="text-2xl md:3xl lg:4xl font-bold font-rancho">
          Tailored Experiences
        </h2>
        <p className="text-center max-w-md font-rancho font-medium">
          Discover the magic of Southeast Asia with personalized itineraries
          designed just for you. Whether you're seeking adventure, relaxation,
          or cultural immersion, our custom experiences ensure every moment is
          unforgettable. Let us craft your perfect journey, tailored to your
          unique interests and desires.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="flex flex-col justify-center items-center gap-4"
      >
        <img src={three} alt="" />
        <h2 className="text-2xl md:3xl lg:4xl font-bold font-rancho">
          Reliable and Trustworthy
        </h2>
        <p className="text-center max-w-md font-rancho font-medium">
          Count on us for dependable service and unwavering trust. Your
          satisfaction is our priority.
        </p>
      </div>
    </div>
  );
};

export default Service;
