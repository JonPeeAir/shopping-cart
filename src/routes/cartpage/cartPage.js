import EmptyCartView from './components/emptyCartView';
import dancingPepe from '../../assets/sad-dancing-pepe.gif';

const CartPage = ({ onCloseHandler, cart }) => {

  console.log(cart);

  return (
    <div className="absolute z-10 w-screen h-screen bg-black/75">

      <div className="absolute w-[55%] h-full grid place-content-center place-items-center text-white">
        <p>let me dance for your entertainment</p>
        <img src={dancingPepe} alt="sad pepe dancing" className="w-[35%]"/>
        <p>while you review your cart</p>
      </div>

      <div className="absolute h-full w-[45%] bg-white right-0 p-10 flex flex-col">
        <button
          className="w-full text-xl text-right hover:underline"
          onClick={onCloseHandler}
        >
          close
        </button>

        <p className="pl-10 mt-10 text-5xl">Your Cart</p>

        {cart.itemCount <= 0 && <EmptyCartView />}
      </div>

    </div>
  );

}

export default CartPage;
