import styled from '@emotion/styled';
import { getQueriesForElement } from '@testing-library/dom';

export const Friend = styled.li`
  padding: 16px;
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;
  border-radius: 10px;
  border: 1px black solid;
  margin-bottom: 10px;
`;

export const Avatar = styled.img`
  display: block;
  width: 100px;
  height: auto;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: ${props => (props.statusType ? `green` : `red`)};
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
