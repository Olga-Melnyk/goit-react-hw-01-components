import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid black;
  padding: 8px;
  border-radius: 4px;
  width: 380px;
  height: 450px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const Image = styled.img`
  display: block;
  width: 240px;
  height: 240px;
  object-fit: cover;
  margin: 0 auto;
`;

export const UserName = styled.p`
  text-align: center;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  text-align: center;
  font-size: 20px;
  color: grey;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  text-align: center;
  font-size: 20px;
  color: grey;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ActiveList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  border-top: 1px solid #dddddd;
  background-color: #e9eef3;
  margin: 0 auto;
  padding: 0;
`;

export const ActiveItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  padding: 15px;
  border: 1px solid #dddddd;
`;

export const Label = styled.span`
  font-size: 15px;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-weight: 600;
`;
