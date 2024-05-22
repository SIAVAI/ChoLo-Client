import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash, FaGoogle, FaGithub } from "react-icons/fa";
import bg from "../../assets/img/login.jpg"; // Assume you have a background image here
import { AuthContext } from "./FirebaseProvider";

const Login = () => {
  const { loginUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await loginUser(email, password);
      toast.success("Login Successful!");
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Email or Password is incorrect.",
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      toast.success("Google Login Successful!");
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Google Login Failed",
        text: "Something went wrong. Please try again.",
      });
    }
  };

  const handleGithubLogin = async () => {
    try {
      await githubSignIn();
      toast.success("GitHub Login Successful!");
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "GitHub Login Failed",
        text: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-center pb-10 pt-20 font-bold font-rancho">
        Login
      </h2>
      <div
        className="hero min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="bg-transparent  font-rancho p-8 rounded max-w-md w-full">
          <form onSubmit={handleLogin} className="text-black text-2xl">
            <div className="mb-4">
              <label className="block text-white">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                name="email"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <div className="w-full relative">
                <label className="block text-white">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  name="password"
                  required
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 mt-8 flex items-center text-gray-700 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn w-full bg-transparent border-2 border-white text-white p-2 rounded mt-4 hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <div className="mt-4 flex justify-around">
            <button
              onClick={handleGoogleLogin}
              className="btn bg-red-500 hover:bg-red-600 text-white p-2 rounded"
            >
              <FaGoogle className="inline-block mr-2" />
              Google
            </button>
            <button
              onClick={handleGithubLogin}
              className="btn bg-gray-800 hover:bg-gray-900 text-white p-2 rounded"
            >
              <FaGithub className="inline-block mr-2" />
              GitHub
            </button>
          </div>
          <div className="mt-4 text-xl">
            <p className="text-white">
              Don't have an account?{" "}
              <Link to="/register" className="text-white hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
