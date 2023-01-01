import React, { useEffect, useState } from "react";
import { Country, State, City } from 'country-state-city';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../slices/user/cart";


const CheckOut = () => {

  const dispatch = useDispatch();
  

  const [grossTotal, setGrossTotal] = useState(0);
  var [totalProductAmount, setTotalProductAmount] = useState(0);

  var { cartItems } = useSelector((state) => state.cart);
  var { cartPriceWithFinalAmountFromServer } = useSelector((state) => state.cartPriceFromServer);
 
  
  var total = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price, 0);

  useEffect(() => {
    setTotalProductAmount(total);
    setGrossTotal(totalProductAmount + 80);
  })


const [name, setName] = useState("");
const [address, setAddress] = useState("");
const [landMark, setLandMark] = useState("");
const [city, setCity] = useState("");
const [state, setState] = useState("");
const [country, setCountry] = useState("");
const [pinCode, setPinCode] = useState("");
const [phoneNo, setPhoneNo] = useState(null);


const handleFormSubmit = (e) => {
  e.preventDefault();

  if (phoneNo.length !== 10) {
    console.log("Invalid number");
    toast.error('Enter Valid phone number', {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return;
  }

  dispatch(saveShippingInfo({name,address,landMark ,phoneNo ,country, state, city, pinCode}));

  toast.success('Form submitted Successfully!', {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

}





return (
  <div className="overflow-y-hidden">
    <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
      <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
        <form onSubmit={handleFormSubmit}>
          <div className="flex w-full  flex-col justify-start items-start">
            <div className>
              <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Check out</p>
            </div>
            <div className="mt-12">
              <p className="text-xl font-semibold leading-5 text-gray-800">Shipping Details</p>
            </div>
            <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
              <input value={name} onChange={(e) => setName(e.target.value)} className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Full Name" />
              <input value={address} onChange={(e) => setAddress(e.target.value)} className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Address" />
              <input  value={landMark} onChange={(e) => setLandMark(e.target.value)} className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Landmark" />
              <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">

                {/* City drop down */}
                {/* start */}
                <div>

                  <select
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="">Country</option>
                    {Country.getAllCountries().map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* end */}


                <div className="relative w-full">

                  {/* State dropdown */}
                  {/* start */}
                  {country && (
                    <div>
                      <select
                        required
                        value={state}
                        onChange={(e) => {
                          console.log(e.target.value)
                          setState(e.target.value)
                        }}
                      >
                        <option value="">State</option>
                        {State &&
                          State.getStatesOfCountry(country).map((item) => (
                            <option key={item.isoCode} value={item.isoCode}>
                              {item.name}
                            </option>
                          ))}
                      </select>
                    </div>
                  )}
                  {/* end */}
                </div>
              </div>
              <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">

                {/* city name */}
                {/* start */}
                {state && (
                  <div>
                    <select
                      required
                      value={city}
                      onChange={(e) => {
                        console.log(e.target.value)
                        setCity(e.target.value)
                      }}
                    >
                      <option value="">City</option>
                      {State &&
                        City.getCitiesOfState(country, state).map((item) => (
                          <option key={item.isoCode} value={item.isoCode}>
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>
                )}
                {/* end */}
                <div className="w-full">
                  <input  value={pinCode} onChange={(e) => setPinCode(e.target.value)} className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3   w-full" type="text" placeholder="Pin Code" />
                </div>
              </div>
              <input
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)} className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4   w-full" type="text" placeholder="Phone Number" />
              <div>
              </div>
            </div>
            <button type="submit" className="focus:outline-none  focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">Proceed to payment</button>
            <ToastContainer />
          </div>
        </form>
        <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
          <div>
            <h1 className="text-2xl font-semibold leading-6 text-gray-800">Order Summary</h1>
          </div>
          <div className="flex mt-7 flex-col items-end w-full space-y-6">
            <div className="flex justify-between w-full items-center">
              <p className="text-lg leading-4 text-gray-600">Sub Total</p>
              <p className="text-lg font-semibold leading-4 text-gray-600"> &#8377; {totalProductAmount}</p>
            </div>
            <div className="flex justify-between w-full items-center">
              <p className="text-lg leading-4 text-gray-600">Shipping Charges</p>
              <p className="text-lg font-semibold leading-4 text-gray-600">&#8377; 80</p>
            </div>
          </div>
          <div className="flex justify-between w-full items-center mt-32">
            <p className="text-xl font-semibold leading-4 text-gray-800">Total</p>
            <p className="text-lg font-semibold leading-4 text-gray-800">&#8377; {grossTotal}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}


export default CheckOut