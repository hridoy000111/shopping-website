
import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useLocation } from 'react-router-dom';

const Products = () => {
    const [products,setProducts]=useState([]);
    const [category,setCategory]=useState("All");
    const location=useLocation();
     const paddingClass = location.pathname === '/products' ? 'pt-24 mt-4' : 'pt-10 ';

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>setProducts(data))
        .catch(error=>console.error("Error fetching data:",error))
    },[])

      const filterredProducts= category==="All"? products:products.filter(product => {
        if(category==="men's clothing") return product.category==="men's clothing";
        if(category==="women's clothing") return product.category==="women's clothing";
        if(category==="jewelery") return product.category==="jewelery";
        if(category==="electronics") return product.category==="electronics";
        
      })

    return (
        <div className={paddingClass}>
            <h2 className="text-5xl  text-center text-gray-700 mb-4">
                  Latest Products
             </h2>

            

<div className="w-[80%] h-[1px] bg-gray-300 mx-auto mt-4 mb-16"></div>
 <div className=" flex gap-4 justify-center items-center mb-3">
                <button onClick={()=> setCategory("All")} className='border rounded p-2 text-center text-sm hover:bg-gray-800 hover:text-white'>All</button>
             <button  onClick={()=> setCategory("men's clothing")} className='border rounded p-2 text-center text-sm hover:bg-gray-800 hover:text-white'>Men's Clothing</button>
             <button  onClick={()=> setCategory("women's clothing")} className='border rounded p-2 text-center text-sm hover:bg-gray-800 hover:text-white'>Women's Clothing</button>
             <button  onClick={()=> setCategory("jewelery")} className='border rounded p-2 text-center text-sm hover:bg-gray-800 hover:text-white'>Jwellery</button>
             <button  onClick={()=> setCategory("electronics")} className='border rounded p-2 text-center text-sm hover:bg-gray-800 hover:text-white'> Electronics</button>
             </div>

            <div className="grid grid-cols-3 gap-6 p-6">
                
                {
                    filterredProducts.map(product => <Product key={product.id} product={product}></Product> )
                }
            </div>
            </div>
      
    );
};

export default Products;