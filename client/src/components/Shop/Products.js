import { useEffect } from "react"
import { fetchAllProducts, allProductSelector } from "../../slices/user/allProducts"
import { useDispatch, useSelector } from "react-redux";
import loadingAnimation from "../../assets/loading.gif";

const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  // More products...
]

const Products = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);


  var {data, loading, hasError} = useSelector(allProductSelector);



  const renderProducts = () => {

    if(loading) return <> <img src={loadingAnimation} alt="Loading..." /> </>
    if(hasError) return <h1>oops!! some thing went wrong. please trye afteer some times.</h1>

    return (
      <>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {data.map((product) => (
                <a key={product._id} href={product.href} className="group">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </a>
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