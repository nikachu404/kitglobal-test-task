import React, { useEffect } from 'react';

import { CommonSection } from '../components/CommonSection';
import { Container, Row } from 'reactstrap';
import { ProductList } from '../components/ProductList';

import { fetchProductsStart } from '../redux/features/productsSlice';
import { useAppSelector, useAppDispatch } from '../redux/hooks';

export const Products: React.FC = () => {
  const { products } = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

  return (
    <>
      <CommonSection title='Products' />

      <Container>
        <Row>
          {products && <ProductList products={products} />}
        </Row>
      </Container>
    </>
  );
};