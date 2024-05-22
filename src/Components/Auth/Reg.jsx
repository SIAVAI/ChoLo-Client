import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import bg from "../../assets/img/add.jpg";
import { AuthContext } from "./FirebaseProvider";

const Reg = () => {
  const { regUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;
    return hasUpperCase && hasLowerCase && hasMinLength;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (!validatePassword(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long.",
      });
      return;
    }

    const user = { name, email, photo, password };
    console.log(user);
    regUser(email, password).then((result) => {
      console.log(result);
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "You have registered successfully!",
      }).then(() => {
        toast.success("Welcome! You have registered successfully.");
        navigate("/login");
      });
    });
  };
  return (
    <div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-center pb-10 pt-20 font-bold font-rancho">
        Register
      </h2>
      <div
        className="hero min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="bg-gray-700 font-rancho p-8 rounded shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <form onSubmit={handleRegister} className="text-black">
            <div className="mb-4">
              <label className="block text-white">Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white">Photo URL</label>
              <input
                type="url"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="photo"
              />
            </div>
            <div className="mb-4 flex justify-center items-center">
              <div className="w-[90%]">
                <label className="block text-white">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  name="password"
                  required
                />
              </div>
              <div
                className="flex items-center text-white cursor-pointer  w-[10%] rounded mt-5 ml-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <button
              type="submit"
              className="btn w-full bg-transparent border-2 border-white text-white p-2 rounded mt-4 hover:bg-blue-600"
            >
              Register
            </button>
          </form>
          <div className="mt-4">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reg;
