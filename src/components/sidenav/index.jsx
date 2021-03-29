import PropTypes from 'prop-types';
import { SideLink, StyledMenu } from './style';

const SideNav = ({ open, toggleMenu }) => {
  return (
    <StyledMenu open={open}>
      <SideLink to='/history' onClick={toggleMenu}>
        <span role='img' aria-label='about us'>
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        History
      </SideLink>
      <SideLink to='/launches'>
        <span role='img' aria-label='price'>
          &#x1f4b8;
        </span>
        Launches
      </SideLink>
      <SideLink to='/rockets'>
        <span role='img' aria-label='contact'>
          &#x1f4e9;
        </span>
        Rockets
      </SideLink>
    </StyledMenu>
  );
};

SideNav.propTypes = {};

export default SideNav;
