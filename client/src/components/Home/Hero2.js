import React from 'react'
import P1 from "../../assets/P1.JPG"
import P2 from "../../assets/P2.JPG"
import shop from "../../assets/shopping-cart.png";
import 'animate.css';


const Hero2 = () => {
    return (
        // <div className='bg-[#FCFFE7]'>
        //     <div className='flex justify-center pt-14' >
        //         <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Celebrate a <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Healthy life.</span></h1>
        //     </div>

        //     <div class="md:columns-2 sm:columns-1 lg:columns-3">

        //         <div className=' pl-20 pr-1 pt-12 pb-6 animate__animated animate__backInLeft'>
        //             <figure class=" pt-16 relative max-w-sm transition-all duration-300 cursor-pointer">
        //                 <a href="/shop">             
        //                     <img  class="rounded-lg" src={P1} alt="product-image" loading="lazy"/>
        //                 </a>
        //             </figure>
        //         </div>

        //         <div className='pl-14 pr-1 pt-12 pb-6'>
        //             <figure class=" relative max-w-sm transition-all duration-300 cursor-pointer">
        //                 <a href="/shop">
        //                     <img class="rounded-lg" src={P2} alt="product-image" loading="lazy"/>
        //                 </a>
        //             </figure>
        //         </div>

        //         <div className='pl-10 pr-1 pt-12 pb-6 animate__animated animate__backInRight'>
        //             <figure class="pt-16 relative max-w-sm transition-all duration-300 cursor-pointer">
        //                 <a href="/shop">
        //                     <img class="rounded-lg" src={P1} alt="product-image" loading="lazy"/>
        //                 </a>
        //             </figure>
        //         </div>

        //     </div>
        // </div>


        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">

                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div class="rounded-lg h-[full] overflow-hidden animate__animated animate__backInLeft">
                                <img alt="content" class="object-cover object-center h-full w-full" src={P1} loading="lazy"/>
                            </div>
                           
                        </div>
                        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div class="rounded-lg h-[full] overflow-hidden">
                                <img alt="content" class="object-cover object-center h-full w-full" src={P2} loading="lazy"/>
                            </div>
                          
                        </div>
                        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div class="rounded-lg h-[full] animate__animated animate__backInRight overflow-hidden">
                                <img alt="content" class="object-cover object-center h-full w-full" src={P1} loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero2