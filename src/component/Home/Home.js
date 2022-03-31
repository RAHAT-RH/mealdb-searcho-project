import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';

const Home = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[searchText]);
    // OnChange Handler
    const searchFood = (e) =>{
        setSearchText(e.target.value);
    }
    return (
        <div>
            <label class="relative block mt-10 w-1/3 mx-auto">
                <span class="sr-only">Search</span>
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                </span>
                <input onChange={searchFood}  class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for your favourite food..." type="text" name="search" />
            </label>
            <div>
                <h2 className='text-base text-center mt-2'> Total Food Found: {meals.length} of <span className='font-semibold'>"{searchText}"</span></h2>
            </div>
            <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-3  lg:grid-cols-4 my-10'>
                {
                    meals.map(meal => <Meals key={meal.idMeal} meal={meal}></Meals>)
                }
            </div>
        </div>
        
    );
};

export default Home;