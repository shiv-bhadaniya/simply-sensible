import React from 'react'
import "./CartItemCard.css";
import { Link } from 'react-router-dom'

const CartItemCard = ({ item, deleteCartItems }) => {
    return (
        <>
            <div className="CartItemCard">
                <img src={item.photo} alt="ssa" />
                <div>
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                    <span>{`Price: ₹${item.price}`}</span>
                    <p onClick={() => deleteCartItems(item._id)}>Remove</p>
                </div>
            </div>
        </>
    )
}

export default CartItemCard