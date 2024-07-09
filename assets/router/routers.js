import NotFound from './notFound'
import App from '@/src/app'
import Main from '@/src/devQCA'
export default [
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/dd',
        element: <App />,
    },
    {
        path: '*',
        element: <NotFound />
    }
];
