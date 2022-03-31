import React from 'react';
import FoodImage from '../images/food.jpg'
import './About.css'

const About = () => {
    return (
        <div className=''>
            <div className='md:flex sm:pb-10 content-between mt-10 items-center'>
                <div className="text-section pl-10 w-1/2">
                    <h1 className='text-4xl'>About Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum placeat corrupti cum assumenda nam at, minus consequatur in laudantium, tempora temporibus quibusdam ipsum. Debitis veniam aut porro libero magni impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quisquam, fugit velit cum eaque sed tempore. Perferendis quo doloribus eos maxime illum ab at assumenda dolores sint, velit modi iste?</p>
                </div>
                <div className='w-1/2 pr-10 mx-auto'>
                    <img src={FoodImage} alt="" />
                </div>
            </div>


        </div>
    );
};

export default About;