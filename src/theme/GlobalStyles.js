import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 100%;
    height: 100%;
    touch-action: manipulation;
    width: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background: ${({ theme }) => theme.colors.bgColor};
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.font};
    line-height: 1.618;
    margin: 0;
    min-height: 100%;
    width: 100%;
    transition: all 0.50s linear;
  }

  header {
    display: flex;
    flex-direction: column;
  }

  a {
    color: ${({ theme }) => theme.colors.text.link};
    cursor: pointer;
  }

  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #FAF0CA;
    color: #FFFFFF;
    font-family: ${({ theme }) => theme.font};
  }

  button.btn {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;
