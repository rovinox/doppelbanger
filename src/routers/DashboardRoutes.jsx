import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "../components/NavBar/NavBar";
import ItemListCointainer from "../components/Item/ItemListCointainer";
import ItemDetailContainer from "../components/Item/ItemDetailContainer";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";

import LandingPage from "../components/landingPage/LandingPage";

const DashboardRoutes = () => (
  <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/category/:categoryId" element={<ItemListCointainer />} />
      <Route path="/search/:term" element={<ItemListCointainer />} />
      <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </>
);

export default DashboardRoutes;
