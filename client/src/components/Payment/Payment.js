import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from "@stripe/react-stripe-js";
import * as API from "../../API/userAPI";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { createOrder } from '../../slices/user/order';

const Payment = () => {

  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const payBtn = useRef(null);


  var { cartPriceWithFinalAmountFromServer } = useSelector((state) => state.cartPriceFromServer);
  var { cartItems, shipingInfo} = useSelector((state) => state.cart);
  var { data } = useSelector((state) => state.authUser);
  var user = data?.result;
  // stripe accept paisa. convert rs to paisa
  var paymentAmountInPaisa = {
    amount: Math.round(cartPriceWithFinalAmountFromServer * 100),
  }

  const myOrder = {
    shipingInfo,
    orderItems: cartItems,
    totalAmount: cartPriceWithFinalAmountFromServer,
  }

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    payBtn.current.disabled = true;

    try {
      
      const { data } = await API.paymentProcess(paymentAmountInPaisa);
      console.log("data from server client_Scret : ", data);
      const client_secret = data?.client_secret;

      if(!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            phone: shipingInfo.phoneNo,
            address: {
              line1: shipingInfo.address,
              city: shipingInfo.city,
              state: shipingInfo.state,
              postal_code: shipingInfo.pincode,
              country: shipingInfo.country,
            },
          }
        }
      })

      if(result.error) {
        payBtn.current.disabled = false;
        toast.error(result.error.message, {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      } else {

        if(result.paymentIntent.status === "succeeded") {
          // create order here and dispatch with all details like oayment id and all that stuffff.
          console.log("Paymnet success. ", result);
          let rs = result.paymentIntent.amount;
          rs = rs/100;
          myOrder.paymetInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
            amount: rs,
            currency: result.paymentIntent.currency,
          }
          toast.success("Payment Successfully done.", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          dispatch(createOrder(myOrder, navigate));
          
        } else {
          payBtn.current.disabled = false;
          toast.error("Some error while payment.", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        }
      }

    } catch (error) {
      toast.error("Something went wrong.", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      console.log(error);
    }

  }

  return (
    <>
      <div class="antialiased bg-gray-500 text-gray-600 min-h-screen p-4 mt-6 pt-12">
        <div class="h-full">

          <div class="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto" x-data="{ card: true }">
            <div class="bg-white px-8 pb-6 rounded-b shadow-lg">
              <div class="grid place-items-center pt-7 font-mono text-2xl font-semibold"> Card Info </div>


              <div x-show="card">
                <div class="space-y-4 pt-7">

                  <div>
                    <label class="block text-sm font-medium mb-1" for="card-nr">Card Number <span class="text-red-500">*</span></label>
                    <CardNumberElement className='text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full' />
                  </div>


                  <div class="flex-1">
                    <label class="block text-sm font-medium mb-1" for="card-expiry">Expiry Date <span class="text-red-500">*</span></label>
                    <CardExpiryElement className='text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full' />
                  
                  </div>
                  <div class="flex-1">
                    <label class="block text-sm font-medium mb-1" for="card-cvc">CVC <span class="text-red-500">*</span></label>
                   <CardCvcElement className='text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full' />
                  </div>


                  <div class="mt-6">
                    <div class="mb-4">
                      <button ref={payBtn} type='submit' onClick={handlePaymentSubmit} class="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">Pay   &nbsp; &#8377; {cartPriceWithFinalAmountFromServer}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment