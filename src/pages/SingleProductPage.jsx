import { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useCart } from "../components/Context/CartContext";
import { Link } from "react-router-dom";
import { ProductsContext } from "../components/Context/ProductsContext";

import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { products } = useContext(ProductsContext);
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [params.id]);

  if (!product) {
    return <div className="pt-16">Loading product...</div>;
  }
  const { title, image, category, rating, price, description } = product;
  console.log(product);
  const similarProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div className=" container  overflow-x-hidden mx-auto pt-24  ">
      <div className="grid md:grid-cols-2 gap-6  items-center">
        {/* Image */}
        <div className="flex justify-center ">
          <img
            className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-contain rounded-lg hover:scale-105 transition-transform duration-300"
            src={image}
            alt={title}
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6   ">
          <h4 className="uppercase text-xl text-gray-600 font-bold">
            {category}
          </h4>
          <h1 className="text-2xl text-gray-500">{title}</h1>
          <p className="text-lg text-gray-500 my-2 flex items-center gap-2">
            {rating.rate} <FaStar className="text-yellow-600" />
          </p>
          <p className="text-3xl text-gray-500">${price}</p>
          <p className="text-gray-500">{description}</p>

          <div className="flex flex-wrap  gap-4">
            <button
              onClick={() => addToCart(product)}
              className="px-4 py-2 border border-black text-black rounded-lg hover:bg-black hover:text-white transition-all duration-300"
            >
              Add to Cart
            </button>
            <Link
              to="/cart"
              className="px-4 py-2 text-center bg-gray-900 text-white rounded-lg hover:bg-gray-600 transition-all duration-300"
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
    </div>
  );
};

export default ProductPage;
