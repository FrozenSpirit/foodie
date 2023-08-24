import React from 'react'

const Offers = () => {
  return (
    
    <div>
        <h1 className='text-xl md:text-2xl lg:text-3xl mx-4 text-bold lg:mx-5'>People's Favorite</h1>
        <div className='max-w-[1600px] mx-auto p-5 grid md:grid-cols-3 gap-5'>
                <div className='relative rounded-lg'>
                        <button className='z-10 absolute bottom-5 hover:scale-105 duration-300 right-3 p-1 md:p-3 rounded-full border-white bg-gradient-to-r text-white bg-black mx-2'>Order Now</button>

                    <img src='https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9tb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60' alt='*' className='object-cover max-h-[180px] md:max-h-[240px] w-full rounded-lg hover:scale-105 duration-300'></img>
                </div>
                <div className='relative rounded-lg'>
                        <button className='z-10 absolute bottom-5 hover:scale-105 duration-300 right-3 p-1 md:p-3 rounded-full border-white bg-gradient-to-r text-white bg-black mx-2'>Order Now</button>

                    <img src='https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZWQlMjByaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60' alt='*' className='object-cover max-h-[180px] md:max-h-[240px] w-full rounded-lg hover:scale-105 duration-300'></img>
                </div>
                <div className='relative rounded-lg'>
                        <button className='z-10 absolute bottom-5 hover:scale-105 duration-300 right-3 p-1 md:p-3 rounded-full border-white bg-gradient-to-r text-white bg-black mx-2'>Order Now</button>

                    <img src='https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9tb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60' alt='*' className='object-cover max-h-[180px] md:max-h-[240px] w-full rounded-lg hover:scale-105 duration-300'></img>
                </div>
            </div>

    </div>


    /* 
         <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>

      <div className='rounded-xl relative'>

      <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
        <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
        <p className='px-2'>Through 8/26</p>
        <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
      </div>
      <img
      className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
        alt='/'
      />
    </div>

    */

  )
}

export default Offers