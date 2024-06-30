import App from "@/src/App";
import Login from "@/src/Login";
import NotFound from './notFound'
export default [
    {
        path: '/',
        element: <Login />,
        children: [
            {
                path: `/dd`,
                element: <App />,
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
];
