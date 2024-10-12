import App from "./App";
import Shop from "./components/Shop";
import ErrorPage from "./components/ErrorPage";

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },

    {
        path: 'shop',
        element: <Shop />,
    }
]

export default routes;

