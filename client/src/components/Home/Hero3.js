import React from 'react'
import H3 from "../../assets/hero-3.jpg";

const Hero3 = () => {
    return (
        <div className='bg-[#DEA057]'>
            <div class=" mt-6 mb-1 grid grid-rows-3 grid-flow-col gap-4">
                <div class="row-span-3 ml-[5rem] pt-[9rem] pb-0 ">
                    <img className='h-[40rem] rounded-lg' src={H3} alt="h3-img" />
                </div>
                <div class="col-span-2 pt-44">
                    <h1 class=" ml-16 font-mono mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl "><span class="underline underline-offset-3 decoration-8 decoration-[#FFEDED]">OUR INGREDIENTS</span></h1>
                    <h3 class="text-3xl font-bold dark:text-white font-mono">QUALITY RAW MATERIALS FROM BEST STATES​</h3>
                </div>
                <div class="row-span-2 col-span-2  h-[14rem] w-[40rem]">
                    <p class='text-center' > We use premium quality ingredients from the best farms. Our flavors are crafted with ultimate perfection  resulting into something which is healthy, refreshing and delicious.  It confers heavenly delights to tantalizing taste buds and is  energetic, wholesome and fulfilling for hungry tummies. </p>
                </div>
            </div>
        </div>
    )
}

export default Hero3