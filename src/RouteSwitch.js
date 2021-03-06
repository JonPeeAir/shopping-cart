import { BrowserRouter, Routes, Route  } from "react-router-dom";

import App from "./App";
import HomePage from "./routes/HomePage";
import ShopPage from "./routes/shoppage/ShopPage";
import InvalidPage from "./routes/InvalidPage";

const RouteSwitch = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
        </Route>

        <Route path="*" element={<InvalidPage />} />
      </Routes>
    </BrowserRouter>
  );

};

export default RouteSwitch;
