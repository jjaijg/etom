import styled from 'styled-components/macro';

export const CardTags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: 'space-around;
  align-items: center;
  flex-wrap: wrap;
`;
export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.secondary};
`;
export const CardContent = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
`;
export const CardBody = styled.div`
  margin-top: 10px;
`;
export const CardHeader = styled.div`
  position: relative;
`;
export const CardMedia = styled.div`
  background-image: url('${({ rocket }) => rocket}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 150px;
`;
export const CardFlag = styled.div`
  background-image: url('${({ flag }) => flag}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: calc(0% - 25px);
  left: calc(50% - 25px);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  width: 300px;
  max-width: 350px;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.bgColor};
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
`;
