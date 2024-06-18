import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

// Auth
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import AdminRoute from "./pages/Admin/AdminRoute";
import Profile from "./pages/User/Profile";
import UserList from "./pages/Admin/UserList";

import CategoryList from "./pages/Admin/CategoryList";

import ProductList from "./pages/Admin/ProductList";
import AllProducts from "./pages/Admin/AllProducts";
import ProductUpdate from "./pages/Admin/ProductUpdate";

import Home from "./pages/Home.jsx";
import Favorites from "./pages/Products/Favorites.jsx";
import ProductDetails from "./pages/Products/ProductDetails.jsx";

import Cart from "./pages/Cart.jsx";
import Shop from "./pages/Shop.jsx";

import Shipping from "./pages/Orders/Shipping.jsx";
import PlaceOrder from "./pages/Orders/PlaceOrder.jsx";
import Order from "./pages/Orders/Order.jsx";
import OrderList from "./pages/Admin/OrderList.jsx";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import ProductCarousel from "./pages/Products/ProductCarousel.jsx";
import DSLR_1 from "./Images/DSLR/DSLR-1.png";
import DSLR_2 from "./Images/DSLR/DSLR-2.png";
import DSLR_3 from "./Images/DSLR/DSLR-3.png";
import Sketchers_1 from "./Images/Sketchers/Sketchers-1.png";
import Sketchers_2 from "./Images/Sketchers/Sketchers-2.png";
import Sketchers_3 from "./Images/Sketchers/Sketchers-3.png";
import Ipad_1 from "./Images/Ipad/Ipad-1.png";
import Ipad_2 from "./Images/Ipad/Ipad-2.png";
import Ipad_3 from "./Images/Ipad/Ipad-3.png";
import MacbookPro_1 from "./Images/Macbook Pro/Macbook Pro-1.png";
import MacbookPro_2 from "./Images/Macbook Pro/Macbook Pro-2.png";
import MacbookPro_3 from "./Images/Macbook Pro/Macbook Pro-3.png";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />}>
        <Route index element={<ProductCarousel src1={DSLR_1} src2={DSLR_2} src3={DSLR_3} title='DSLR' price={159} description="Best of canon.." brand='Canon' rating={5} quantity={5} stock={3}/>} />
        <Route path='productCarousel1' element={<ProductCarousel src1={DSLR_1} src2={DSLR_2} src3={DSLR_3} title='DSLR' price={159} description="Best of canon.." brand='Canon' rating={5} quantity={5} stock={3}/>}/>
        <Route path='productCarousel2' element={<ProductCarousel src1={Sketchers_1} src2={Sketchers_2} src3={Sketchers_3} title='Shoes' price={99} description="From Sketchers.." brand='Sketchers' rating={4} quantity={6} stock={2}/>}/>
        <Route path='productCarousel3' element={<ProductCarousel src1={Ipad_1} src2={Ipad_2} src3={Ipad_3} title='Ipad' price={543} description="Best tablets ever made.." brand='Apple' rating={5} quantity={4} stock={6}/>} />
        <Route path='productCarousel4' element={<ProductCarousel src1={MacbookPro_1} src2={MacbookPro_2} src3={MacbookPro_3} title='Macbook Pro' price={890} description="High performance.." brand='Apple' rating={5} quantity={5} stock={3}/>} />
      </Route>
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shop" element={<Shop />} />

      {/* Registered users */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/order/:id" element={<Order />} />
      </Route>

      <Route path="/admin" element={<AdminRoute />}>
        <Route path="userlist" element={<UserList />} />
        <Route path="categorylist" element={<CategoryList />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="allproductslist" element={<AllProducts />} />
        <Route path="productlist/:pageNumber" element={<ProductList />} />
        <Route path="product/update/:_id" element={<ProductUpdate />} />
        <Route path="orderlist" element={<OrderList />} />
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PayPalScriptProvider>
      <RouterProvider router={router} />
    </PayPalScriptProvider>
  </Provider>
);
