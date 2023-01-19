import React from 'react'
import ReactDom from 'react-dom'


const ReviewForm = ({ isOpen, onClose, handleRatingButton, handleReviewSubmit, setReviewText, reviewText, rating}) => {

    if (!isOpen) {
        return null;
    }

    const MODAL_STYLES = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FFF',
        padding: '50px',
        zIndex: 1000
    }

    const OVERLAY_STYLES = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, .7)',
        zIndex: 1000
    }

    

    return ReactDom.createPortal(
        <div style={OVERLAY_STYLES}>
            <div style={MODAL_STYLES}>

                <button onClick={onClose}>Close</button>

                <div class="flex justify-center">
                    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">


                        <div class="flex flex-row rounded-md shadow-sm">
                            <button name='1' style={ rating==1 ? {backgroundColor:'yellow'} : {}}  onClick={handleRatingButton} class="basis-1/4 rounded-lg mx-1 border-gray-900 hover:text-white hover:bg-red-700 border  font-medium mt-4 py-1">01</button>
                            <button name='2' style={ rating==2 ? {backgroundColor:'yellow'} : {}} onClick={handleRatingButton} class="basis-1/4 rounded-lg mx-1 border-gray-900 hover:text-white hover:bg-red-400 border  font-medium mt-4 py-1">02</button>
                            <button name='3' style={ rating==3 ? {backgroundColor:'yellow'} : {}} onClick={handleRatingButton} class="basis-1/4 rounded-lg mx-1 border-gray-900 hover:text-white hover:bg-yellow-100 border  font-medium mt-4 py-1">03</button>
                            <button name='4' style={ rating==4 ? {backgroundColor:'yellow'} : {}} onClick={handleRatingButton} class="basis-1/4 rounded-lg mx-1 border-gray-900 hover:text-white hover:bg-yellow-200 border  font-medium mt-4 py-1">04</button>
                            <button name='5' style={ rating==5 ? {backgroundColor:'yellow'} : {}} onClick={handleRatingButton} class="basis-1/4 rounded-lg mx-1 border-gray-900 hover:text-white hover:bg-yellow-300 border  font-medium mt-4 py-1">05</button>
                        </div>


                        <div class="mt-4 w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                            <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                <label for="comment" class="sr-only">Your comment</label>
                                <textarea name='reviewText' value={reviewText} onChange={(e) => setReviewText(e.target.value)} rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a review..." required></textarea>
                            </div>
                        </div>




                        <button onClick={handleReviewSubmit} type="submit" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit Review</button>
                    </div>
                </div>
            </div>
        </div>, document.getElementById('portal')
    )
}

export default ReviewForm
