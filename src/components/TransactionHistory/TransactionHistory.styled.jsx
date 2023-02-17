import styled from 'styled-components';

export const Transaction = styled.table`
  border-collapse: collapse;
  border: 1px solid grey;
  padding: 8px;
  border-radius: 4px;
  width: 700px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 30px;
`;

export const TableHeadItem = styled.th`
  border: 1px solid grey;
  background-color: rgb(150, 232, 243);
  padding: 20px;
  font-size: 25px;
  width: 200px;
`;

export const TableBodyLine = styled.tr``;

export const TableBodyItem = styled.td`
  border: 1px solid grey;
  text-align: center;
  font-size: 20px;
  padding: 12px;
  background-color: rgb(255, 255, 255);
`;
