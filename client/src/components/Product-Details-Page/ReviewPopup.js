import React from 'react'

const ReviewPopup = () => {
    return (
        <>
            <form >
                <div class="flex justify-center">
                    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">

                        {/* <!-- rating --> */}
                        <div class="flex flex-row rounded-md shadow-sm">
                            <button class="basis-1/4 rounded-lg mx-1 border-gray-900 hover:text-white hover:bg-blue-600 border  font-medium mt-4 py-1">01</button>
                            <button class="basis-1/4 rounded-lg mx-1 border-gray-900 hover:text-white hover:bg-blue-600 border  font-medium mt-4 py-1">02</button>
                            <button class="basis-1/4 rounded-lg mx-1 border-gray-900 hover:text-white hover:bg-blue-600 border  font-medium mt-4 py-1">03</button>
                            <button class="basis-1/4 rounded-lg mx-1 border-gray-900 hover:text-white hover:bg-blue-600 border  font-medium mt-4 py-1">04</button>
                            <button class="basis-1/4 rounded-lg mx-1 border-gray-900 hover:text-white hover:bg-blue-600 border  font-medium mt-4 py-1">05</button>
                        </div>
                        {/* <!--  --> */}

                        {/* <!-- textarea --> */}

                        <div class="mt-4 w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                            <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                <label for="comment" class="sr-only">Your comment</label>
                                <textarea id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a review..." required></textarea>
                            </div>
                        </div>


                        {/* <!--  --> */}


                        <button type="submit" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ReviewPopup
