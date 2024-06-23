import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server'
import AppRouters from './router/appRouters';
import { matchRoutes } from 'react-router-dom'
import routers from './router/routers';
export const render = (path, context = {}) => {
    return renderToString((
        <StaticRouter location={path} context={context}>
            <AppRouters />
        </StaticRouter>
    ));
}
export const matchRouters = (path) => {
    const matchedRoutes = matchRoutes(routers, path);
    return matchedRoutes;
}