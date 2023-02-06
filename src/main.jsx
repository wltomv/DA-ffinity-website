import React from 'react';
import ReactDOM from 'react-dom/client';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

import App from './App';
import './index.css';

function getLibrary(provider) {
    const library = new Web3Provider(provider);
    return library;
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Web3ReactProvider getLibrary={getLibrary}>
            <App />
        </Web3ReactProvider>
    </React.StrictMode>
);
