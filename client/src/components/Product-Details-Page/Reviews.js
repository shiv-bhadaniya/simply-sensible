import React from 'react'


const Reviews = ({ curretnProduct }) => {

    var reviews = curretnProduct?.reviews;
    console.log("curretnProduct from reviews : ", curretnProduct.reviews);

    if (reviews == null) {
        return <>Loading....</>
    }

    return (
        
        <div class="gap-9 px-3 grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:grid-cols-1 md:grid-cols-4 md:mb-12 lg:grid-cols-6 xl:grid-cols-4 2xl:grid-cols-6">
            {reviews.map((review) => {
                return <>
                <figure class=" border bg-yellow-300 px-3 flex flex-col items-center justify-center p-8 text-center border-b  rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{review.rating}/5</h3>
                    <p class="my-4 font-light">{review.review}</p>
                </blockquote>
                <figcaption class="flex items-center justify-center space-x-3">
                    <div class="space-y-0.5 font-medium dark:text-white text-left">
                        <div> {review.user.name} </div>
                    </div>
                </figcaption>
            </figure>
                </>
            })}
        </div>

    )



    // return (
    //     <div class="grid grid-cols-4  px-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-0 md:gap-2 lg:gap-3">
    //         <div className='bg-gray-300 border border-red-500 ' >
    //             <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
    //                 <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
    //                     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">3/5</h3>
    //                     <p class="my-4 font-light">Lorem loremLorem loremLorem loremLorem loremLorem loremLoreoremLorem lm loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem lorem</p>
    //                 </blockquote>
    //                 <figcaption class="flex items-center justify-center space-x-3">
    //                     <div class="space-y-0.5 font-medium dark:text-white text-left">
    //                         <div>Shiv Bhadaniya</div>
    //                     </div>
    //                 </figcaption>
    //             </figure>
    //         </div>
    //         <div className='bg-gray-300 border border-red-500' >
    //             <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
    //                 <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
    //                     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">3/5</h3>
    //                     <p class="my-4 font-light">loremLorem loremLorem lorem</p>
    //                 </blockquote>
    //                 <figcaption class="flex items-center justify-center space-x-3">
    //                     <div class="space-y-0.5 font-medium dark:text-white text-left">
    //                         <div>Shiv Bhadaniya</div>
    //                     </div>
    //                 </figcaption>
    //             </figure>
    //         </div>            <div className='bg-gray-300 border border-red-500 ' >
    //             <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
    //                 <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
    //                     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">3/5</h3>
    //                     <p class="my-4 font-light">Lorem loremLorem loremLorem loremLoremrem lorem loremLorem loremLorem loremLoremrem emLorem loremLorem loremLorem loremoremLorem loremLorem loremLorem loremLorem loremLorem loremLorem lorem</p>
    //                 </blockquote>
    //                 <figcaption class="flex items-center justify-center space-x-3">
    //                     <div class="space-y-0.5 font-medium dark:text-white text-left">
    //                         <div>Shiv Bhadaniya</div>
    //                     </div>
    //                 </figcaption>
    //             </figure>
    //         </div>            <div className='bg-gray-300 border border-red-500' >
    //             <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
    //                 <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
    //                     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">3/5</h3>
    //                     <p class="my-4 font-light">Lorem loremLorem loremLorem loremLorem lorem</p>
    //                 </blockquote>
    //                 <figcaption class="flex items-center justify-center space-x-3">
    //                     <div class="space-y-0.5 font-medium dark:text-white text-left">
    //                         <div>Shiv Bhadaniya</div>
    //                     </div>
    //                 </figcaption>
    //             </figure>
    //         </div>            <div className='bg-gray-300 border border-red-500' >
    //             <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
    //                 <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
    //                     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">3/5</h3>
    //                     <p class="my-4 font-light">Lorem lemLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem lorem</p>
    //                 </blockquote>
    //                 <figcaption class="flex items-center justify-center space-x-3">
    //                     <div class="space-y-0.5 font-medium dark:text-white text-left">
    //                         <div>Shiv Bhadaniya</div>
    //                     </div>
    //                 </figcaption>
    //             </figure>
    //         </div>
    //     </div>
    // )


}

export default Reviews