import React from '../node_modules/@types/react';
import ReactDOM from '../node_modules/@types/react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.unregister();
