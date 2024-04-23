import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <div className="font-sans text-#333">
          <div className="grid lg:grid-cols-2 gap-4 bg-gradient-to-r from-blue-500 to-blue-700 sm:p-8 p-4 h-[320px]">
            <div>
              <a href="javascript:void(0)">
                <img src="" alt="logo" className="w-40" />
              </a>
              <div className="max-w-lg mt-16 px-6 max-lg:hidden">
                <h3 className="text-3xl font-bold text-white">Sign in</h3>
                <p className="text-sm mt-4 text-white">
                  Embark on a seamless journey as you sign in to your account.
                  Unlock a realm of opportunities and possibilities that await
                  you.
                </p>
              </div>
            </div>
            <div className="bg-white my-4 rounded-xl sm:px-6 px-4 py-8 max-w-md w-full h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
              <form>
                <div className="mb-10">
                  <h3 className="text-3xl font-extrabold">Sign in</h3>
                </div>
                <div>
                  <label className="text-sm mb-2 block">User name</label>
                  <div className="relative flex items-center">
                    <input
                      name="username"
                      type="text"
                      required=""
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
                      required=""
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
                    type="button"
                    className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                    Log in
                  </button>
                </div>
                <p className="text-sm mt-6 text-center">
                  Don't have an account
                  <a
                    href=""
                    className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">
                    Register here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
