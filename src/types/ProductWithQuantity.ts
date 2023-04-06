import { Product } from './Product';

export interface ProductWithQuantity extends Product {
  quantity: number;
}