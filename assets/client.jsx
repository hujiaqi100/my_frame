import { createRoot } from 'react-dom/client';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRouters from './router/appRouters';
import defaultConfig from './config/default.config';
const Start = () => {
    return <BrowserRouter basename={defaultConfig.baseName}>
        <AppRouters />
    </BrowserRouter>
};
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Start />);