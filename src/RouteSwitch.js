import { BrowserRouter, Routes, Route  } from "react-router-dom";

import App from "./App";
import HomePage from "./routes/HomePage";
import ShopPage from "./routes/ShopPage";

const RouteSwitch = () => {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />}>
          <Route path="" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
        </Route>

      </Routes>
    </BrowserRouter>

  );

};

export default RouteSwitch;
