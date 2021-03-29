import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { setDisplay } from '../../styles/baseStyles';

export const Nav = styled.nav`
  ${setDisplay('flex', 'row', 'center', 'center', null, null, null, '1s')};
  background: ${({ theme }) => theme.colors.secondaryColor};
  height: 80px;
  margin-top: -80px;
  position: sticky;
  top: 0;
  z-index: 3;

  @media screen and (max-width: ${(theme) => theme.lg}) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 2;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  color: ${({ theme }) => theme.colors.bgColor};
  display: flex;
  align-items: center;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.tab}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.tab}) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.bgColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.colors.bgColor};
  }
`;

export const NavBtn = styled.div`
  align-self: center;
  margin-right: 50px;
`;
