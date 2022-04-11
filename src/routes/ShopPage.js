import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import dancingPepe from "../assets/sad-dancing-pepe.gif";

const ShopPage = () => {

  async function fetchProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    return json;
  }

  async function fetchCategories() {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    const json = await response.json();
    return json;
  }

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetchProducts().then(json => setProducts(json));
    fetchCategories().then(json => setCategories(json));
  }, []);

  return (
    <>

      { // Loading screen component
        products.length === 0 &&
          <div className="flex flex-col items-center justify-center flex-1 border">
            <p>** are you entertained yet? **</p>
            <img src={dancingPepe} alt="sad dancing pepe" className="h-[350px]" />
            <p>Loading Shop...</p>
          </div>
      }

      { // Main shop page component
        products.length > 0 &&
          <div className="flex flex-1 overflow-scroll">

            <div className="w-1/4 h-full pt-10">
              <p className="text-3xl leading-loose text-center">Categories</p>
              <nav>
                {
                  categories.map(category => (
                    <Link to={`?category=${category}`} className="block text-xl text-center" key={category}>
                      {category}
                    </Link>
                  ))
                }
              </nav>
            </div>

            <div id="product-grid" className="flex flex-wrap items-center justify-center w-3/4 h-full pt-10 overflow-scroll border-l gap-8">

                {
                  products
                    .filter(product => {
                      let category = searchParams.get("category");
                      if (!category) return true;
                      return product.category === category;
                    })
                    .map(product => {
                    return(
                      <div key={product.id} className="flex flex-col border-2 rounded-xl w-[350px] h-[575px] p-5">
                        <div className="w-[300px] h-[300px] p-5 grid place-items-center">
                          <img src={product.image} alt={product.title} className="max-w-full max-h-full"/>
                        </div>
                        <p>{product.title}</p>

                        <p className="mt-auto text-xl font-bold">${product.price}</p>
                        <p>Rating: {product.rating.rate} out of 5</p>
                        <p className="mb-5">Rated by {product.rating.count} customers</p>
                        <button className="w-full px-5 py-1 mb-1 text-xs rounded bg-amber-300 hover:bg-amber-300/90 active:bg-amber-300">Add to Cart</button>
                        <button className="w-full px-5 py-1 text-xs rounded bg-amber-500 hover:bg-amber-500/90 active:bg-amber-500">Buy Now</button>
                      </div>
                    );
                  })
                }

            </div>
        </div>
      }

    </>
  );

}

export default ShopPage;

