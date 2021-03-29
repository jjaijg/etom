import styled from 'styled-components/macro';
import { setDisplay } from '../../styles/baseStyles';

export const Container = styled.div`
  ${setDisplay(
    'flex',
    'column',
    'center',
    'flex-start',
    null,
    null,
    `${({ theme }) => theme.colors.bgColor}`,
    '1s'
  )};
  margin: 40px 0;
  padding: 5px;
  position: relative;

  &::after {
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    content: '';
    position: absolute;
    left: calc(50% - 2px);
    width: 4px;
    height: 100%;
  }
`;
