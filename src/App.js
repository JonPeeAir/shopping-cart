import { Outlet, Link } from 'react-router-dom';

import logo from './assets/pepe.png';

const App = () => {

  return (
    <div className="h-screen pt-44">

      <header className="fixed top-0 flex items-center w-full p-5 bg-white gap-4 drop-shadow-xl">
        <img src={logo} alt="pepe the frog logo" className="w-[100px]"/>

        <h1 className="text-5xl cursor-default select-none">pepe's SHOP</h1>

        <nav className="ml-auto mr-8">
          <ul className="flex items-center justify-center gap-8">
            <Link to="/" className="text-4xl hover:underline">Home</Link>
            <Link to="/shop" className="text-4xl hover:underline">Shop</Link>
            <button className="text-4xl hover:underline">Cart</button>
          </ul>
        </nav>
      </header>

      <Outlet />

    </div>
  );

}

export default App;

