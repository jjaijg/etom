import styled from 'styled-components/macro';

export const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  width: 3em;
  height: 3em;

  border-radius: 50%;
  border: 0.75em solid ${({ theme }) => theme.colors.primaryColor};
  border-top-color: ${({ theme }) => theme.colors.accentColor};

  animation: 2s infinite rotate;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
