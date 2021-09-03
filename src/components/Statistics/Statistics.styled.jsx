import styled from '@emotion/styled';

export const StatisticSection = styled.section`
  text-align: center;
  border: 1px black solid;
  box-shadow: 4px 4px 8px 0 rgba(25, 26, 27, 0.2);
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 24px;
  color: grey;
  margin-bottom: 50px;
`;

export const Stats = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const Stat = styled.li`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px black solid;
  padding: 14px;
  background-color: gray;
`;

export const Label = styled.span`
  font-size: 20px;
  font-weight: 500px;
  color: white;
`;

export const Percentage = styled.span`
  font-size: 24px;
  font-weight: 700px;
  color: white;
`;
