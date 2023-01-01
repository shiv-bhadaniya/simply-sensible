import React from 'react'
import cart from "../../assets/shopping-cart.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { authLogout, authUserSelector } from '../../slices/auth/auth';

const Navbar = () => {

    const dispatch = useDispatch();

    var { data, loading } = useSelector(authUserSelector);

    const handleLogout = () => {
        dispatch(authLogout());
    }
    
    var user =  JSON.parse(localStorage.getItem("profile"));

    return (
        <>

            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <Link to="/" class="flex items-center">
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Simply Sensible</span>
                    </Link>
                    <div class="flex items-center">
                        {(data?.length != 0) ? <>
                            <div class="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                                <Link to="/profile" > <span class="font-medium text-gray-600 dark:text-gray-300">  {data?.result?.name[0]} </span> </Link>
                            </div>
                            <div className='ml-[1rem] mr-0 mt-[18px] mb-[15px]' ><button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 " onClick={handleLogout} >Logout</button></div>
                        </> : <> <Link to="/auth" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</Link> </>}
                    </div>
                </div>
            </nav>
            <nav class="bg-gray-50 dark:bg-gray-700">
                <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                    <div class="flex items-center">
                        <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                            <li>
                                <div class="text-gray-900 dark:text-white hover:underline" aria-current="page"> <Link to="/">Home</Link> </div>
                            </li>
                            <li>
                                <div class="text-gray-900 dark:text-white hover:underline"> <Link to="/shop">Shop</Link> </div>
                            </li>
                            <li>
                                <div class="text-gray-900 dark:text-white hover:underline"><Link to="/shop/cart">My Cart <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6  inline">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg> </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;