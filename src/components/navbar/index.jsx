import PropTypes from 'prop-types';
import {
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  MobileIcon,
  NavBtn,
} from './style';
import Burger from '../burger';
import Toggler from '../toggler';

const Navbar = ({ open, toggleMenu, isThemeToggled, toggleTheme }) => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to='/'>MtoE</NavLogo>
        <MobileIcon>
          <Burger open={open} toggleMenu={toggleMenu} />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink activeClassName='active' to='/history'>
              History
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink activeClassName='active' to='/launches'>
              launches
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink activeClassName='active' to='/rockets'>
              Rockets
            </NavLink>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <Toggler toggled={isThemeToggled} setToggled={toggleTheme} />
        </NavBtn>
      </NavContainer>
    </Nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
