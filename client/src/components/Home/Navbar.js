import React from 'react'
import cart from "../../assets/shopping-cart.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>

            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <a href="/" class="flex items-center">
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Simply Sensible</span>
                    </a>
                    <div class="flex items-center">
                        <a href="mailto:shivbhadaniya56@gmail.com" class="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">shivbhadaniya56@gmail.com</a>
                        <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</a>
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
                                <div class="text-gray-900 dark:text-white hover:underline"><Link to="/">My Cart</Link> <img src= {cart} className=" inline-block h-[22px] pl-[5px]" /> </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;