import React from 'react';
import styled from 'styled-components';
import { Container } from 'reactstrap';
import image from '../assets/images/common-section-bg.jpg';

interface Props {
  title: string;
}

const CommonSectionWrapper = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.562), rgba(0, 0, 0, 0.562)),
    url(${image}) no-repeat center center;
  background-size: cover;
  padding: 100px 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fff;
    font-weight: 600;
  }

  @media only screen and (max-width: 768px) {
    padding: 70px 0px;

    h1 {
      font-size: 1.4rem;
    }
  }
`;

export const CommonSection: React.FC<Props> = ({ title }) => {
  return (
    <CommonSectionWrapper>
      <Container className="text-center">
        <h1>{title}</h1>
      </Container>
    </CommonSectionWrapper>
  );
};
