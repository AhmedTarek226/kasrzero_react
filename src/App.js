import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import PostAd from "./pages/post_ad_page/PostAd";
import ExchangeProducts from "./pages/exchange_products_page/ExchangeProducts";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home_page/Home";
import Category from "./pages/category_page/Category";
import Product from "./pages/product_page/Product";
import MyInfo from "./pages/myInfo_page/MyInfo";
import MyCart from "./pages/myCart_page/MyCart";
import MyWishlist from "./pages/myWishlist_page/MyWishlist";
import MyAds from "./pages/myAds_page/MyAds";
import Notfound from "./pages/Notfound";
import Guard from "./components/guard/Guard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/postAd" element={<PostAd />} />
        <Route path="/exchangeProducts" element={<ExchangeProducts />} />
        <Route
          path="/myInfo"
          element={
            <Guard>
              <MyInfo />
            </Guard>
          }
        />
        <Route
          path="/myAds"
          element={
            <Guard>
              <MyAds />
            </Guard>
          }
        />
        <Route
          path="/myWishlist"
          element={
            <Guard>
              <MyWishlist />
            </Guard>
          }
        />
        <Route
          path="/myCart"
          element={
            <Guard>
              <MyCart />
            </Guard>
          }
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
