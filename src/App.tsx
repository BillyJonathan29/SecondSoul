import { CartProvider } from "./hooks/cartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ChatbotButton from "./component/ModalChat";
import Shop from "./pages/Shop";

import Profile from "./pages/Profile";
import ProductDetail from "./pages/ProductDetail";
import SwapSell from "./pages/SwapSell";
import CheckOutPage from "./pages/CheckOutPage";

function App() {
  return (
    <>
      <Router>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop-fashion" element={<Shop />} />
            <Route path="/shop-fashion/:slug" element={<ProductDetail />} />
            <Route path="/flip-sell" element={<SwapSell />} />
            <Route path="/check-out" element={<CheckOutPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
        <ChatbotButton />
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
