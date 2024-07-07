import { createRoot, hydrateRoot } from 'react-dom/client';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRouters from './router/appRouters';
import defaultConfig from './config/default.config';
import { load } from './componentsConfig'
import './styles.less'
import 'h_qca/rollup.build.css'
load()
const Start = () => {
    return <BrowserRouter basename={defaultConfig.baseName}>
        <AppRouters context={window.__data__} />
    </BrowserRouter>
};
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Start />);