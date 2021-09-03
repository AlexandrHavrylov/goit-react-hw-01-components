import styled from '@emotion/styled';

export const Table = styled.table`
  text-align: center;
  font-size: 20px;
  width: 650px;

  border: 1px gray solid;
`;

export const TableHead = styled.thead`
  background-color: #5bb19e;
  padding: 10px;
  color: white;
  border-radius: 20px;

  th {
    padding: 10px;
  }
`;

export const TableRow = styled.tr`
  :nth-child(2n) {
    background-color: #999999;
  }

  td {
    border: 1px black solid;
  }
`;
