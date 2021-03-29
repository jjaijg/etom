import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.accentColor};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 2;
  transform: translateX(${({ open }) => (open ? '0%' : '-100%')});
  width: 100%;
`;

export const SideLink = styled(Link)`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  letter-spacing: 0.5rem;
  color: ${({ theme }) => theme.colors.bgColor};
  text-decoration: none;
  transition: color 0.3s linear;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    font-weight: bold;
  }
`;
