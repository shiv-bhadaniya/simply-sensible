import { useEffect, createContext, useContext } from "react"
import { fetchAllProducts, allProductSelector } from "../../slices/user/allProducts"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

const Products = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  var { data, loading, hasError, filterData } = useSelector(allProductSelector);
  data = filterData
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);


  const renderProducts = () => {

    if (loading) return  <div class="grid place-items-center h-screen"> <PacmanLoader color="#36d7b7" /> </div>
    if (hasError) return <h1>oops!! some thing went wrong. please try afteer some times.</h1>
    if (!loading && data.length == 0) return <h1>No product avabile.</h1>


    return (
      <>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {data.map((product) => (
                <div className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={product.photo}
                      alt={`${product.name}-photo`}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <Link key={product._id} to={`/shop/product-details/${product._id}`} >
                    <h3 className="mt-4 text-sm text-gray-700">{product.name} | {product.weight}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">{product.price} Rs.</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }


  return (
    <section>
      {renderProducts()}
    </section>
  )
}


export default Products;