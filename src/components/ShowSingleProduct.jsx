import React, { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useCart } from "../components/CartContext";
import { Link } from "react-router-dom";
import { ProductsContext } from "../components/ProductsContext";
import Footer from "../components/Footer";

const ShowSingleProduct = ({ productId }) => {
  const { products } = useContext(ProductsContext);
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return <div className="pt-16">Loading product...</div>;
  }
  const { title, image, category, rating, price, description } = product;
  console.log(product);
  const similarProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div className=" container mx-auto pt-20 px-24 text-enter">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex justify-start items-center my-2 py-3 ">
          <img
            className="w-full h-auto max-w-xs object-contain hover:scale-105 transition-transform duration-300"
            src={image}
            alt={title}
          />
        </div>
        <div className="py-16 space-y-4 ">
          <h4 className="uppercase text-xl text-gray-600 font-bold">
            {category}
          </h4>
          <h1 className="text-3xl text-gray-500">{title}</h1>
          <p className=" text-lg text-gray-500 my-2 flex items-center gap-2">
            {rating.rate} <FaStar className="text-yellow-600"></FaStar>
          </p>
          <p className="text-3xl text-gray-500">${price}</p>
          <p className="text-gray-500">{description}</p>
          <div className=" flex gap-4">
            <button
              onClick={() => addToCart(product)}
              className="px-4 py-2 border border-black text-black rounded-lg hover:bg-black hover:text-white transition-all duration-300"
            >
              Add to Cart
            </button>
            <Link
              className="px-4 py-2  bg-gray-900 text-white rounded-lg  hover:bg-gray-600 transition-all duration-300"
              to="/cart"
            >
              Go To Cart
            </Link>
          </div>
        </div>
      </div>
      <div className=" hidden md:block  container mx-auto mt-12 ">
        <h2 className="text-2xl font-bold text-gray-700 mb-8">
          You may also like
        </h2>

        <div className="overflow-hidden ">
          <div
            className="flex gap-4 animate-scroll hover:[animation-play-state:paused]"
            style={{ width: "max-content" }}
          >
            {[...similarProducts, ...similarProducts].map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-400 rounded p-4 mb-8"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain w-60 h-60"
                />
                <h2 className="text-center my-8 font-bold text-xl text-gray-700">
                  {item.title.length > 12
                    ? item.title.substring(0, 12) + "..."
                    : item.title}
                </h2>
                <div className="border-t border-gray-300 text-center pt-3 pb-4  flex flex-col md:flex-row items-center md:justify-center gap-4 ">
                  <Link
                    to={"/product/" + item.id}
                    className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition-all duration-300"
                  >
                    Buy Now
                  </Link>

                  <button
                    onClick={() => addToCart(item)}
                    className="px-4 py-2 border border-black text-black rounded-lg hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ShowSingleProduct;
