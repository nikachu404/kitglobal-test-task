import React from 'react';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppWrapper = styled.div`
  width: 100%;
`;

const App: React.FC = () => {
  return (
    <AppWrapper>
      <ToastContainer
        theme="light"
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover={false}
      />

      <Header />
      <Outlet />
    </AppWrapper>

  );
};

export default App;
