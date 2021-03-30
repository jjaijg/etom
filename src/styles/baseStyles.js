import styled from 'styled-components/macro';

export const setDisplay = (
  disp,
  dir,
  just,
  align,
  width,
  height,
  bgClr,
  trans
) => `
  ${disp && `display: ${disp}`};
  ${dir && `flex-direction: ${dir}`};
  ${just && `justify-content: ${just}`};
  ${align && `align-items: ${align}`};
  ${width && `width: ${width}`};
  ${height && `height: ${height}`};
  ${bgClr && `background-color: ${bgClr}`};
  ${trans && `transition:all ${trans} ease`};
`;

export const Container = styled.div`
  margin: 5px auto 5px auto;
  padding: 5px;
  color: ${({ theme }) => theme.colors1.text};
`;
