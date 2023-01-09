import React, { useEffect, useState } from 'react'
import "./Cart.css";
import CartItemCard from './CartItemCard';
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { quantityDecrement, quantityIncrement, removeProduct } from '../../slices/user/cart';
import { calculateCartFinalPriceFromServer } from '../../slices/user/cartPrice';

const Cart = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    var {cartItems} = useSelector((state) => state.cart);
    console.log("Cart item loading using redux selector. ", cartItems);

    if (localStorage.getItem('products')) {
        cartItems = JSON.parse(localStorage.getItem('products'));
    }
    

    const increaseQuantity = (incrementproduct, increaseQuantityProductId) => {

        if(incrementproduct.quantity >= 20) {
            return;
        }
        dispatch(quantityIncrement(incrementproduct))
        let products = [];
        if (localStorage.getItem('products')) {
            products = JSON.parse(localStorage.getItem('products'));
            for(let i = 0; i < products.length; i++) {
                if(products[i]._id === increaseQuantityProductId) {
                    incrementproduct = products[i];
                    products[i].quantity = products[i].quantity + 1;
                }
            } 
            localStorage.setItem('products', JSON.stringify(products));         
        }

        
    }

    const decreaseQuantity = (item, decreaseQuantityProductId) => {
        console.log("Decrease called");
        if(item.quantity <= 1) {
            return;
        }
        dispatch(quantityDecrement(item));

        let products = [];
        if (localStorage.getItem('products')) {
            products = JSON.parse(localStorage.getItem('products'));
            for(let i = 0; i < products.length; i++) {
                if(products[i]._id === decreaseQuantityProductId) {
                    products[i].quantity = products[i].quantity - 1;
                }
            } 
            localStorage.setItem('products', JSON.stringify(products));         
        }
    }

    const deleteCartItems = (removerProductId) => {
        dispatch(removeProduct(removerProductId));
        let products = [];
        if (localStorage.getItem('products')) {
            products = JSON.parse(localStorage.getItem('products'));
            products = products.filter((item) => item._id !== removerProductId)
            localStorage.setItem('products', JSON.stringify(products));
        }
    }

    const checkoutHandler = () => {
        // send all order details to backed like product id and queantity so we can calculate in backed and make safe payment despatch here 
        console.log(cartItems);
        dispatch(calculateCartFinalPriceFromServer(cartItems, navigate));        
    }

    return (
        <>
            {cartItems.length === 0 ? (
                <div className="emptyCart">
                    <MdDelete />

                    <h3>No Product in Your Cart</h3>
                    <Link to="/shop">View Products</Link>
                </div>
            ) : (
                <>
                    <div className="cartPage">
                        <div className="cartHeader">
                            <p>Product</p>
                            <p>Quantity</p>
                            <p>Subtotal</p>
                        </div>

                        {cartItems &&
                            cartItems.map((item) => (
                                <div className="cartContainer" key={item._id}>
                                    <CartItemCard item={item} deleteCartItems={deleteCartItems} />
                                    <div className="cartInput">
                                        <button onClick={() => decreaseQuantity(item, item._id) }>
                                            -
                                        </button>
                                        <div className='m-2' > {item.quantity} </div>
                                        {/* <input type="number" value={item.quantity} readOnly /> */}
                                        <button onClick={() => increaseQuantity(item, item._id)} >
                                            +
                                        </button>
                                    </div>
                                    <p className="cartSubtotal">{`₹${item.price * item.quantity
                                        }`}</p>
                                </div>
                            ))}

                        <div className="cartGrossProfit">
                            <div></div>
                            <div className="cartGrossProfitBox">
                                <p>Gross Total</p>
                                <p>{`₹${cartItems.reduce(
                                    (acc, item) => acc + item.quantity * item.price,
                                    0
                                )}`}</p>
                            </div>
                            <div></div>
                            <div className="checkOutBtn">
                                <button onClick={checkoutHandler}>Check Out</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Cart