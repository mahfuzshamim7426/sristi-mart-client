import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import AddProduct from '../../Pages/AddProduct/AddProduct';
import Blog from '../../Pages/Blog/Blog';
import CategoryDetails from '../../Pages/CategoryDetails/CategoryDetails';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login/Login';
import SignUp from '../../Pages/Login/SignUp/SignUp';
import NotFoundPage from '../../Pages/NotFoundPage/NotFoundPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import SellerRoute from '../SellerRoute/SellerRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://sristi-mart-server.vercel.app/categories'),
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
                loader: () => fetch('https://sristi-mart-server.vercel.app/categories'),
                element: <PrivateRoute> <SellerRoute><AddProduct></AddProduct></SellerRoute></PrivateRoute>
            },
            {
                path: '/category/:id',
                element: <CategoryDetails></CategoryDetails>,
                loader: ({ params }) => fetch(`https://sristi-mart-server.vercel.app/products/category/${params.id}`)
            }

        ]
    },

])