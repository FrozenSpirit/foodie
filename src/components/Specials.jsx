import React from 'react'
import { food_data } from '../data/data';
import { useState } from 'react';

const Specials = () => {
    const [foods, setFoods] = useState(food_data.slice(1, 9));

    const shotFirst = () => {
        setFoods(food_data.slice(1,9));
    }

    //   Filter Type burgers/pizza/etc
    const filterType = (category) => {
        setFoods(
                food_data.filter((item) => {
                return item.category === category;
                })
            );

    };
  return (
    <div className='max-w-[1600]  m-3'>
        <h1 className='text-xl mx-2 text-center py-5 lg:text-2xl'>Top Picks From Around The World</h1>

        <div className='w-[90%] h-[100px]  grid grid-cols-3 gap-3 m-3 lg:grid-cols-7 lg:h-[50px]'>

            <button onClick={shotFirst} className='text-sugar rounded-lg w-20 md:w-32 bg-[#FFD700] hover:scale-105 duration-300'>
                All
            </button>
            <button onClick={() => filterType('Indian')} className='text-sugar rounded-lg w-20 md:w-32 hover:scale-105 duration-300  bg-gradient-to-r from-orange-400 via-white to-green-600'>
                Indian
            </button>
            <button onClick={() => filterType('Polish')} className='border-2 rounded-lg w-20 md:w-32 p-1 hover:scale-105 duration-300 bg-gradient-to-r from-red-500 via-white to-white'>
                Polish
            </button>
            <button onClick={() => filterType('Mexican')} className='rounded-lg w-20 md:w-32 p-1 hover:scale-105 duration-300 bg-gradient-to-r from-lime-400 via-blue-300 to-purple-400'>
                Mexican
            </button>
            
            <button onClick={() => filterType('Italian')} className='rounded-lg w-20 md:w-32 p-1 hover:scale-105 duration-300 bg-gradient-to-r from-green-600 via-white to-red-500'>
                Italian
            </button>
            
            <button onClick={() => filterType('English')} className='border-2 rounded-lg w-20 md:w-32 p-1 hover:scale-105 duration-300 bg-gradient-to-r from-white via-white to-red-500'>
                English
            </button>
            <button onClick={() => filterType('Moroccan')} className='hidden md:block rounded-lg w-20 hover:scale-105 duration-300 md:w-32 p-1 bg-gradient-to-r from-red-500  to-green-300'>
                Moroccan
            </button>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10'>
            {foods.map((item, index) => (
            <div
                key={index}
                className='border shadow-xl rounded-xl hover:scale-105 duration-300 overflow-hidden'
            >
                <img
                src={item.source}
                alt={item.name}
                className='w-full h-[200px] object-cover rounded-xl hover:scale-105 duration-300'
                />
                <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{item.name}</p>
                
                </div>
            </div>
            ))}
        </div>

    </div>
  )
}

export default Specials