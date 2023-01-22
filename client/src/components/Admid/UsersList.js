import React from 'react'
import { useSelector } from 'react-redux';
import PageLoading from '../../utils/PageLoading';
import "./dashboard.css";
import Sidebar from './Sidebar';

const UsersList = () => {

    const {allUsers, allUsersLoading, allUsersError} = useSelector((state) => state.allUsers)

        if(allUsersLoading) {
            return <>
                <PageLoading />
            </>
        }

    return (
        <>
            <div className='dashboard'>
                <Sidebar />
                <div className="productListContainer">
                    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                        <h2 className="mb-4 text-2xl font-extrabold leading-tight text-center py-6 font-mono">All Users</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-xs">
                                <thead className="dark:bg-gray-700 bg-gray-300">
                                    <tr className="text-left">
                                        <th className="py-3 font-extrabold font-mono pl-1">User Name</th>
                                        <th className="py-3 font-extrabold font-mono">User Email</th>
                                        <th className="py-3 font-extrabold font-mono">User Joining Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allUsers?.map((item) => {
                                        return (
                                            <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                                <td className="p-3">
                                                    <p className='font-medium'> {item.name} </p>
                                                </td>
                                                <td className=" pr-0">
                                                    <p className='font-medium '> {item?.email} </p>
                                                </td>
                                                <td className="">
                                                    <p className='font-medium '> {item?.createdAt} </p>
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

export default UsersList