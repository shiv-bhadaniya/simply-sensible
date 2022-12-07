import React from 'react'
import img from "../../assets/hero-1.5.jpg";
import 'animate.css';

const Hero1 = () => {
    return (

        <div className='bg-[#E0D8B0]'>
            <div class="flex justify-center ">
                <h1 class=" pt-6 hover:font-extrabold cursor-grabbing mb-4 text-4xl  tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">- SNACK BOUTIQUE -</h1>
            </div>

            <div class="flex justify-center animate__animated animate__zoomIn">
                <p class="mb-1 text-2xl tracking-tight leading-none text-gray-900 md:text-1xl lg:text-4xl dark:text-white pb-4 pt-4">We are <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Simply Sensible</mark> we make sense on your snacks</p>
            </div>

            <div>
                <img class="rounded-lg w-full px-28 sm:h-[10rem] md:h-[20rem] lg:h-[30rem] pb-3" src={img} alt="image description" />
            </div>
        </div>

    )
}

export default Hero1;