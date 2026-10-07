import { createBrowserRouter } from "react-router-dom";

import UserWrapper from "../layouts/Userlayouts/UserWrapper";

import Home from "../pages/user/Home/Home";
import About from "../pages/user/About/About";
import Contact from "../pages/user/contact/Contact";

import FurnitureList from "../pages/user/Furniture/FurnitureList";
import FurnitureDetails from "../pages/user/Furniture/FurnitureDetails";

import Wishlist from "../pages/user/Wishlist";
import Cart from "../pages/user/Cart";
import Checkout from "../pages/user/Checkout";

import MyOrders from "../pages/user/MyOrders";
import OrderDetails from "../pages/user/OrderDetails";

import MyProfile from "../pages/user/MyProfile";
import Reviews from "../pages/user/Reviews";
import SaveAddresses from "../pages/user/SaveAddresses";

import NotFound from "../pages/user/NotFound";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <UserWrapper />,

    children: [
      // Home
      {
        path: "",
        element: <Home />,
      },

      // About
      {
        path: "about",
        element: <About />,
      },

      // Contact
      {
        path: "contact",
        element: <Contact />,
      },

      // Furniture
      {
        path: "furniture",
        element: <FurnitureList />,
      },

      // Furniture Details
      {
        path: "furniture/:id",
        element: <FurnitureDetails />,
      },

      // Wishlist
      {
        path: "wishlist",
        element: <Wishlist />,
      },

      // Cart
      {
        path: "cart",
        element: <Cart />,
      },

      // Checkout
      {
        path: "checkout",
        element: <Checkout />,
      },

      // Orders
      {
        path: "orders",
        element: <MyOrders />,
      },

      // Order Details
      {
        path: "orders/:id",
        element: <OrderDetails />,
      },

      // Profile
      {
        path: "profile",
        element: <MyProfile />,
      },

      // Reviews
      {
        path: "reviews",
        element: <Reviews />,
      },

      // Addresses
      {
        path: "addresses",
        element: <SaveAddresses />,
      },
    ],
  },

  // Not Found
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Routes;
