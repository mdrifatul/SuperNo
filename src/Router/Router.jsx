import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Payment from "../Components/Payment/Payment";
import Account from "../Components/Profile/account";
import Order from "../Components/Profile/Order";
import Profile from "../Components/Profile/Profile";
import Signup from "../Components/Signup/Signup";
import Main from "../Layout/Main";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/payment/:id",
        element: <Payment></Payment>,
      },
    ],
  },
  {
    path: "/account",
    element: <Profile></Profile>,
    children:[
      {
        path: "/account",
        element: <Account></Account>,
      },
      {
        path: "order",
        element: <Order></Order>,
      }
    ]
  },

]);

export default Router;
