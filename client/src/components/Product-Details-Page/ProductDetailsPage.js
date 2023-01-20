import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { useNavigate, useParams } from 'react-router-dom';
import { allProductSelector } from '../../slices/user/allProducts';
import { AddToCart, cartSelector, quantityIncrement } from '../../slices/user/cart';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ReviewForm from './ReviewForm';
import { newProductReview } from '../../slices/user/newProductReview';
import Reviews from './Reviews';
import { getProductDetails } from '../../slices/user/productDetails';


const ProductDetailsPage = () => {

    let { productId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    var userData = useSelector((state) => state.authUser)

    const { productDetails, productDetailsLoading, productDetailsError } = useSelector((state) => state.productDetails);
    var { newProductReviewData } = useSelector((state) => state.newProductReview);

    const [isOpen, setIsOpen] = useState(false);
    var [quantity, setQuantity] = useState(1);
    var [isAdded, setAdded] = useState(false);
    const [rating, setRating] = useState(5)
    const [reviewText, setReviewText] = useState("");



    var currentProductDetails = {
        "quantity": quantity,
        "weight": productDetails.weight,
        "categorie": productDetails.categorie,
        "discription": productDetails.discription,
        "name": productDetails.name,
        "price": productDetails.price,
        "sku": productDetails.sku,
        "photo": productDetails.photo,
        "productAddedAt": productDetails.productAddedAt,
        "_id": productDetails._id,
    }

    useEffect(() => {
        dispatch(getProductDetails(productId));
    }, [])

    useEffect(() => {
        var curretProductInCartCheck = (items) => {
            for (let i = 0; i < items.length; i++) {
                if (items[i]._id === productId) {
                    return true;
                }
            }
            return false;
        }


        let items = [];
        if (localStorage.getItem('products')) {
            items = JSON.parse(localStorage.getItem('products'));

            let checkValue = curretProductInCartCheck(items);
            if (checkValue) {
                setAdded(true);
            }
        }
    }, [JSON.parse(localStorage.getItem('products'))])


    const handleAddToCart = (e) => {

        setAdded(!isAdded)

        let products = [];
        if (localStorage.getItem('products')) {
            products = JSON.parse(localStorage.getItem('products'));
            products = products.filter((item) => item._id !== productId)
        }
        products.push(currentProductDetails);
        localStorage.setItem('products', JSON.stringify(products));
        dispatch(AddToCart(currentProductDetails));
    }

    var handleRemoveFromCart = (e) => {
        setAdded(!isAdded)
        console.log("Remove called.");
        let products = [];
        if (localStorage.getItem('products')) {
            products = JSON.parse(localStorage.getItem('products'));
            products = products.filter((item) => item._id !== productId)
            localStorage.setItem('products', JSON.stringify(products));
        }
    }

    var handleUpdateCart = (e) => {
        let products = [];
        if (localStorage.getItem('products')) {
            products = JSON.parse(localStorage.getItem('products'));
            products = products.filter((item) => item._id !== productId)
        }
        products.push(currentProductDetails);
        localStorage.setItem('products', JSON.stringify(products));
        dispatch(AddToCart(currentProductDetails));
    }

    var handleQuantityChange = (e) => {
        let qu = +e.target.value;
        setQuantity(qu);
    }

    const handleReviewSubmit = () => {
        setIsOpen(false)
        // console.log("Review Submit button clicked.", rating, reviewText);
        setRating(0);
        setReviewText("")

        let reviewData = {}
        reviewData.rating = rating
        reviewData.review = reviewText
        reviewData.user = userData?.data?.result

        // dispatch review submit reviewData
        console.log("Review All Data : ", reviewData);
        dispatch(newProductReview(productId, reviewData))
    }

    const handleRatingButton = (e) => {
        setRating(e.target.name)
    }


    const handleOpenReviewBox = () => {

        if (userData?.data?.length === 0) {
            navigate("/auth");
            return;
        }

        setIsOpen(true)
    }
    console.log("Curent shop : ", productDetails);




    const renderProducts = () => {

        // <img src={loadingAnimation} alt="Loading..." />
        if (productDetailsLoading) return <div > <AiOutlineLoading3Quarters /> </div>
        if (productDetailsError) return <h1>oops!! some thing went wrong. please try afteer some times.</h1>
        if (!productDetailsLoading && productDetails.length == 0) return <h1>No product avabile.</h1>


        return (
            <>
                <section class="text-gray-700 body-font overflow-hidden bg-white z-[2]">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="lg:w-4/5 mx-auto flex flex-wrap">
                            <img alt="product-photo" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={productDetails.photo} />
                            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 class="text-sm title-font text-gray-500 tracking-widest">Simply Sensible</h2>
                                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1"> {productDetails.name} | {productDetails.weight} </h1>
                                <div class="flex mb-4 z-[1] relative">
                                    {/* https://play.tailwindcss.com/93gXrdMrvy */}
                                    <span class="flex items-center ">
                                        <div>
                                            <button onClick={handleOpenReviewBox} className="font-serif font-medium underline" > Submit Review</button>
                                            <ReviewForm isOpen={isOpen} onClose={() => setIsOpen(false)} handleRatingButton={handleRatingButton} handleReviewSubmit={handleReviewSubmit} setReviewText={setReviewText} reviewText={reviewText} rating={rating} />

                                        </div>
                                    </span>
                                </div>
                                <p class="leading-relaxed">{productDetails.discription}</p>
                                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                    <div class="flex ml-6 items-center">
                                        <span class="mr-3"> Quantity</span>
                                        <div class="relative">
                                            <select onChange={handleQuantityChange} class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>
                                                <option>13</option>
                                                <option>14</option>
                                                <option>15</option>
                                                <option>16</option>
                                                <option>17</option>
                                                <option>18</option>
                                                <option>19</option>
                                                <option>20</option>
                                            </select>
                                            <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="stroke-2 w-4 h-4" viewBox="0 0 24 24">
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex">
                                    <span class="title-font font-medium text-2xl text-gray-900">&#8377; {productDetails.price} </span>
                                    {isAdded && <><button onClick={handleUpdateCart} class="flex ml-auto text-white bg-[#CE9461] border-0 py-2 px-6 focus:outline-none hover:bg-[#DEA057] rounded"> Update Cart Details </button></>}
                                    <button onClick={isAdded ? handleRemoveFromCart : handleAddToCart} class={`flex ml-auto text-white border-0 py-2 px-6 focus:outline-none rounded ${isAdded ? " bg-red-600 hover:bg-red-700" : "bg-[#CE9461] hover:bg-[#DEA057]"} `}> {isAdded ? "Remove form cart" : "Add to"} </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Reviews />
            </>
        )
    }


    return (
        <>
            {/* <!-- component --> */}
            {renderProducts()}
        </>
    )
}

export default ProductDetailsPage