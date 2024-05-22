/* eslint-disable react/no-unescaped-entities */
import bg from "../../assets/img/voice.jpg";

import one from "../../assets/Travelers/1.jpg";
import two from "../../assets/Travelers/2.jpg";
import three from "../../assets/Travelers/3.jpg";
import four from "../../assets/Travelers/4.jpg";
import five from "../../assets/Travelers/5.jpg";
import six from "../../assets/Travelers/6.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const Voice = () => {
  AOS.init();
  return (
    <div className="p-6" style={{ backgroundImage: `url(${bg})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="flex flex-col justify-center items-center gap-6 font-roboto">
        <p className="text-xl font-medium">ADVENTURE'S VOICES</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium">
          Adventurer's Voices
        </h2>
        <p className="text-xl font-medium">
          Real Stories From Our Adventurous Community
        </p>
      </div>

      <div className="mt-6 mx-auto font-rancho">
        <div className="grid col-span-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="bg-[#161618] p-4 rounded-lg"
          >
            <div className="w-16 rounded-full flex justify-start items-center gap-4">
              <img src={one} alt="Tailwind-CSS-Avatar-component" />
              <h2>Liam Harper</h2>
            </div>
            <p className="mt-2">
              From the hidden temples of Angkor Wat to the bustling streets of
              Bangkok, my journey through Southeast Asia has been nothing short
              of extraordinary. Every corner holds a new adventure, a new story.
              Let your curiosity guide you and the world will unfold in ways you
              never imagined.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="bg-[#161618] p-4 rounded-lg"
          >
            <div className="w-16 rounded-full  flex justify-start items-center gap-4">
              <img src={two} alt="Tailwind-CSS-Avatar-component" />
              <h2>Ava Chen</h2>
            </div>
            <p className="mt-2">
              Traveling through Southeast Asia has been a transformative
              experience. The vibrant cultures, the warm smiles of the locals,
              and the breathtaking landscapes have filled my heart with joy and
              wonder. Every day is a new opportunity to learn and grow.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="bg-[#161618] p-4 rounded-lg"
          >
            <div className="w-16 rounded-full  flex justify-start items-center gap-4">
              <img src={three} alt="Tailwind-CSS-Avatar-component" />
              <h2>Noah Thompson</h2>
            </div>
            <p className="mt-2">
              Southeast Asia is a treasure trove of experiences waiting to be
              discovered. From trekking through lush jungles to diving in
              crystal-clear waters, the region offers a perfect blend of
              adventure and serenity. Embrace the unknown and embark on a
              journey that will change your life.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="bg-[#161618] p-4 rounded-lg"
          >
            <div className="w-16 rounded-full  flex justify-start items-center gap-4">
              <img src={four} alt="Tailwind-CSS-Avatar-component" />
              <h2>Sophia Nguyen</h2>
            </div>
            <p className="mt-2">
              The diversity of Southeast Asia is what makes it so captivating.
              Each country, each city, each village has its own unique charm and
              story. Whether it's savoring street food in Vietnam or exploring
              ancient ruins in Cambodia, every moment is a celebration of life
              and culture.
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="bg-[#161618] p-4 rounded-lg"
          >
            <div className="w-24 rounded-full flex justify-start items-center gap-4">
              <img src={five} />
              <h2>James Patel</h2>
            </div>
            <p className="mt-4">
              For those who seek thrill and excitement, Southeast Asia is the
              ultimate destination. Zip-lining through the forests of Laos,
              surfing in Bali, or hiking up volcanoes in Indonesia – the
              adventures are endless. Dive into the wild and let the adrenaline
              rush take over.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="bg-[#161618] p-4 rounded-lg"
          >
            <div className="w-24 rounded-full flex justify-start items-center gap-4">
              <img src={six} />
              <h2>Mia Ramirez</h2>
            </div>
            <p className="mt-4">
              Traveling through Southeast Asia has been a dream come true. The
              serene beaches, the mystical mountains, and the rich heritage of
              the region have left me in awe. Each experience, each encounter
              has added a new layer to my journey. This is where dreams meet
              reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voice;
