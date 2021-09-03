import PropTypes from 'prop-types';
import { Table, TableHead, TableRow } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableRow>
      </TableHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
