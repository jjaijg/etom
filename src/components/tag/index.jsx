import PropTypes from 'prop-types';
import { Container } from './style';

const Tag = ({ text, variant = 'default' }) => {
  return <Container variant={variant}>{text}</Container>;
};

Tag.propTypes = {
  text: PropTypes.any,
};

export default Tag;
