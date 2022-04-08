import { useEffect, useState } from "react";

const ShopPage = () => {

  async function fetchProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    console.log(json);
    return json;
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(json => setProducts(json));
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-8">

      {products.map(product => {
        return(
          <div key={product.id} className="flex flex-col border-2 rounded-xl w-[350px] h-[550px] p-5">

            <div className="w-[300px] h-[300px] p-5 grid place-items-center">
              <img src={product.image} alt={product.title} className="max-w-full max-h-full"/>
            </div>
            <p>{product.title}</p>

            <p className="mt-auto text-xl font-bold">${product.price}</p>
            <p>Rating: {product.rating.rate} out of 5</p>
            <p className="mb-5">Rated by {product.rating.count} customers</p>
            <button className="w-full px-5 py-1 mb-1 text-xs rounded-full bg-amber-300 hover:bg-amber-300/90 active:bg-amber-300">Add to Cart</button>
            <button className="w-full px-5 py-1 text-xs rounded-full bg-amber-500 hover:bg-amber-500/90 active:bg-amber-500">Buy Now</button>

          </div>
        );
      })}

    </div>
  );

}

export default ShopPage;

