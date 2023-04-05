import React, { useEffect, useState } from 'react';

import { CommonSection } from '../components/CommonSection';
import { Container, Row } from 'reactstrap';
import { ProductList } from '../components/ProductList';
// import products from '../assets/data/products';
// import { fetchProducts } from '../api/fetch';
import { Product } from '../types/Product';

export const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  console.log(products);

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/642d7741ebd26539d0a50878')
      .then(data => data.json())
      .then(products => setProducts(products.record))
      .catch(error => error);
  }, []);

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
