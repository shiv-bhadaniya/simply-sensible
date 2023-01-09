import React from 'react'
import "./slidebar.css";
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { MdListAlt } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";







const Slidebar = () => {

    return (
        <>
            <div className="sidebar">
                <Link to="/">
                    <h1>Simply Sensible</h1>
                </Link>

                <Link to="/admin/dashboard">
                    <p>
                        <MdDashboard /> Dashboard
                    </p>
                </Link>

                <Link to="/admin/products">
                    <p>
                        <MdPostAdd />
                        All Products
                    </p>
                </Link>

                <Link to="/admin/create/product">
                    <p>
                        <MdAdd />
                        Create Product
                    </p>
                </Link>


                <Link to="/admin/orders">
                    <p>
                        <MdListAlt />
                        Orders
                    </p>
                </Link>

                <Link to="/admin/users">
                    <p>
                        <MdPeopleAlt />
                        Users
                    </p>
                </Link>

                <Link to="/admin/reviews">
                    <p>
                        <MdRateReview />
                        Reviews
                    </p>
                </Link>
            </div>
        </>
    )
}

export default Slidebar