import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import CategoryList from "./components/CategoryList";
import ProductGrid from "./components/ProductGrid";

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

  useEffect(() => {
    fetchProducts().then(json => setProducts(json));
    fetchCategories().then(json => setCategories(json));
  }, []);

  return (
    <>
      { products.length === 0 && <LoadingScreen /> }

      { products.length > 0 &&
        <div className="flex flex-1 overflow-scroll">
          <CategoryList categories={categories} />
          <ProductGrid products={products} />
        </div>
      }
    </>
  );

}

export default ShopPage;

