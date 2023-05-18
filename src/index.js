import { createRoot } from 'react-dom/client';
import App from './App';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);

    
    <React.StrictMode>
        <BrowserRouter>
         <App />
        </BrowserRouter>
       
        </React.StrictMode>