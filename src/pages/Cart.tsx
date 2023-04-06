import React, { useState, useEffect } from 'react';

import { CommonSection } from '../components/CommonSection';
import { Col, Row, Container, Input } from 'reactstrap';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import { removeAllProducts, addProduct, removeProduct, setQuantity } from '../redux/features/cartSlice';
import styled from 'styled-components';
import { ProductWithQuantity } from '../types/ProductWithQuantity';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  th, td {
    color: var(--primary-color);
    text-align: center;

    @media only screen and (max-width: 400px) { 
      font-size: 0.6rem; 
    }
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

const DeleteButton = styled.i`
  font-size: 1.5rem;
  cursor: pointer;

  @media only screen and (max-width: 400px) { 
    font-size: 1rem; 
  }
`;

const CartTitle = styled(CommonSection)`
  margin-top: 10px;
`;

const EmptyCartTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
`;

const CartWrapper = styled(Container)`
  height: 100%;
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

  @media (max-width: 992px) {
      margin-top: 10px;
  }
`;

const ReducersWrapper = styled.span`
  font-size: 1.2rem;
  margin: 0 5px;

  @media only screen and (max-width: 400px) { 
    font-size: 1rem; 
  }
`;

const StyledInput = styled(Input)`
    display: inline;
    text-align: center;
    width: 25%;
    padding: 1px;
`;

export const Cart: React.FC = () => {
  const { products, total } = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();
  const [productsQuantity, setProductsQuantity] = useState<{ [key: string]: number }>({});

  const handleQuantityChange = (itemId: string, value: number) => {
    const newQuantities = { ...productsQuantity, [itemId]: value };
    setProductsQuantity(newQuantities);
    dispatch(setQuantity({ id: itemId, quantity: value }));
  };

  const addProductUnit = (itemToAdd: ProductWithQuantity) => {
    const newQuantities = { ...productsQuantity, [itemToAdd.id]: (productsQuantity[itemToAdd.id] || 0) + 1 };
    setProductsQuantity(newQuantities);
    dispatch(
      addProduct({
        ...itemToAdd,
        quantity: newQuantities[itemToAdd.id] || 0,
      })
    );
  };

  const deleteProduct = (itemToRemove: ProductWithQuantity) => {
    const newQuantities = { ...productsQuantity };
    delete newQuantities[itemToRemove.id];
    setProductsQuantity(newQuantities);
    dispatch(
      removeProduct({
        ...itemToRemove,
        quantity: itemToRemove.quantity,
      })
    );
  };

  const deleteAllProducts = (itemToRemove: ProductWithQuantity) => {
    const newQuantities = { ...productsQuantity };
    delete newQuantities[itemToRemove.id];
    setProductsQuantity(newQuantities);
    dispatch(removeAllProducts(itemToRemove));
  };

  useEffect(() => {
    const quantities: { [key: string]: number } = {};
    products.forEach((item) => {
      quantities[item.id] = item.quantity;
    });
    setProductsQuantity(quantities);
  }, [products]);

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
                      <td>
                        <ReducersWrapper>
                          <i
                            className="ri-indeterminate-circle-line"
                            onClick={() => deleteProduct(item)}
                          />
                        </ReducersWrapper>

                        <StyledInput
                          value={productsQuantity[item.id] || ''}
                          onBlur={(event: React.ChangeEvent<HTMLInputElement>) => {
                            const value = parseInt(event.target.value);
                            if (!isNaN(value) && value >= 0) {
                              handleQuantityChange(item.id, value);
                            } else {
                              setProductsQuantity({
                                ...productsQuantity,
                                [item.id]: item.quantity,
                              });
                            }
                          }}
                          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            const value = parseInt(event.target.value);
                            const newQuantities = { ...productsQuantity, [item.id]: value };
                            setProductsQuantity(newQuantities);
                          }}
                          onKeyPress={(event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                            if (event.key === 'Enter') {
                              event.preventDefault();
                              event.currentTarget.blur();
                            }
                          }}
                        />

                        <ReducersWrapper>
                          <i
                            className="ri-add-circle-line"
                            onClick={() => addProductUnit(item)}
                          />
                        </ReducersWrapper>
                      </td>
                      <td>
                        <DeleteButton
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
