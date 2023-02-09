import { createHashRouter, RouterProvider } from 'react-router-dom';
import routesConfig from './config/routes';
import './App.scss';

function App() {
    const router = createHashRouter(routesConfig);

    return <RouterProvider router={router} />;
}

export default App;
