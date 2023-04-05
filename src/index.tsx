import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import 'remixicon/fonts/remixicon.css';
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';

import { Provider } from 'react-redux';
import { store } from './redux/store';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #0a1d37;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Montserrat", sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    padding: 0;
    margin: 0;
  }

  p {
    color: var(--small-text-color);
    font-size: 1rem;
  }

  h1,
  h2 {
    font-size: var(--heading-fontSize);
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  img {
    width: 100%;
  }

  section {
    padding: 60px 0px;

    @media only screen and (max-width: 768px) {
      padding: 40px 0px;
    }
  }

  .section__title {
    color: var(--primary-color);
    font-weight: 600;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Products />} />
            <Route path="products" element={<Products />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </HashRouter >
    </Provider>
  </React.StrictMode>
);

