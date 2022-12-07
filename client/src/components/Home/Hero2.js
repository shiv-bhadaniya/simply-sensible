import React from 'react'
import P1 from "../../assets/P1.JPG"
import P2 from "../../assets/P2.JPG"
import shop from "../../assets/shopping-cart.png";
import 'animate.css';


const Hero2 = () => {
    return (
        <div className='bg-[#FCFFE7]'>
            <div className='flex justify-center pt-14' >
                <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Celebrate a <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Healthy life.</span></h1>
            </div>

            <div class="md:columns-2 sm:columns-1 lg:columns-3">

                <div className=' pl-20 pr-1 pt-12 pb-6 animate__animated animate__backInLeft'>
                    <figure class=" pt-16 relative max-w-sm transition-all duration-300 cursor-pointer">
                        <a href="/shop">             
                            <img  class="rounded-lg" src={P1} alt="product-image" loading="lazy"/>
                        </a>
                    </figure>
                </div>

                <div className='pl-14 pr-1 pt-12 pb-6'>
                    <figure class=" relative max-w-sm transition-all duration-300 cursor-pointer">
                        <a href="/shop">
                            <img class="rounded-lg" src={P2} alt="product-image" loading="lazy"/>
                        </a>
                    </figure>
                </div>

                <div className='pl-10 pr-1 pt-12 pb-6 animate__animated animate__backInRight'>
                    <figure class="pt-16 relative max-w-sm transition-all duration-300 cursor-pointer">
                        <a href="/shop">
                            <img class="rounded-lg" src={P1} alt="product-image" loading="lazy"/>
                        </a>
                    </figure>
                </div>

            </div>
        </div>
    )
}

export default Hero2