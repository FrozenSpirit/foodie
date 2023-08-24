import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [bar, setBar] = useState(false)

    let handleClick = () =>{
        setClick(!click);
    }

    let handleBar=() =>{
        setBar(!bar);
    }

  return (
    <div className='max-w-[1600px] mx-auto flex items-center p-5 justify-between'>

        <div className='flex justify-center items-center'>
            <div onClick={handleBar} className='mr-2 hover:cursor-pointer '>
                <i className='text-xl md:text-2xl'><FontAwesomeIcon icon={faBars}/></i>
            </div>

            <div className='m-2'>
                <h1 className='text-2xl font-bold md:text-3xl'>Foodie.</h1>
            </div>

            <div onClick={handleClick}  className='hidden lg:flex border-1 justify-center items-center p-1 bg-gray-100 rounded-full text-sm'>
                <p className={click ? '  bg-gray-100 text-black rounded-full p-2' : ' transition-all duration-300  bg-black text-white rounded-full p-2'}>Delivery</p>
                <p className={!click ? 'transition-all duration-300 px-2 rounded-full text-black bg-gray-100 p-2' : 'duration-300 transition-all px-2 rounded-full bg-black text-white p-2'}>Pickup</p>
            </div>
        </div>

        <div className='flex items-center mx-1 w-[200px] bg-gray-300 md:w-[350px] md:mx-3 lg:w-[600px]   lg:mx-5 rounded-full'>
            <input 
            type='text'
            className=' p-2 bg-transparent w-full focus:outline-none'
            placeholder='Search'
            >
            </input>

            <i className='px-2 mx-2'><FontAwesomeIcon icon={faSearch}/></i>
        </div>

        <div className='flex justify-center items-center lg:mr-3'>
            <div className='flex flex-col mx-2 hover:scale-110'>
            <button className='text-xl  md:text-2xl'><FontAwesomeIcon icon={faCartShopping}/></button>
            <p className='text-[12px]'>Cart</p>
            </div>
            
            <div className='hidden lg:flex flex-col justify-center items-center mx-2 hover:scale-110'>
            <button className='hidden md:block text-2xl '> <FontAwesomeIcon icon={faBook}/></button>
            <p className='text-[12px]'>Login</p>
            </div>
        </div>


        <div className={bar? 'w-[300px] fixed top-0 left-0 bg-white h-screen z-10' : 'w-[300px] fixed top-[-100%] left-0 bg-white h-screen z-10'}>

            <div onClick={handleBar} className='absolute top-5 right-5 hover:cursor-pointer p-[10px]'>
                <i  className='text-2xl md:text-3xl '><FontAwesomeIcon icon={faXmark}/></i>
            </div>

            <div className='absolute top-16 w-full'>
                <div  className='mx-3 w-full'>
                    <h2 className=' text-2xl font-bold px-3 md:text-3xl'>Foodie.</h2>
                </div>
                <div className=' border-b mx-2 p-2 my-5 flex items-center justify-center w-[90%] duration-300 hover:scale-110'>
                    <i className='pr-3'> <FontAwesomeIcon icon={faBook}/></i>
                    <h3 className='text-xl md:text-2xl'>Orders</h3>
                </div>
               
                <div className=' border-b mx-2 p-2 my-5 flex items-center justify-center w-[90%] duration-300 hover:scale-110'>
                    <i className='pr-3'> <FontAwesomeIcon icon={faBook}/></i>
                    <h3 className='text-xl md:text-2xl'>Top Rated</h3>
                </div>
                <div className=' border-b mx-2 p-2 my-5 flex items-center justify-center w-[90%] duration-300 hover:scale-110'>
                    <i className='pr-3'> <FontAwesomeIcon icon={faBook}/></i>
                    <h3 className='text-xl md:text-2xl'>Trending</h3>
                </div>
                <div className=' border-b mx-2 p-2 my-5 flex items-center justify-center w-[90%] duration-300 hover:scale-110'>
                    <i className='pr-3'> <FontAwesomeIcon icon={faBook}/></i>
                    <h3 className='text-xl md:text-2xl'>Your Favorites</h3>
                </div>
                <div className=' border-b mx-2 p-2 my-5 flex items-center justify-center w-[90%] duration-300 hover:scale-110'>
                    <i className='pr-3'> <FontAwesomeIcon icon={faBook}/></i>
                    <h3 className='text-xl md:text-2xl'>Settings</h3>
                </div>
                <div className=' mx-2 p-2 my-5 flex items-center justify-center w-[90%] duration-300 hover:scale-110'>
                    <i className='pr-3'> <FontAwesomeIcon icon={faBook}/></i>
                    <h3 className='text-xl md:text-2xl'>Help?</h3>
                </div>       
            </div>

        </div>



    </div>
  )
}

export default Navbar