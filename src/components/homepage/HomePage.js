import { Link } from 'react-router-dom';

import Navbar from '../Navbar';
import dealerPepe from '../../assets/dealer-pepe.jpg';

const HomePage = () => {

  return (
    <div className="h-screen">

      <Navbar />

      <div className="flex items-center p-10 gap-10">
        <img src={dealerPepe} alt="pepe frog with shades" />
        <section className="grid place-items-center flex-1 text-center">
          <h1 className="text-5xl leading-loose">WELCOME TO THE PEPE SHOP</h1>
          <p>To be honest, I don't really know what I'm selling</p>
          <p>Nor why I even opened this shop in the first place</p>
          <p>All items in the shop are brought to you by "fakestoreapi.com"</p>
          <Link to="shop" className="block px-5 py-2 mt-10 text-xl rounded-full w-fit bg-amber-300 active:bg-amber-200">
            Check out the shop?
          </Link>
        </section>
      </div>

    </div>
  );

}

export default HomePage;

