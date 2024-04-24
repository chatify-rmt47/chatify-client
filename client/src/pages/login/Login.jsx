import React, { useState } from "react";
import instance from "../../utils/axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuthContext } from "../../contexts/AuthContext";
import image from "../../assets/logo_chat-removebg-preview.png";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const { data } = await instance.post("login", { ...loginData });
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      navigate("/");
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="font-sans text-#333">
        <div className="grid lg:grid-cols-2 gap-4 bg-gradient-to-r from-blue-500 to-blue-700 sm:p-8 p-4 h-[320px]">
          <div>
            <img src={image} alt="logo" className="w-40" />

            <div className="max-w-lg mt-16 px-6 max-lg:hidden">
              <h3 className="text-3xl font-bold text-white">Login</h3>
              <p className="text-sm mt-4 text-white">
                Embark on a seamless journey as you join our vibrant chat
                community. Unlock a world of endless conversations and
                connections that await you.
              </p>
            </div>
          </div>
          <div className="bg-white my-4 rounded-xl sm:px-6 px-4 py-8 max-w-md w-full h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-10">
                <h3 className="text-3xl font-extrabold">Login</h3>
              </div>
              <div>
                <label className="text-sm mb-2 block">User name</label>
                <div className="relative flex items-center">
                  <input
                    name="username"
                    type="text"
                    value={loginData.username}
                    onChange={(e) =>
                      setLoginData({ ...loginData, username: e.target.value })
                    }
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter user name"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 24 24">
                    {/* Circle SVG Path */}
                    {/* Path SVG Path */}
                  </svg>
                </div>
              </div>
              <div className="mt-6">
                <label className="text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                    viewBox="0 0 128 128">
                    {/* Path SVG Path */}
                  </svg>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  disabled={loading}>
                  {loading ? (
                    <span className="loading loading-spinner "></span>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
              <p className="text-sm mt-6 text-center">
                Don't have an account
                <Link
                  to="/signup"
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
