import React, { useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { Container, Row } from 'reactstrap';

import styled, { css } from 'styled-components';

const nav__links = [
  {
    path: 'products',
    display: 'Products',
  },
];

export const Header = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const menuToggle = () => {
    menuRef.current?.classList.toggle('active__menu');
  };

  const navigateToCart = () => {
    navigate('/cart');
  };

  return (
    <StyledHeader>
      <Container>
        <Row>
          <NavWrapper>
            <LogoWrapper>
              <LogoImage src={logo} alt="logo" />
              <LogoTitle>KIT test task</LogoTitle>
            </LogoWrapper>

            <Navigation onClick={menuToggle}>
              <ul>
                {nav__links.map((item, index) => (
                  <li key={index}>
                    <StyledNavLink
                      to={item.path}
                      className="nav__active"
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
              >
                <i className="ri-shopping-bag-line"></i>
                <Badge>12</Badge>
              </CartIcon>
            </NavIcons>
          </NavWrapper>
        </Row>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  line-height: 70px;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
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
  color: var(--black-color);
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  transition: color 0.2s;

  &:hover {
    color: var(--primary-color);
  }

  &.nav__active {
    color: var(--primary-color);
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
  font-size: 1.2rem !important;
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