import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';



const Header = () => {
    return (
        <div>
           <nav className='flex justify-between bg-slate-800 py-5 px-10 text-slate-50 h-16'>
               <div className="logo">
                   <Link to='/' className='font-bold uppercase'>Food Meal</Link>
               </div>
               <div className='flex'>
                   <CustomLink className='mr-3' to='/'>Home</CustomLink>
                   <CustomLink className='mr-3' to='/About'>About</CustomLink>
                   <CustomLink to='/contact'>Contact Us</CustomLink>
               </div>
            </nav> 
        </div>
    );
};

export default Header;