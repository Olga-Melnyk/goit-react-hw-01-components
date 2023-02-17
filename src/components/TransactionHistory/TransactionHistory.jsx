import PropTypes from 'prop-types';
import {
  Transaction,
  TableHeadItem,
  TableBodyLine,
  TableBodyItem,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Transaction>
      <thead>
        <tr>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TableBodyLine key={item.id}>
            <TableBodyItem>{item.type}</TableBodyItem>
            <TableBodyItem>{item.amount}</TableBodyItem>
            <TableBodyItem>{item.currency}</TableBodyItem>
          </TableBodyLine>
        ))}
      </tbody>
    </Transaction>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
