import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TicTacToeProvider } from './TicTacToeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <TicTacToeProvider>
     <App />
    </TicTacToeProvider>
  </React.StrictMode>

);


