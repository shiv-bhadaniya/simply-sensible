import React from 'react'
import H3 from "../../assets/hero-3.jpg";

const Hero3 = () => {
    return (
        <>
            <section class="text-gray-600 body-font bg-gray-100">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className='object-cover object-center rounded' src={H3} alt="h3-img" />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-4lg mb-4 font-medium text-gray-900">QUALITY RAW MATERIALS FROM BEST STATES
                            
                        </h1>
                        <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                      
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero3