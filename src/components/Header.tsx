import React from 'react';

import styled, { css } from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { Container } from 'reactstrap';
import { toast } from 'react-toastify'; // бібліотека зі вспливаючими модалками

import { RootState } from '../redux/store';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { addProduct } from '../redux/features/cartSlice';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 70px;
  line-height: 70px;
  background-color: white;
  z-index: 100;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Navigation = styled.div`
  ul {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  li {
    margin: 0 12px;
  }
`;

const NavLinkStyles = css`
  color: var(--primary-color);
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
    text-decoration: none;
  }

  &.active {
    font-weight: 600;
  }
`;

const StyledNavLink = styled(NavLink)`
  ${NavLinkStyles}
`;

const NavIcons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  position: relative;
`;

const LogoImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const LogoTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary-color);
`;

const CartIcon = styled.span`
  position: relative;
  font-size: 1.4rem !important;
  cursor: pointer;
`;

const Badge = styled.span`
  position: absolute;
  top: 25%;
  right: -8%;
  width: 15px;
  height: 15px;
  content: "";
  background: black;
  color: white;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 600;
  z-index: 10;
`;

const nav__links = [
  {
    path: 'products',
    display: 'Products',
  },
];

export const Header: React.FC = () => {
  const { quantity } = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();


  const navigateToCart = () => {
    navigate('/cart');
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  // Додати продукт до корзини при відпусканні перетягуваного продукту
  //в потрібному місці
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const product = JSON.parse(event.dataTransfer.getData('application/json'));
    dispatch(addProduct(product));
    toast.success('Product added successfully'); //вспливаюча модалка про доданий товар
  };

  return (
    <StyledHeader>
      <Container>
        <NavWrapper>
          <LogoWrapper>
            <LogoImage src={logo} alt="logo" />
            <LogoTitle>Test task</LogoTitle>
          </LogoWrapper>

          <Navigation>
            <ul>
              {nav__links.map((item, index) => (
                <li key={index}>
                  <StyledNavLink
                    to={item.path}
                  >
                    {item.display}
                  </StyledNavLink>
                </li>
              ))}
            </ul>
          </Navigation>

          <NavIcons>
            <CartIcon
              onClick={navigateToCart}
              onDragOver={handleDragOver} // // Дозволити кидання в зоні
              onDrop={handleDrop} // додати продукт до корзини при відпусканні
            >
              <i className="ri-shopping-bag-line"></i>
              <Badge>{quantity}</Badge>
            </CartIcon>
          </NavIcons>
        </NavWrapper>
      </Container>
    </StyledHeader>
  );
};