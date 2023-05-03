import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import SignUp from "../../pages/Signup/Signup";
import Blog from "../../pages/Blog/Blog";
import Details from "../../pages/Details/Details";
import Login from "../../pages/Login/Login";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/details',
                element: <Details></Details>
            }
        ]
        
    }
]);

export default router;