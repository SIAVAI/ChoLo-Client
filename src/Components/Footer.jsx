import footer from "../assets/img/footer.jpg";

import { GiOfficeChair } from "react-icons/gi";
import { CiPhone } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <div className="text-white relative bottom-0 font-rancho">
      <footer
        className="footer p-10 bg-center bg-cover text-white relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${footer})`,
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <nav>
            <h6 className="footer-title mb-4 font-semibold text-lg">
              Quick Links
            </h6>
            <a className="link link-hover block mb-2">Home</a>
            <a className="link link-hover block mb-2">Add Tourists Spots</a>
            <a className="link link-hover block mb-2">All Tourists Spots</a>
            <a className="link link-hover block">Login</a>
            <a className="link link-hover block">Register</a>
          </nav>
          <nav>
            <h6 className="footer-title mb-4 font-semibold text-lg">
              Extra Links
            </h6>
            <a className="link link-hover block mb-2">User</a>
            <a className="link link-hover block mb-2">My List</a>
            <a className="link link-hover block mb-2">New Spots</a>
            <a className="link link-hover block">Privacy Policy</a>
          </nav>
          <nav>
            <h6 className="footer-title mb-4 font-semibold text-lg">
              Contact Information
            </h6>
            <a className="link link-hover  mb-2 flex justify-start items-center gap-2">
              <GiOfficeChair /> 123 Tourism Street, City, State, ZIP Code,
              Country.
            </a>
            <a className="link link-hover  mb-2 flex justify-start items-center gap-2">
              <CiPhone />
              +1 (800) 123-4567
            </a>
            <a className="link link-hover  mb-2 flex justify-start items-center gap-2">
              <CiHeadphones />
              +1 (800) 987-6543
            </a>
            <a className="link link-hover  flex justify-start items-center gap-2">
              <CiPhone /> +1 (800) 123-9111
            </a>
          </nav>
          <nav>
            <h6 className="footer-title mb-4 font-semibold text-lg">Emails</h6>
            <a className="link link-hover block mb-2"> info@yourwebsite.com</a>
            <a className="link link-hover block mb-2">
              support@yourwebsite.com
            </a>
            <a className="link link-hover block">media@yourwebsite.com</a>
          </nav>
          <nav>
            <h6 className="footer-title mb-4 font-semibold text-lg">
              Social Media
            </h6>
            <div className="flex justify-start items-center gap-4">
              <a className="link link-hover block mb-2 text-2xl">
                <CiFacebook />
              </a>
              <a className="link link-hover block mb-2 text-2xl">
                <FaInstagram />
              </a>
              <a className="link link-hover block text-xl">
                <BsTwitterX />
              </a>
            </div>
          </nav>
        </div>
        <aside className="text-2xl font-dance font-medium text-center">
          <Fade cascade>
            <p>Copyright © 2024 -</p>
            <p>All right reserved by</p>
            <p>Sajidur Rahman Siam</p>
          </Fade>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
