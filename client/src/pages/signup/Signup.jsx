import React, { useState } from 'react';
import instance from '../../utils/axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuthContext } from '../../contexts/AuthContext';

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(false);
      const { data } = await instance.post('signup', { ...signUpData });
      // const { data } = await axios({
      //   url: import.meta.env.VITE_URL_SERVER + "signup",
      //   methode: "POST",
      //   data: signUpData,
      // });
      // console.log("🚀 ~ handleSubmit ~ data:", data);
      localStorage.setItem('chat-user', JSON.stringify(data));
      setAuthUser(data);
      navigate('/');
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center font-[sans-serif] bg-gradient-to-r from-blue-800 to-blue-500 text-[#333] lg:h-screen p-6">
        <div className="grid md:grid-cols-2 items-center gap-y-8 bg-white max-w-7xl w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          <div className="max-md:order-1 flex flex-col justify-center sm:p-6 p-4 bg-gradient-to-r from-blue-600 to-blue-700 w-full h-full space-y-16">
            <div className="max-w-md space-y-12 mx-auto">
              <div>
                <h4 className="text-white text-lg font-semibold">
                  Create Your Account
                </h4>
                <p className="text-[13px] text-white mt-2">
                  Welcome to our registration page! Get started by creating your
                  account.
                </p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="sm:p-6 p-4 w-full">
            <div className="mb-6">
              <h3 className="text-blue-500 text-3xl font-extrabold max-md:text-center">
                Sign Up
              </h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-y-7 gap-x-7">
              <div className="col-span-2">
                <label className="text-sm mb-2 block">Fullname</label>
                <input
                  name="fullname"
                  type="text"
                  value={signUpData.fullName}
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, fullName: e.target.value })
                  }
                  className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter full name"
                />
              </div>
              <div>
                <label className="text-sm mb-2 block">Username</label>
                <input
                  name="username"
                  type="text"
                  value={signUpData.username}
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, username: e.target.value })
                  }
                  className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter username"
                />
              </div>
              <div>
                <label className="text-sm mb-2 block">Password</label>
                <input
                  name="password"
                  type="password"
                  value={signUpData.password}
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, password: e.target.value })
                  }
                  className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter password"
                />
              </div>
              <div>
                <label className="text-sm mb-2 block">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  value={signUpData.confirmPassword}
                  onChange={(e) =>
                    setSignUpData({
                      ...signUpData,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter confirm password"
                />
              </div>
              <div>
                <label className="text-sm mb-2 block">Gender</label>
                <select
                  name="gender"
                  value={signUpData.gender}
                  onChange={(e) =>
                    setSignUpData({ ...signUpData, gender: e.target.value })
                  }
                  className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                >
                  <option value={undefined}>--please select gender--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="min-w-[150px] py-3 px-4 text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner "></span>
                ) : (
                  'Sign up'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
