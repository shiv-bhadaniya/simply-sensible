import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { fetchAllUserOrders } from "../../slices/user/fetchOrder";
import PageLoading from "../../utils/PageLoading";


const Order = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { fetchUserOrderLoading, fetchUserOrder } = useSelector((state) => state.userOrder);

  useEffect(() => {
    dispatch(fetchAllUserOrders(navigate));
  }, [])

  return (
    fetchUserOrderLoading ? <> <PageLoading /> </> : (
      <>

        {Array.isArray(fetchUserOrder) ? <> <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
          <h2 className="mb-4 text-2xl font-extrabold leading-tight text-center py-6 font-mono">My Order</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <thead className="dark:bg-gray-700 bg-gray-300">
                <tr className="text-left">
                  <th className="p-3 font-extrabold font-mono">Order Id</th>
                  <th className="p-3 font-extrabold font-mono">Items Qty</th>
                  <th className="p-3 font-extrabold font-mono">Order Date</th>
                  <th className="p-3 font-extrabold font-mono">Amount</th>
                  <th className="p-3 font-extrabold font-mono">Status</th>
                </tr>
              </thead>
              <tbody>


                {fetchUserOrder?.map((item) => {
                  return (
                    <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                      <td className="p-3">
                        <p className='font-medium'> {item._id} </p>
                      </td>
                      <td className="p-3">
                        <p className='font-medium'> {item.orderItems.length} </p>
                      </td>
                      <td className="p-3">
                        <p className='font-medium'> {item.paidAt} </p>
                      </td>
                      <td className="p-3">
                        <p className='font-medium'> {item.paymetInfo.amount} </p>
                      </td>
                      <td className="p-3">
                        {item.orderStatus !== "deliverd" ? <><p className='text-[#CD0404] font-extrabold'> {item.orderStatus} </p> </> : <><p className='text-green-700 font-extrabold'> {item.orderStatus} </p></>}
                      </td>
                    </tr>
                  )
                })}

              </tbody>
            </table>
          </div>
        </div> </> : <> <h1>Not order yet.</h1> </>}

      </>
    )
  )
}

export default Order