import {useState, useEffect } from 'react'
import Products from './Products'
import { useDispatch, useSelector } from 'react-redux'
import { allProductSelector, fetchFilterProducts } from '../../slices/user/allProducts'



export default function Shop() {

  const dispatch = useDispatch();

  var { data } = useSelector(allProductSelector);

  var categorieSet = new Set([])

  data?.map((item) => {
    categorieSet.add(item.categorie);
  })

  let categorieArr = Array.from(categorieSet);
  categorieArr.unshift("all");

  const handleFilter = (item) => {
    dispatch(fetchFilterProducts(item))
  }

  return (
    <div className="bg-white">
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid  gap-x-8 gap-y-10 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-1">
              <div className="">
                <div className='font-serif text-3xl font-extrabold tracking-wide mb-4 text-amber-600'>
                  Categories
                </div>
               
                {categorieArr?.map((item) => {
                  return (
                    <div onClick={() => {
                      handleFilter(item)
                    }} className=' ml-4 font-mono  text-xl font-medium tracking-wide leading-relaxed hover:font-semibold hover:underline hover:cursor-pointer hover:text-sky-500'> {item} </div>
                  )
                })}
              </div>

              <div className="lg:col-span-3 md:col-span-2 sm:col-span-1">
                <Products />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div >
  )
}
