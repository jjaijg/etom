import styled from 'styled-components/macro';

const setBg = ({ theme, variant }) => {
  let bgColor;
  if (variant === 'default') {
    bgColor = theme.colors.primaryColor;
  } else {
    bgColor = theme.colors.accents.info;
  }
  return bgColor;
};

export const Container = styled.span`
  margin: 3px 3px;
  padding: 3px 4px;
  background-color: ${({ theme, variant }) => theme.colors.accents.info};
  color: ${({ theme }) => theme.colors.bgColor};
  border-radius: 10px;
`;
