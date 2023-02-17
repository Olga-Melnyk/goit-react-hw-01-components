import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
  padding-left: 20px;
  background-color: rgb(233, 229, 229);
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 5px;
`;

export const Status = styled.span`
  display: block;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  margin-left: 15px;

  background-color: ${props => {
    return props.isActive ? 'green' : 'red';
  }}; ;
`;

export const Img = styled.img`
  width: 48px;
`;

export const Name = styled.p`
  font-size: 25px;
`;
