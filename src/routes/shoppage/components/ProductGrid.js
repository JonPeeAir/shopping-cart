import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {

  let [searchParams] = useSearchParams();

  useEffect(() => {
    let productGrid = document.getElementById("product-grid");
    if (productGrid && productGrid.scrollTop) {
      productGrid.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  return (
    <div
      id="product-grid"
      className="flex flex-wrap items-center justify-center w-3/4 h-full pt-10 overflow-scroll border-l gap-8"
    >
        { products
            .filter(product => {
              let category = searchParams.get("category");
              if (!category || category === "all") return true;
              return product.category === category;
            })
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))
        }

    </div>
  );

}

export default ProductGrid;

