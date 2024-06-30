import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server'
import AppRouters from './router/appRouters';
import React from 'react'
import { matchRoutes } from 'react-router-dom'
import routers from './router/routers';
import defaultConfig from './config/default.config';
const { baseName } = defaultConfig
const render = (path, context = {}) => {
    return renderToString((
        <StaticRouter basename={baseName} location={path} context={context}>
            <AppRouters />
        </StaticRouter>
    ));
}
const matchRouters = (path) => {
    const matchedRoutes = matchRoutes(routers, path);
    return matchedRoutes;
}
export { render, matchRouters };