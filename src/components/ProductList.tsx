/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { memo } from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types/Product';

interface Props {
  products: Product[];
}

export const ProductList: React.FC<Props> = memo(({ products }) => {
  return (
    <>
      {products?.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </>
  );
});

