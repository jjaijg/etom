import { StyledBurger } from './style';

const Burger = ({ open, toggleMenu }) => {
  return (
    <StyledBurger open={open} onClick={toggleMenu}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
