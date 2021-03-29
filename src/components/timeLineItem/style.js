import styled from 'styled-components/macro';
import { setDisplay } from '../../styles/baseStyles';

export const RocketIcon = styled.div`
  position: absolute;
  top: calc(50% - 25px);
  right: -35px;

  & > svg {
    width: 20px;
    height: 40px;
  }
`;

export const Wrapper = styled.div`
  padding: 10px;
  opacity: 0.9;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.secondaryColor};

  &::after {
    content: ' ';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);
    width: 15px;
    height: 15px;
    right: -7.5px;
    top: calc(50% - 7.5px);
    transform: rotate(45deg);
  }
`;

export const Container = styled.div`
  ${setDisplay(
    'flex',
    'column',
    'center',
    'flex-start',
    '50%',
    null,
    null,
    '1s'
  )};
  background-color: ${({ theme }) => theme.colors.bgColor};
  padding: 5px;
  padding-right: 35px;
  margin: 10px 0px;
  margin-left: 10px;

  &:nth-child(odd) {
    align-self: flex-end;
    align-items: flex-start;
    padding-right: 0px;
    padding-left: 30px;
  }

  &:nth-child(odd) > ${Wrapper} {
    & > ${RocketIcon} {
      right: auto;
      left: -40px;
    }
  }

  &:nth-child(odd) > ${Wrapper}::after {
    right: auto;
    left: -7.5px;
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.colors.primaryColor};
  opacity: 0.8;
  max-width: 90%;
`;

export const BtnLink = styled.a``;
export const Btn = styled.button``;
