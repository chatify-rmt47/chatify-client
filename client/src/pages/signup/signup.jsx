import React, { Component } from "react";

export default class Signup extends Component {
  render() {
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
                    Welcome to our registration page! Get started by creating
                    your account.
                  </p>
                </div>
                <div>
                  <h4 className="text-white text-lg font-semibold">
                    Simple &amp; Secure Registration
                  </h4>
                  <p className="text-[13px] text-white mt-2">
                    Our registration process is designed to be straightforward
                    and secure. We prioritize your privacy and data security.
                  </p>
                </div>
                <div>
                  <h4 className="text-white text-lg font-semibold">
                    Terms and Conditions Agreement
                  </h4>
                  <p className="text-[13px] text-white mt-2">
                    Require users to accept the terms and conditions of your
                    service during registration.
                  </p>
                </div>
              </div>
            </div>
            <form className="sm:p-6 p-4 w-full">
              <div className="mb-6">
                <h3 className="text-blue-500 text-3xl font-extrabold max-md:text-center">
                  Register
                </h3>
              </div>
              <div className="grid lg:grid-cols-2 gap-y-7 gap-x-7">
                <div className="col-span-2">
                  <label className="text-sm mb-2 block">Fullname</label>
                  <input
                    name="fullname"
                    type="text"
                    className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label className="text-sm mb-2 block">Username</label>
                  <input
                    name="username"
                    type="text"
                    className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                    placeholder="Enter username"
                  />
                </div>
                <div>
                  <label className="text-sm mb-2 block">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                    placeholder="Enter password"
                  />
                </div>
                <div>
                  <label className="text-sm mb-2 block">Confirm Password</label>
                  <input
                    name="cpassword"
                    type="password"
                    className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                    placeholder="Enter confirm password"
                  />
                </div>
                <div>
                  <label className="text-sm mb-2 block">Gender</label>
                  <select
                    name="gender"
                    className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-blue-500">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="button"
                  className="min-w-[150px] py-3 px-4 text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
