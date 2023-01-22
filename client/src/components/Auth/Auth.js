import React, { useRef, useState } from 'react';
import img from "../../assets/hero-1.jpg"
import { useDispatch, useSelector } from "react-redux";
import { authUserSelector, authUserSignin, authUserSignup } from '../../slices/auth/auth.js';
import { useNavigate } from 'react-router-dom';

export const Auth = () => {

    const dispatch = useDispatch()

    const [isSignup, setSignup] = useState(0);
    const [isMatchPass, setMatchPass] = useState(0);
    var [isSub, setSub] = useState(0);
    var [isShowPass, setShowPass] = useState(0);

    const { loading } = useSelector(authUserSelector);

    const navigate = useNavigate();

    const emailRef = useRef("");
    const passwordRef = useRef("");
    const confirmPasswordRef = useRef("");
    const nameRef = useRef("");

    const handleSetAuthChange = () => {
        setSignup(!isSignup);
    }

    const handleShowPass = () => {
        setShowPass(!isShowPass);
    }

    var signinData, signupData;

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setSub(isSub++);
        console.log("Auth from submit button clicked.");
        signinData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };

        if (isSignup) {
            signupData = {
                email: emailRef.current.value,
                password: passwordRef.current.value,
                confirmPassword: confirmPasswordRef.current.value,
                name: nameRef.current.value
            };
        }
        if (isSignup) {
            // call signup
            dispatch(authUserSignup(signupData, navigate));
        } else {
            // call signin
            dispatch(authUserSignin(signinData, navigate));
        }
    }


    return (
        <>
            <section class="bg-gray-50 min-h-screen flex items-center justify-center">
                {/*  login container  */}
                <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                    {/*  form  */}
                    <div class="md:w-1/2 px-8 md:px-16">
                        <h2 class="font-bold text-2xl text-[#002D74]"> {isSignup ? "Signup" : "Signin"} </h2>

                        <form class="flex flex-col gap-4" onSubmit={handleFormSubmit}>
                            {isSignup ? <> <input ref={nameRef} class="p-2 mt-8 rounded-xl border" autoComplete='off' type="text" name="name" placeholder="Name" /></> : null}

                            <input ref={emailRef} class="p-2 mt-8 rounded-xl border" autoComplete='off' type="email" name="email" placeholder="Email" />
                            <div class="relative">
                                <input ref={passwordRef} class="p-2 rounded-xl border w-full" type={isShowPass ? "text" : "password"} name="password" placeholder="Password" />
                                <svg xmlns="http://www.w3.org/2000/svg" onClick={handleShowPass} width="16" height="16" fill="gray" class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                            </div>

                            {isSignup ? <> <div class="relative">
                                <input ref={confirmPasswordRef} className="p-2 rounded-xl border w-full" type="password" name="confirmPassword" placeholder="Confirm Password" />
                            </div>
                            </> : null}

                            {loading ? <> <div disabled type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                                <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                </svg>
                                Loading...
                            </div>
                            </> : <> <button type='submit' class="bg-blue-700 rounded-xl text-white py-2 hover:scale-105 duration-300">
                                {isSignup ? "Signup" : "Signin"}
                            </button> </>}
                        </form>


                        <div class="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                            <p> {isSignup ? "Do You've an account?" : "Don't have an account?"} </p>
                            <button class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300" onClick={handleSetAuthChange} > {isSignup ? "Signin" : "Signup"} </button>
                        </div>
                    </div>

                    {/*  image  */}
                    <div class="md:block hidden w-1/2">
                        <img class="rounded-2xl" src={img} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Auth;