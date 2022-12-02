import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import AddProduct from '../../Pages/AddProduct/AddProduct';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login/Login';
import SignUp from '../../Pages/Login/SignUp/SignUp';
import NotFoundPage from '../../Pages/NotFoundPage/NotFoundPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/categories'),
                element: <Home></Home>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },

            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: '*',
                element: <NotFoundPage></NotFoundPage>
            },
            {
                path: 'add-product',
                loader: () => fetch('http://localhost:5000/categories'),
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },

        ]
    },

])