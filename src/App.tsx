import React from 'react';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';

const AppWrapper = styled.div`
  width: 100%;
`;

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Header />
      <Outlet />
    </AppWrapper>

  );
};

export default App;
