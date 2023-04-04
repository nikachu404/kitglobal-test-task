import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../types/Product';

interface Props {
  products: Product[];
}

export const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <>
      {products?.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </>
  );
};

