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

export const GlobalStyle = createGlobalStyle`
  :root {
    --card-bg-02: #d6e5fb;
    --card-bg-03: #ceebe9;
    --card-bg-04: #e2f2b2;
    --primary-color: #0a1d37;
    --hero-bg: #d6e5fb;
    --heading-fontSize: 2rem;
    --small-text-color: #999;
    --heading-text-color: #0a1d37;
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
  </React.StrictMode>
);

