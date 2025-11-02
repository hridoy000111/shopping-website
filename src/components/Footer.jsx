import React from "react";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center mt-4">
        <div className="flex items-center justify-center pb-5">
          <div className="md:w-1/2 flex flex-col justify-center items-center">
            <p className="mb-3 md:mb-0">Made with ❤️ by {" "}
              <a  href="#" className="underline text-gray-900 text-xl" target="_blank" rel="noreferrer">Redoy Hossen</a>
            </p>
            <a className="text-gray-900 text-lg" href="https://github.com/hridoy000111" target="_blank" rel="noreferrer">
             <FaGithub className="my-4" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;