import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { allProductSelector } from '../../slices/user/allProducts'
import PageLoading from '../../utils/PageLoading';
import { MdModeEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';


const ProductList = () => {

    var { data, loading, hasError } = useSelector((state) => state.allProducts);

    const handleProductEdit = () => {
        if(window.confirm("Are you sure to edit product?")){
            // edit product
        } else {
            return;
        }
    }

    const handleProductDelete = () => {
        if(window.confirm("Are you sure to delete product?")) {
           // delete product
        } else {
            return;
        }
    }


    return (
        loading ? <> <PageLoading /> </> : <>         <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-extrabold leading-tight text-center py-6 font-mono">All Products</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <thead className="dark:bg-gray-700 bg-gray-300">
                        <tr className="text-left">
                            <th className="p-3 font-extrabold font-mono">Product Id</th>
                            <th className="p-3 font-extrabold font-mono">Product Sku</th>
                            <th className="p-3 font-extrabold font-mono">Product Name</th>
                            <th className="p-3 font-extrabold font-mono">Product Price</th>
                            <th className="p-3 font-extrabold font-mono">Product Weight</th>
                            <th className="p-3 font-extrabold font-mono">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item) => {
                            return (
                                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3">
                                        <p className='font-medium'> {item._id} </p>
                                    </td>
                                    <td className="p-3">
                                        <p className='font-medium pl-7'> {item.sku} </p>
                                    </td>
                                    <td className="p-3">
                                        <p className='font-medium pt-3'> {item.name} </p>
                                    </td>
                                    <td className="p-3">
                                        <p className='font-medium pl-7'> {item.price} </p>
                                    </td>
                                    <td className="p-3">
                                        <p className='font-medium pl-7'> {item.weight} </p>
                                    </td>
                                    <td className="inline-flex pt-3">
                                        <span className='block pr-7 text-[20px]  hover:cursor-pointer' onClick={handleProductEdit}> <MdModeEdit/> </span>
                                        <span className='block text-[19px] hover:cursor-pointer' onClick={handleProductDelete}> <MdDelete/> </span>

                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div> </>
    )
}

export default ProductList