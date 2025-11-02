import React from 'react';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className='mt-16 pt-16'>
            <h2 className="font-semibold text-3xl text-center">About Us</h2>
            <hr className='w-[70%] h-[1px] bg-gray-300 mx-auto mt-4 mb-8'/>
            <div className="w-[70%] mx-auto text-center">
                <p className="text-gray-700 text-sm md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas provident ipsam, veritatis nostrum velit quos recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo earum unde eligendi autem praesentium, doloremque distinctio nesciunt porro tempore quis eaque labore voluptatibus ea necessitatibus exercitationem tempora molestias. Ad consequuntur veniam sequi ullam tempore vel tenetur soluta dolore sunt maxime aliquam corporis est, quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit delectus expedita a alias nam recusandae illo debitis repellat libero, quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam dignissimos blanditiis excepturi harum numquam vel nihil?
            </p>
            </div>

            <h2 className="font-semibold text-3xl text-center mt-8 mb-8">Our Products</h2>

            <div className="md:flex grid grid-cols-2  gap-6 w-[70%] mx-auto mb-12">

                <div className="border border-gray-400 rounded">
                    <img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" height={160} />
                    <div className=" py-4">
                        <h5 className="text-center font-bold text-gray-700 ">Men's Clothing</h5>
                    </div>
                </div>


                 <div className="border border-gray-400 rounded">
                    <img src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" height={160} />
                    <div className=" py-4">
                        <h5 className="text-center font-bold text-gray-700 ">Women's Clothing</h5>
                    </div>
                </div>


                 <div className="border border-gray-400 rounded">
                    <img src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" height={160} />
                    <div className=" py-4">
                        <h5 className="text-center font-bold text-gray-700 ">Jewelery</h5>
                    </div>
                </div>


                 <div className="border border-gray-400 rounded">
                    <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" height={160} />
                    <div className=" py-4">
                        <h5 className="text-center font-bold text-gray-700 ">Electronics</h5>
                    </div>
                </div>

               
            </div>

            <Footer></Footer>
        </div>
    );
};

export default About;