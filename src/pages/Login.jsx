import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container mx-auto my-8 py-6 mt-16 pt-16">
        <h1 className="text-center text-3xl font-bold">Login</h1>
        <hr className="my-4 border-gray-300" />

        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <form className="bg-white p-6 rounded-lg shadow-md">
              <div className="my-3">
                <label htmlFor="Email" className="block font-medium mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  id="Email"
                  placeholder="name@example.com"
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="my-3">
                <label htmlFor="Password" className="block font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  placeholder="Password"
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="my-3">
                <p className="text-sm">
                  Already has an account?{" "}
                  <Link to="/register" className="underline text-blue-600">
                    Register
                  </Link>
                </p>
              </div>

              <div className="text-center">
                <button
                  className="px-6 py-2 bg-black text-white rounded cursor-not-allowed opacity-50"
                  type="submit"
                  disabled
                >
                  LogIn
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
