import AppLayout from '../../containers/AppLayout/AppLayout';
import HeroSection from '../../pages/HeroSection/HeroSection';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';

const routesConfig = [
    {
        path: '/',
        element: <HeroSection />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        element: <AppLayout />,
        children: [
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/profile',
                element: <h1>Perfil</h1>,
            },
        ],
    },
    { path: '*', element: <h1>NOT FOUND</h1> },
];

export default routesConfig;
