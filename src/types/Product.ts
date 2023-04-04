import { Review } from './Review';

export interface Product {
  id: string;
  productName: string;
  imgUrl: string;
  category: string;
  price: number;
  shortDesc: string;
  description: string;
  reviews: Review[];
  avgRating: number;
}