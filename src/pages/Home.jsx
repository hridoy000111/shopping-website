


import Products from './Products';
import Hero from "../components/Hero";
import { useContext } from 'react';
import { menuContext } from '../components/menuContext';



const Home = () => {
    const {menuOpen}=useContext(menuContext)
    return (
         <div className={` transition-all duration-500 ease-in-out ${ menuOpen ? "translate-y-40" : "translate-y-0" }`}>

                <Hero></Hero>
                <Products></Products>
                
    </div>   
   );
};

export default Home;