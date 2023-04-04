import React from 'react';
import { CommonSection } from '../components/CommonSection';
import { ProductCard } from '../components/ProductCard';
import { Container } from 'reactstrap';

const testProduct = {
  id: '01',
  productName: 'Stone and Beam Westview ',
  imgUrl: 'https://cdna.artstation.com/p/assets/images/images/059/549/950/large/anato-finnstark-anato-finnstark-the-blade-of-miquella-by-anatofinnstark-df49r6q-fullview.jpg?1676625541',
  category: 'sofa',
  price: 193,
  shortDesc:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!',
  reviews: [
    {
      rating: 4.7,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ],
  avgRating: 4.5,
};

export const Products: React.FC = () => {
  return (
    <>
      <CommonSection title='Products' />

      <Container>
        <ProductCard item={testProduct} />
      </Container>
    </>
  );
};
