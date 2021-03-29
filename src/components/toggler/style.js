import styled from 'styled-components/macro';
import { setDisplay } from '../../styles/baseStyles';

let scale = 60;

export const TogglerContainer = styled.div`
  width: ${scale + 5}px;
`;

export const ToggleBall = styled.div`
  ${setDisplay(
    null,
    null,
    null,
    null,
    `${scale / 2}px`,
    `${scale / 2}px`,
    '#fff',
    '1s'
  )};
  position: absolute;
  border-radius: 50%;
  border: 3px solid #333;
  transform: translatex(${(props) => (props.toggled ? `120%` : `0%`)});
`;
export const ToggleBox = styled.div`
  ${setDisplay(
    'flex',
    'column',
    'center',
    null,
    `${scale + 5}px`,
    `${scale / 2}px`,
    '#333',
    '1s'
  )};
  border-radius: ${scale / 4}px;
  cursor: pointer;
`;
export const ToggleInput = styled.input`
  display: none;
`;

export const Scenary = styled.div`
  ${setDisplay('flex', 'row', 'space-between', null, null, null, null, null)};
  padding: '20px 10px 0px 10px';

  & > div {
    margin-top: 6px;
  }

  & > div > svg {
    width: ${scale / 2}px;
  }
`;
