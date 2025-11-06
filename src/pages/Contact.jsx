import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="container  py-4 pt-20 mx-auto">
      <h2 className="text-center  text-3xl font-bold">Contact Us</h2>
      <hr className="my-4 border-gray-300 w-[80%] mx-auto" />

      <div className="flex justify-center">
        <form className="w-full max-w-[250px] md:max-w-sm">
          <div className="my-3">
            <label htmlFor="Name" className="block font-medium mb-1 ">
              Full Name
            </label>
            <input
              type="text"
              id="Name"
              placeholder="Enter Your Name"
              className="w-full text-sm border border-gray-300 px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="my-3">
            <label htmlFor="Email" className="block font-medium mb-1">
              Email address
            </label>
            <input
              type="email"
              id="Email"
              placeholder="name@example.com"
              className="w-full text-sm border border-gray-300 px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="my-3">
            <label htmlFor="Email" className="block font-medium mb-1">
              Message
            </label>
            <textarea
              type="email"
              id="Email"
              placeholder="name@example.com"
              className="w-full text-sm border border-gray-300 px-3 pt-2  pb-16 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="text-center">
            <button
              className="px-6 py-2 bg-black text-white rounded cursor-not-allowed opacity-50"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
