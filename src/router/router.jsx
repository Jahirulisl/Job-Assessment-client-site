import {
  createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../pages/Home/Home";
import Signin from "../pages/SignIN/Signin";
import Register from "../pages/Register/Register";

// for create router 

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route not found mr jahir</h2>,
    children:[
       {
        path:'/',
        element:<Home></Home>,
       },
       {
        path:'signin',
        element:<Signin></Signin>,
       },
       {
        path:'register',
        element:<Register></Register>,
       },
    ]
  },
]);
export default router;