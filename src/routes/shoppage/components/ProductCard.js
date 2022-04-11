import { useOutletContext } from "react-router-dom";

const ProductCard = ({ product }) => {

  // This context is taken from App.js
  const [ cart, setCart ] = useOutletContext();

  function addToCart() {

    setCart(prevCart => {
      const newCart = JSON.parse(JSON.stringify(prevCart));
      newCart.itemCount++;
      newCart.totalPrice += product.price;

      // Ensure totalPrice has two decimal places max
      newCart.totalPrice = +(newCart.totalPrice.toFixed(2));

      if (!newCart.items[product.id]) {
        newCart.items[product.id] = {
          name: product.title,
          quantity: 1,
          price: product.price,
          totalPrice: product.price
        };

      } else {
        const cartItem = newCart.items[product.id];
        cartItem.quantity++;
        cartItem.totalPrice += cartItem.price;

        // Ensure totalPrice has two decimal places max
        cartItem.totalPrice = +(cartItem.totalPrice.toFixed(2));
      }

      console.log(newCart);
      return newCart;
    })

  }

  function buyNow() {
    addToCart();
  }

  return (
    <div key={product.id} className="flex flex-col border-2 rounded-xl w-[350px] h-[575px] p-5">
      <div className="w-[300px] h-[300px] p-5 grid place-items-center">
        <img src={product.image} alt={product.title} className="max-w-full max-h-full"/>
      </div>
      <p>{product.title}</p>

      <p className="mt-auto text-xl font-bold">${product.price}</p>
      <p>Rating: {product.rating.rate} out of 5</p>
      <p className="mb-5">Rated by {product.rating.count} customers</p>
      <button
        onClick={addToCart}
        className="w-full px-5 py-1 mb-1 text-xs rounded bg-amber-300 hover:bg-amber-300/90 active:bg-amber-300"
      >
        Add to Cart
      </button>
      <button
        onClick={buyNow}
        className="w-full px-5 py-1 text-xs rounded bg-amber-500 hover:bg-amber-500/90 active:bg-amber-500"
      >
        Buy Now
      </button>
    </div>
  );

}

export default ProductCard;
