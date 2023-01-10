import React, { useEffect } from 'react'
import Sidebar from './Sidebar';
import {Link} from "react-router-dom";
import "./dashboard.css";
import { useDispatch, useSelector } from 'react-redux'
import PageLoading from '../../utils/PageLoading';
import { fetchAllProducts } from '../../slices/user/allProducts';
import { fetchAllUsers } from "../../slices/admin/user";
import { fetchAllOrders } from '../../slices/admin/order';

const Dashboard = () => {

  const dispatch = useDispatch();

  var { data, loading } = useSelector((state) => state.allProducts);
  var { allUserLoading, allUsers} = useSelector((state) => state.allUsers);
  var {allOrdersLoading, allOrders} = useSelector((state) => state.allOrders);

  var totalPrice = 0;

  if(!allOrdersLoading) {

    allOrders.map((item) => {
      totalPrice = totalPrice + (item?.paymetInfo?.amount); 
    })
  }


  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchAllUsers());
    dispatch(fetchAllOrders());
  }, [])

  return (
    <>
      <div className="dashboard">
        <Sidebar />

        <div className="dashboardContainer">
          <h1 className='hover:font-light'>Dashboard</h1>

          <div className="dashboardSummary">
            <div>
              <p>
                Total Amount <br /> {totalPrice}
              </p>
            </div>
            <div className="dashboardSummaryBox2">
              <Link to="/admin/products">
                <p>Product</p>
                <p>{loading ? <PageLoading/> : data?.length}</p>
              </Link>
              <Link to="/admin/orders">
                <p>Orders</p>
                <p> {allOrdersLoading ? <PageLoading /> : allOrders?.length } </p>
              </Link>
              <Link to="/admin/users">
                <p>Users</p>
                <p> {allUserLoading ? <> <PageLoading /> </> : allUsers.length} </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard