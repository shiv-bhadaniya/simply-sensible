import React from 'react'
import { useSelector } from 'react-redux';
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import PageLoading from '../../utils/PageLoading';

const Reviews = () => {

    const { productDetails, productDetailsLoading, productDetailsError } = useSelector((state) => state.productDetails);

    var reviews = productDetails?.reviews;


    const renderReviews = () => {

        if (productDetailsLoading) return <> <PageLoading /> </>
        if (!productDetailsLoading && productDetailsError) return (<div class="flex flex-col justify-center items-center pb-12 font-mono text-xl font-extrabold uppercase tracking-widest">
            Some problem occure
            <hr />
        </div>)
        if (!productDetailsLoading && productDetails.length == 0) return (<div class="flex flex-col justify-center items-center pb-12 font-mono text-xl font-extrabold uppercase tracking-widest">
            No review available
            <hr />
        </div>)


        return <>
            <div class="gap-9 px-3 grid mb-8  rounded-lg shadow-sm  sm:grid-cols-2 md:grid-cols-4 md:mb-12 lg:grid-cols-6 xl:grid-cols-4 2xl:grid-cols-6">
                {reviews.map((review) => {
                    return <>
                        <figure class=" border rounded-md bg-gray-200 px-3 flex flex-col items-center justify-center p-8 text-center border-b  rounded-t-lg  ">
                            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{review?.rating}/5</h3>
                                <p class="my-4 font-extrabold">{review?.review}</p>
                            </blockquote>
                            <figcaption class="flex items-center justify-center space-x-3">
                                <div class="space-y-0.5 font-medium dark:text-white text-left">
                                    <div> {review?.user?.name} </div>
                                    <p class="my-4  font-light  text-sm">{review?.date}</p>
                                </div>
                            </figcaption>
                        </figure>
                    </>
                })}
            </div>
        </>


    }

    return (
        <>
            <div class="flex flex-col justify-center items-center pb-12 font-mono text-xl font-extrabold uppercase tracking-widest">
                Reviews
                <hr />
            </div>
            {renderReviews()}
        </>


    )

}

export default Reviews