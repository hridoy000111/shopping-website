import React from 'react';
import { Link } from 'react-router-dom';


import { IoIosSearch } from "react-icons/io";
import { CiUser ,CiLogin,CiShoppingCart} from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";

const Navbar = () => {
    return (
       
            <nav className=" flex justify-between items-center  shadow-md px-4 py-4 w-full h-[64px]">
               
                <h2 style={{ textShadow: '1px 1px 2px blue' }} className="text-red-600 font-bold text-4xl cursor-pointer hover:text-yellow-500 hover:scale-105"><span style={{ textShadow: '1px 1px 1px red' }} className='mr-2 text-blue-700 hover:text-green-400'>Shoping</span>website</h2>
                <div className=" flex gap-4 text-base font-josefin ">
                  <Link className='hover:text-red-500' to="/">Home</Link>
                  <Link className='hover:text-red-500' to="/about">About</Link>
                  <Link className='hover:text-red-500' to="/products">Products</Link>
                 
                  <Link className='hover:text-red-500' to="contact">Contact</Link>
                </div>
                <div className="flex gap-4  ">
                    <button className='flex items-center gap-2 border  border-black px-3 py-1 hover:bg-gray-700 rounded '> <CiLogin /><span>Login</span> </button>
                    <button className='flex items-center gap-2 border  border-black px-3 py-1 hover:bg-gray-700 rounded '> <CiUser /><span>Register</span> </button>
                    <button className='flex items-center gap-2 border  border-black px-3 py-1 hover:bg-gray-700 rounded '> <CiShoppingCart/><span>Cart</span> </button>
                 
                </div>
            </nav>
        
    );
};

export default Navbar;