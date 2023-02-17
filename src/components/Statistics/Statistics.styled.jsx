import styled from 'styled-components';
import { getRandomHexColor } from '../../random-color';

export const Section = styled.section`
  margin: 0 auto;
  margin-top: 30px;
  width: 380px;
  height: 150px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80px;
  padding: 20px;

  color: black;
  background-color: ${v => {
    return getRandomHexColor();
  }};
`;

export const Label = styled.span`
  font-size: 15px;
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  font-weight: 600;
`;
