import ReactDOM from 'react-dom/client';
import configureProductsStore from './hooks-store/products-store';
import configureCounterStore from './hooks-store/counter-store';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

configureProductsStore();
configureCounterStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
