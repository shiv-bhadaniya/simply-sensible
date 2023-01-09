import React from 'react'
import "./profile.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from '../Navbar/Navbar';
import { fetchAllUserOrders } from '../../slices/user/fetchOrder';


const Profile = () => {

    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.authUser);


  return (
    <>
        <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <span className="rounded-full border-black font-large text-gray-600 dark:text-gray-300  py-7">  {data?.result?.name[0]} </span>
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{data?.result?.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{data?.result?.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(data?.result?.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/user/profile/order">My Orders</Link>
                {data?.result?.isAdmin && <>
                    <Link to="/admin/dashboard">Admin Dashboard</Link>
                </>}
              </div>
            </div>
          </div>
    </>
  )
}

export default Profile