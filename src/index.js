import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import Routers from './components/Routers';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    {/* <Routers/> */}
    <App />
    </BrowserRouter>
);  