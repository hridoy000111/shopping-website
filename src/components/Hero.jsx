import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative w-full h-[40vh] md:h-[80vh]    ">
      <img
        className="w-full rounded h-[40vh] md:h-[80vh] object-cover "
        src="/main.png"
        alt="hero"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white mt-12 lg:mt-3">
        <h2 className="text-lg md:text-4xl font-bold    ">
          <Typewriter
            words={["Welcome To Shopping Website"]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={50}
            delaySpeed={2000}
            deleteSpeed={70}
          />
        </h2>
        <p className="mt-3 text-lg lg:text-2xl drop-shadow-md">
          Find your favorite products easily!
        </p>
        <Link
          to="/products"
          className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
