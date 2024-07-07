import NotFound from './notFound'
import App from '@/src/app.tsx'
import Main from '@/src/devQCA'
export default [
    {
        path: '/',
        element: <Main />,
        loadData: Main.loadData
        // children: [
        //     {
        //         path: `/dd`,
        //         element: <App />,
        //     }
        // ]
    },
    {
        path: '*',
        element: <NotFound />
    }
];
