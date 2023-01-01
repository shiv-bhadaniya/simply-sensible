import React, { useEffect } from 'react'
import { loadProductIntoRedux } from '../../slices/user/cart'
import { useDispatch } from 'react-redux';
import Hero1 from './Hero1'
import Hero2 from './Hero2'
import Hero3 from './Hero3'
import Hero4 from './Hero4'


const Home = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    let products = [];
    if (localStorage.getItem('products')) {
        products = JSON.parse(localStorage.getItem('products'));
    }

    dispatch(loadProductIntoRedux(products));
    
  })

  return (
    <div>
        <Hero1 />
        <Hero2 />
        <Hero3 />
        <Hero4 />
    </div>
  )
}

export default Home