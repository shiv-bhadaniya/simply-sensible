import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PageLoading from '../../utils/PageLoading';
import "./dashboard.css";
import "./productList.css";
import Sidebar from './Sidebar';
import 'flowbite/dist/flowbite.min.js';
import { Dropdown } from "flowbite-react";
import { updateOrderStatus } from '../../slices/admin/orderStatusUpdate';

const OrderList = () => {

    const dispatch = useDispatch();

    var { allOrdersLoading, allOrders } = useSelector((state) => state.allOrders);

    const HandleUpdateOrderStatus = (preStatus, status, orderId) => {

        if(window.confirm(`Are you sure to update status from "${preStatus}" to "${status}"?`)) {
            let orderInfo = {
                orderId : orderId,
                orderUpdatingStatus : status, 
            }
            // dispatch orderInfo
            dispatch(updateOrderStatus(orderInfo));
            console.log("Updated status : ",  status, orderId, orderInfo);
        } else {
            return;
        }

    }

    return (
        allOrdersLoading ? <PageLoading /> : <>
            <div className="dashboard">
                <Sidebar />
                <div className="productListContainer">
                    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                        <h2 className="mb-4 text-2xl font-extrabold leading-tight text-center py-6 font-mono">All Orders</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-xs">
                                <thead className="dark:bg-gray-700 bg-gray-300">
                                    <tr className="text-left">
                                        <th className="py-3 font-extrabold font-mono">Order Id</th>
                                        <th className="py-3 font-extrabold font-mono">Order Date</th>
                                        <th className="py-3 font-extrabold font-mono">Order Amount</th>
                                        <th className="py-3 font-extrabold font-mono">CurrentStatus </th>
                                        <th className="py-3 font-extrabold font-mono">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allOrders?.map((item) => {
                                        return (
                                            <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                                <td className="p-3">
                                                    <p className='font-medium'> {item._id} </p>
                                                </td>
                                                <td className=" pr-0">
                                                    <p className='font-medium '> {item?.paidAt} </p>
                                                </td>
                                                <td className="">
                                                    <p className='font-medium '> {item?.paymetInfo?.amount} </p>
                                                </td>
                                                <td className="">
                                                    {item?.orderStatus === "Delivered" ? <><p className='font-normal text-green-700 '>Delivered</p></> : item?.orderStatus === "Shipping" ? <> <p className='font-bold text-[#FF8B13]'>Shipping</p> </> : <> <p className='font-extrabold text-[#CD0404]'>Proccessing</p> </>} 
                                                </td>
                                                <td className="">
                                                    <div className='p-0 '>
                                                        <Dropdown label="Update order Status" inline={true} >
                                                            <Dropdown.Item onClick={() => HandleUpdateOrderStatus( item?.orderStatus ,"Shipping", item._id)}>
                                                                Shipping
                                                            </Dropdown.Item>
                                                            <Dropdown.Item onClick={() => HandleUpdateOrderStatus(item?.orderStatus ,"Delivered", item._id)}>
                                                                Delivered
                                                            </Dropdown.Item>
                                                        </Dropdown>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default OrderList