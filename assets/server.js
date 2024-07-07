import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server'
import AppRouters from './router/appRouters';
import { matchRoutes } from 'react-router-dom'
import routers from './router/routers';
import defaultConfig from './config/default.config';
import './styles.less'
import { StyleProvider } from '@ant-design/cssinjs';
import { load } from './componentsConfig'
import 'h_qca/rollup.build.css'
const { baseName } = defaultConfig
load()
const render = (path, context = {}, cache) => {
    return renderToString((
        <StaticRouter basename={baseName} location={path} >
            <StyleProvider cache={cache}>
                <AppRouters context={context} />
            </StyleProvider>
        </StaticRouter>
    ));
}
const matchRouters = (path) => {
    const matchedRoutes = matchRoutes(routers, path, baseName);
    return matchedRoutes;
}
export { render, matchRouters };