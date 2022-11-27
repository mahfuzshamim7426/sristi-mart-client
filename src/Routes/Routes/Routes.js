import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Home from '../../Pages/Home/Home';
// import Blog from '../../Pages/Blog/Blog';
// import Courses from '../../Pages/Courses/Courses';
// import Faq from '../../Pages/Faq/Faq';
// import Home from '../../Pages/Home/Home';
// import Login from '../../Pages/Login/Login/Login';
// import SignUp from '../../Pages/Login/SignUp/SignUp';
// import NotFoundPage from '../../Pages/NotFoundPage/NotFoundPage';
// import PremiumAccess from '../../Pages/PremiumAccess/PremiumAccess';
// import Privacy from '../../Pages/Privacy/Privacy';
// import SingleCourse from '../../Pages/Shared/SignleCourse/SingleCourse';
// import Terms from '../../Pages/Terms/Terms';
// import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                // loader: () => fetch('https://bizon-learning-server.vercel.app/courses'),
                element: <Home></Home>
            },
            // {
            //     path: 'login',
            //     element: <Login></Login>
            // },
            // {
            //     path: 'signup',
            //     element: <SignUp></SignUp>
            // },
            // {
            //     path: 'courses',
            //     // loader: () => fetch('https://bizon-learning-server.vercel.app/courses'),
            //     element: <Courses></Courses>
            // },
            // {
            //     path: 'course/:course_id',
            //     loader: ({ params }) => fetch(`https://bizon-learning-server.vercel.app/courses/${params.course_id}`),
            //     element: <SingleCourse></SingleCourse>
            // },
            // {
            //     path: 'premium/:course_id',
            //     loader: ({ params }) => fetch(`https://bizon-learning-server.vercel.app/courses/${params.course_id}`),
            //     element: <PrivateRoute><PremiumAccess></PremiumAccess></PrivateRoute>
            // },
            // {
            //     path: 'blog',
            //     element: <Blog></Blog>
            // },
            // {
            //     path: 'faq',
            //     element: <Faq></Faq>
            // },
            // {
            //     path: 'terms',
            //     element: <Terms></Terms>
            // },
            // {
            //     path: 'privacy',
            //     element: <Privacy></Privacy>
            // },
            // {
            //     path: '*',
            //     element: <NotFoundPage></NotFoundPage>
            // }

        ]
    },

])