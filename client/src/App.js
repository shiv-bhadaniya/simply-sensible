import './App.css';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import * as API from "./API/userAPI.js";

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import PageLoading from './utils/PageLoading';

import { useDispatch, useSelector } from 'react-redux'
import ProtectedRoutes from './utils/ProtectedRoutes';
import { authUserSelector } from './slices/auth/auth';
import Dashboard from './components/Admid/Dashboard';
import ProductList from './components/Admid/ProductList';
import OrderList from './components/Admid/OrderList';
import UsersList from './components/Admid/UsersList';
import NotFound from './components/NotFound/NotFound';




const CheckOut = lazy(() => import("./components/CheckOut/CheckOut"));
const Home = lazy(() => import("./components/Home/Home"));
const Shop = lazy(() => import("./components/Shop/Shop"));
const Cart = lazy(() => import("./components/Cart/Cart"));
const Auth = lazy(() => import("../src/components/Auth/Auth.js"));
const AdminAddProduct = lazy(() => import("./components/Admid/AdminAddProduct"));
const ProductDetailsPage = lazy(() => import("./components/Product-Details-Page/ProductDetailsPage"))
const Payment = lazy(() => import("./components/Payment/Payment"));
const Order = lazy(() => import('./components/User/Order'));
const Profile = lazy(() => import('./components/User/Profile'));






const App = () => {

  const dispatch = useDispatch();
  const { data, stripAPIKey } = useSelector(authUserSelector);

  var isAuthenticated = false;
  var isAdmin = false;
  if (data.token) {
    isAuthenticated = true;
    isAdmin = data?.result?.isAdmin;
  }


  return (
    <>
      <Suspense fallback={<PageLoading />} >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/auth' element={<Auth />} />
            <Route path="/shop/product-details/:productId" element={<ProductDetailsPage />} />
            <Route path="/shop/cart" element={<Cart />} />

            <Route
              path="/shop/checkout"
              element={
                <ProtectedRoutes isAuthenticated={isAuthenticated}>
                  <CheckOut />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/shop/checkout/payment"
              element={
                stripAPIKey && (<Elements stripe={loadStripe(stripAPIKey)}>
                  <ProtectedRoutes isAuthenticated={isAuthenticated}>
                    <Payment />
                  </ProtectedRoutes>
                </Elements>)
              }
            />

            <Route
              path="/user/profile"
              element={
                <ProtectedRoutes isAuthenticated={isAuthenticated}>
                  <Profile />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/user/profile/order"
              element={
                <ProtectedRoutes isAuthenticated={isAuthenticated}>
                  <Order />
                </ProtectedRoutes>
              }
            />






            {/* Admin route */}





            <Route path='/admin/create/product' element={
              <ProtectedRoutes isAuthenticated={isAuthenticated} isAdmin={isAdmin} adminRoute={true}>
                <AdminAddProduct />
              </ProtectedRoutes>
            }
            />

            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoutes isAuthenticated={isAuthenticated} isAdmin={isAdmin} adminRoute={true}>
                  <Dashboard />
                </ProtectedRoutes>
              }
            />

            <Route
              path="admin/products"
              element={
                <ProtectedRoutes isAuthenticated={isAuthenticated} isAdmin={isAdmin} adminRoute={true}>
                  <ProductList />
                </ProtectedRoutes>
              }
            />

            <Route
              path="admin/orders"
              element={
                <ProtectedRoutes isAuthenticated={isAuthenticated} isAdmin={isAdmin} adminRoute={true}>
                  <OrderList />
                </ProtectedRoutes>
              }
            />

            <Route
              path="admin/users"
              element={
                <ProtectedRoutes isAuthenticated={isAuthenticated} isAdmin={isAdmin} adminRoute={true}>
                  <UsersList />
                </ProtectedRoutes>
              }
            />


            {/* not found page */}
            <Route path='*' element={<NotFound />} />


          </Routes>
         
        </BrowserRouter>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
