import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WishListProvider from './Context/WishListContext';
import BasketProvider from './Context/BasketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BasketProvider>
    <WishListProvider>
    <App />
    </WishListProvider>
    </BasketProvider>
  </React.StrictMode>
);