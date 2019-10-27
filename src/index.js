import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import App from './components/App';

ReactDOM.render(
    <Suspense fallback="loading">
        <App />
    </Suspense>,
    document.getElementById('root'),
);
