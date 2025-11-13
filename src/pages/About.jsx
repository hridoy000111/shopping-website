const About = () => {
  return (
    <div className="mt-16 pt-16">
      <h2 className="font-semibold text-3xl text-center">About Us</h2>
      <hr className="w-[70%] h-[1px] bg-gray-300 mx-auto mt-4 mb-8" />
      <div className="w-[70%] mx-auto text-center">
        <p className="text-gray-700 text-sm md:text-lg">
          At NovaShop, we bring the best of shopping right to your fingertips.
          Whether you’re looking for the latest trends in men’s and women’s
          fashion, dazzling jewellery, or cutting-edge electronics, we have
          everything to fulfill your desires — all in one place. Our mission at
          NovaShop is to provide a seamless and enjoyable shopping experience by
          offering a wide variety of quality products at competitive prices. We
          strive to be your trusted online destination for all your lifestyle
          needs.
        </p>
      </div>

      <h2 className="font-semibold text-3xl text-center mt-8 mb-8">
        Our Products
      </h2>

      <div className="md:flex grid grid-cols-2  gap-6 w-[70%] mx-auto mb-12">
        <div className="border border-gray-400 rounded">
          <img
            src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
            height={160}
          />
          <div className=" py-4">
            <h5 className="text-center font-bold text-gray-700 ">
              Men's Clothing
            </h5>
          </div>
        </div>

        <div className="border border-gray-400 rounded">
          <img
            src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
            height={160}
          />
          <div className=" py-4">
            <h5 className="text-center font-bold text-gray-700 ">
              Women's Clothing
            </h5>
          </div>
        </div>

        <div className="border border-gray-400 rounded">
          <img
            src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
            height={160}
          />
          <div className=" py-4">
            <h5 className="text-center font-bold text-gray-700 ">Jewelery</h5>
          </div>
        </div>

        <div className="border border-gray-400 rounded">
          <img
            src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
            height={160}
          />
          <div className=" py-4">
            <h5 className="text-center font-bold text-gray-700 ">
              Electronics
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
