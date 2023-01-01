import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import { useSelector } from 'react-redux'
import ProtectedRoutes from './utils/ProtectedRoutes';
import { authUserSelector } from './slices/auth/auth';


const CheckOut = lazy(() => import("./components/CheckOut/CheckOut"));
const Home = lazy(() => import("./components/Home/Home"));
const Shop = lazy(() => import("./components/Shop/Shop"));
const Cart = lazy(() => import("./components/Cart/Cart"));
const Auth = lazy(() => import("../src/components/Auth/Auth.js"));
const AdminAddProduct = lazy(() => import("./components/Admid/AdminAddProduct"));
const ProductDetailsPage = lazy(() => import("./components/Product-Details-Page/ProductDetailsPage"))


function App() {

  const { data } = useSelector(authUserSelector);
  console.log("Data from app.js : ",data.token);
  var isAuthenticated = false;
  if (data.token) {
    isAuthenticated = true;
  }

  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>} >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/admin' element={<AdminAddProduct />} />
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
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
