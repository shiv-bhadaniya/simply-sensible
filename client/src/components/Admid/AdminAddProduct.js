import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addNewProductDataSelector, adminAddNewProduct } from '../../slices/admin/adminAddNewProduct';



const AdminAddProduct = () => {

    const dispatch = useDispatch();

    const [newProductData, setNewProductData] = useState({ sku: "", name: "", discription: "", weight: "", price: "", categorie: "", photo: "" });

    var { loading } = useSelector(addNewProductDataSelector);


    const handleAdminAddNewProduct = (e) => {
        e.preventDefault();
        dispatch(adminAddNewProduct(newProductData));
    }

    return (
        <>
            <div class="bg-[#FCFFE7] min-h-screen flex items-center">
                <div class="w-full">
                    <h2 class="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Add New Product</h2>
                    <div class="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                        <form onSubmit={handleAdminAddNewProduct}>

                            <div class="mb-5">
                                <label for="product_sku" class="block mb-2 font-bold text-gray-600" >Product SKU</label>
                                <input type="text" id="product_sku" name="product_sku" placeholder="Product SKU." class="border border-gray-300 shadow p-3 w-full rounded mb-" required value={newProductData.sku} onChange={(e) => setNewProductData({ ...newProductData, sku: e.target.value })} />
                            </div>

                            <div class="mb-5">
                                <label for="product_name" class="block mb-2 font-bold text-gray-600" >Product Name</label>
                                <input type="text" id="product_name" name="product_name" placeholder="Product Name." class="border border-gray-300 shadow p-3 w-full rounded mb-" required value={newProductData.name} onChange={(e) => setNewProductData({ ...newProductData, name: e.target.value })} />
                            </div>

                            <div class="mb-5">
                                <label for="product_description" class="block mb-2 font-bold text-gray-600">Product Description</label>
                                <input type="text" id="product_description" name="product_description" placeholder="Product Description." class="border border-gray-300 shadow p-3 w-full rounded mb-" required value={newProductData.discription} onChange={(e) => setNewProductData({ ...newProductData, discription: e.target.value })} />
                            </div>

                            <div class="mb-5">
                                <label for="product_weight" class="block mb-2 font-bold text-gray-600">Product Weight</label>
                                <input type="text" id="product_weight" name="product_weight" placeholder="Product Weight." class="border border-gray-300 shadow p-3 w-full rounded mb-" required value={newProductData.weight} onChange={(e) => setNewProductData({ ...newProductData, weight: e.target.value })} />
                            </div>

                            <div class="mb-5">
                                <label for="product_price" class="block mb-2 font-bold text-gray-600">Product Price</label>
                                <input type="text" id="product_price" name="product_price" placeholder="Product Price." class="border border-gray-300 shadow p-3 w-full rounded mb-" required value={newProductData.price} onChange={(e) => setNewProductData({ ...newProductData, price: e.target.value })} />
                            </div>

                            <div class="mb-5">
                                <label for="product_categorie" class="block mb-2 font-bold text-gray-600">Product Categorie</label>
                                <input type="text" id="product_categorie" name="product_categorie" placeholder="Product Categorie." class="border border-gray-300 shadow p-3 w-full rounded mb-" required value={newProductData.categorie} onChange={(e) => setNewProductData({ ...newProductData, categorie: e.target.value })} />
                            </div>

                            <div class="mb-5">
                                <label class="block mb-2 text-sm font-bold text-gray-600 dark:text-white" for="poduct_photo">Upload Product Photo</label>
                                <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="product_photo" id="product_photo" type="file" />
                            </div>

                            {loading ? <><button disabled type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                                <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                </svg>
                                Uploading Product...
                            </button> </> : <><button type="submit" class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Upload Product</button></>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminAddProduct