import React from 'react';

import { CommonSection } from '../components/CommonSection';
import { Col, Row, Container } from 'reactstrap';
import { motion } from 'framer-motion';
// import { Product } from '../types/Product';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import { removeAllProducts, addProduct, removeProduct, ProductWithQuantity } from '../redux/features/cartSlice';
import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  th, td {
    color: var(--primary-color);
    text-align: left;
    padding: 8px;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

const DeleteButton = styled(motion.i)`
  font-size: 1.5rem;
  cursor: pointer;
`;

const CartTitle = styled(CommonSection)`
  margin-top: 10px;
`;

const EmptyCartTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
`;

const CartWrapper = styled(Container)`
  margin-top: 20px;
`;

const Subtotal = styled.h6`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  margin-bottom: 0;
  span {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const ReducersWrapper = styled.span`
  font-size: 1.2rem;
  margin: 0 5px;
`;

const StyledTd = styled.td`
`;

export const Cart: React.FC = () => {
  const { products, total } = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  const deleteAllProducts = (itemToRemove: ProductWithQuantity) => {
    dispatch(removeAllProducts(itemToRemove));
  };

  const deleteProduct = (itemToRemove: ProductWithQuantity) => {
    dispatch(removeProduct(itemToRemove));
  };

  const addProductUnit = (itemToRemove: ProductWithQuantity) => {
    dispatch(addProduct(itemToRemove));
  };

  return (
    <>
      <CartTitle title='Cart' />
      <CartWrapper>
        <Row>
          <Col lg="9">
            {products.length === 0 ? (
              <EmptyCartTitle>No item added to the cart</EmptyCartTitle>
            ) : (
              <Table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th className="text-center">Qty</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <Image src={item.imgUrl} alt="" />
                      </td>
                      <td>{item.productName}</td>
                      <td>{`${item.price}`}</td>
                      <StyledTd>
                        <ReducersWrapper>
                          <i className="ri-indeterminate-circle-line" onClick={() => deleteProduct(item)} />
                        </ReducersWrapper>
                        {item.quantity}
                        <ReducersWrapper>
                          <i className="ri-add-circle-line" onClick={() => addProductUnit(item)} />
                        </ReducersWrapper>
                      </StyledTd>
                      <td>
                        <DeleteButton
                          whileTap={{ scale: 1.2 }}
                          onClick={() => deleteAllProducts(item)}
                          className="ri-delete-bin-line"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Col>
          <Col lg="3">
            <div>
              <Subtotal>
                Subtotal<span>${total}</span>
              </Subtotal>
            </div>
          </Col>
        </Row>
      </CartWrapper>
    </>
  );
};

