import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FoodDetails = () => {
    const {foodId} = useParams();
    const [food, setFood] = useState({});
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFood(data.meals[0]))
    }, [foodId])
    const {strMeal, strArea, strInstructions, strMealThumb} = food;
    return (
        <div className=''>
            <div className="container mt-32 mx-auto p-4 md:p-0 drop-shadow-xl ">
                <div className="shadow-lg flex flex-wrap w-full md:w-3/4 lg:w-4/5 mx-auto">
                    <div className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative food" style={{backgroundImage: `url(${strMealThumb})`, backgroundRepeat  : 'no-repeat', backgroundSize: 'cover',}}>
                        {/* <img src={food.strMealThumb} alt="" /> */}
                        <div className="absolute text-xl">
                            <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
                        </div>
                    </div>
                    <div className="bg-white w-full md:w-2/3">
                        <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
                            <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                                <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                                    <h3>{strMeal}</h3>
                                    <p className="mb-0 mt-3 text-grey-dark text-sm italic">{strArea}</p>
                                    <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                                </div>
                                <div className="w-full lg:w-3/5 lg:px-3">
                                    <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                                        {strInstructions?.slice(0,400)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;