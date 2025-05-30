import {createBrowserRouter,} from "react-router";
import MainLayout from "../Main/MainLayout";
import Home from "../Pages/Home";
import Booking from "../Pages/Booking";
import Blogs from "../Pages/Blogs";
import ContactUs from "../Pages/ContactUs";
import DoctorsDetails from "../Pages/DoctorsDetails";
import ErrorPage from "../Pages/ErrorPage";
import ErrorLayout from "../Main/ErrorLayout";

 export const router = createBrowserRouter([ 
  {
    path: "/",
    Component:MainLayout,
    children:[
        {
            index: true,
            loader: () => fetch('../doctorsData.json'),
            element:<Home></Home>
        },
        {
            path:'/booking',
            element:<Booking></Booking>
        },
        {
            path:'/blogs',
            loader: () => fetch('../questionData.json'),
            element:<Blogs></Blogs>
        },
        {
            path:'/contactus',
            element:<ContactUs></ContactUs>
        },
        {
            path:'/doctorsdetails/:id',
            loader: () => fetch('../doctorsData.json'),
            Component:DoctorsDetails
        }
    ]
  },
  {
    path:'*',
    Component:ErrorLayout
  }
]);