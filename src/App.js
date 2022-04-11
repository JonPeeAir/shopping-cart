import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DynamicLink from './components/DynamicLink';
import logo from './assets/pepe.png';


const App = () => {

  const [cart, setCart] = useState({items: {}, itemCount: 0, totalPrice: 0});

  return (
    <div className="flex flex-col h-screen">

      {/* Navbar component */}
      <header className="sticky top-0 flex items-center w-full p-5 bg-white gap-4 drop-shadow-xl">
        <img src={logo} alt="pepe the frog logo" className="w-[100px]"/>
        <h1 className="text-5xl cursor-default select-none">pepe's SHOP</h1>
        <nav className="ml-auto mr-8">
          <ul className="flex items-center justify-center gap-8">
            <DynamicLink to="/" className="text-4xl hover:underline">Home</DynamicLink>
            <DynamicLink to="/shop" className="text-4xl hover:underline">Shop</DynamicLink>
            <button className="text-4xl">
              <span className="hover:underline">Cart</span>
              {cart.itemCount > 0 && <sub> {cart.itemCount}</sub>}
            </button>
          </ul>
        </nav>
      </header>

      {/* This is where the pages will be displayed */}
      <Outlet context={[cart, setCart]}/>

    </div>
  );

}

export default App;

