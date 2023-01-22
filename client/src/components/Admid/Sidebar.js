import React from 'react'
import "./sidebar.css";
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { MdListAlt } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GrAdd } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";









const Sidebar = () => {

    return (
        <>
            <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

            <div class="min-h-screen flex flex-row bg-gray-100">
                <div class="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
                    <div class="flex items-center justify-center h-20 shadow-md">
                        <h1 class="text-xl uppercase text-indigo-500">Simply Sensible</h1>
                    </div>
                    <ul class="flex flex-col py-4">
                        <li>
                            <Link to="/admin/dashboard" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-home"></i></span>
                                <span class="text-sm font-medium">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/products" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx"><MdOutlineProductionQuantityLimits /></i></span>
                                <span class="text-sm font-medium">All Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/create/product" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx"><GrAdd /></i></span>
                                <span class="text-sm font-medium">Add New Product</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/orders" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-shopping-bag"></i></span>
                                <span class="text-sm font-medium">All Orders</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/users" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx"> <FiUsers /> </i></span>
                                <span class="text-sm font-medium">All Users</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;