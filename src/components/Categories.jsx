import React from 'react'
import { categories } from '../data/data'

const Categories = () => {
  return (
    <div className='max-w-[1500px] m-auto px-3 py-10'>
        <h1 className='text-black text-3xl'>More For You</h1>
        
        <div className='grid grid-cols-2 gap-5 py-6 md:grid-cols-4 '>

        {categories.map((item, index)=>(
            <div key={item.id} className='flex justify-center items-center p-3 rounded-xl bg-cyan-300/20 hover:bg-cyan-300/50'>
                <h2 className=' md:text-xl '>{item.name}</h2>
                <img src={item.image} alt={item.name} className='w-20 hover:scale-110'></img>
            </div>
        ))}

        </div>

    </div>
  )
}

export default Categories