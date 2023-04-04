import React from 'react';

import { CommonSection } from '../components/CommonSection';
import { Container, Row } from 'reactstrap';
import { ProductList } from '../components/ProductList';
import products from '../assets/data/products';

export const Products: React.FC = () => {
  return (
    <>
      <CommonSection title='Products' />

      <Container>
        <Row>
          <ProductList products={products} />
        </Row>
      </Container>
    </>
  );
};
