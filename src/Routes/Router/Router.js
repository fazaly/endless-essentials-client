import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Home/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyOrders from "../../Dashboard/MyOrders/MyOrders";
import AllUsers from "../../Dashboard/AllUsers/AllUsers";
import AddProduct from "../../Dashboard/AddProduct/AddProduct";
import Payment from '../../Dashboard/Dashboard/Payment/Payment';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/category/:name',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.name}`)
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/dashboard/myOrder',
                element: <MyOrders></MyOrders>,
            },
            {
                path: '/dashboard/allUsers',
                element: <AllUsers></AllUsers>,
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>,
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]
    }
]);

export default router;