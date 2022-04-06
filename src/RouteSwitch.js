import { BrowserRouter, Routes, Route  } from "react-router-dom";

import HomePage from "./components/homepage/HomePage";
import ShopPage from "./components/shoppage/ShopPage";

const RouteSwitch = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>

  );

};

export default RouteSwitch;
