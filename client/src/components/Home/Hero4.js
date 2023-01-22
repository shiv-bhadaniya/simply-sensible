import React from 'react'
import H4 from "../../assets/hero-4.jpg";

const Hero4 = () => {
    return (
        <>
            <section class="text-gray-600 body-font bg-gray-50">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">ABOUT US</h1>
                        <p class="mb-8 leading-relaxed"> As a mother i realized the need of healthy snacking when i saw my little one  imitating all my habits including food habits too. So I decided to add more healthy and yummy options for all our little hungers which gives happiness ans satisfaction if imitated.
                            That is the story behind  "Simply Sensible" as the name suggest its its more about eating sensible food and YES we are trying  to develop something which is healthy, refreshing and delicious conferring the heavenly delights to tantalizing taste buds and  energetic, wholesome and fulfilling for hungry tummies. </p>

                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className='object-cover object-center rounded' src={H4} alt="h3-img" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero4