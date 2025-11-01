import { useCart } from "../components/CartContext";



const Product = ({product}) => {
 
    const {image,title,price,description}=product;
    const {addToCart}=useCart();

    return (
        
        <div className='border  border-gray-300 rounded-2xl shadow-md  bg-white hover:shadow-lg transition-all duration-300 '>
             {/* Product Image */}
      <div className="w-full h-64 flex justify-center items-center  overflow-hidden mb-3 p-4">
        <img
          src={image}
          alt={title}
          className="h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
     <div className="px-4 py-4 text-center">
       <h2 className="text-lg font-semibold text-gray-600 mb-1 ">
         { title.length > 10 
    ? title.slice(0,10) + "..." 
    : title }
       </h2>
        <p className="text-gray-500 text-sm line-clamp-3 md:line-clamp-2 mb-2">{description}</p>
     </div>
         
         
          <div className="border-t px-4 py-3  flex justify-center items-center mt-3">
        <span className="text-xl font-bold text-green-600 ">${price}</span>
         </div>

         <div className="border-t border-gray-300 text-center pt-3 pb-4  flex flex-col md:flex-row items-center md:justify-center gap-4 ">
          
        <button   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
         Buy Now
        </button>

        < button  onClick={() => addToCart(product)} className="px-4 py-2  bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
          Add to Cart
        </button>

        </div>
        
        
        </div>
    );
};

export default Product;