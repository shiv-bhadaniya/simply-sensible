import React from 'react'
import H3 from "../../assets/hero-3.jpg";

const Hero4 = () => {
    return (
        <div className='bg-[#CE9461]'>
            <div class=" mt-6 mb-6 grid grid-rows-3 grid-flow-col gap-4">
                <div class="row-span-3 ml-[5rem] pt-[5rem] pb-6  ">
                    <img className='h-[40rem] rounded-lg' src={H3} alt="h3-img" />
                </div>
                <div class="col-span-2 pt-44">
                    <h1 class=" ml-48 font-mono mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl "><span class="underline underline-offset-3 decoration-8 decoration-[#FFEDED]">ABOUT US</span></h1>
                </div>
                <div class="row-span-2 col-span-2  h-[14rem] w-[40rem]">
                    <p class='text-center' > As a mother i realized the need of healthy snacking when i saw my little one  imitating all my habits including food habits too. So I decided to add more healthy and yummy options for all our little hungers which gives happiness ans satisfaction if imitated.
That is the story behind  "Simply Sensible" as the name suggest its its more about eating sensible food and YES we are trying  to develop something which is healthy, refreshing and delicious conferring the heavenly delights to tantalizing taste buds and  energetic, wholesome and fulfilling for hungry tummies. </p>
                </div>
            </div>
        </div>
    )
}

export default Hero4