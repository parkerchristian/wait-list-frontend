import React from 'react';
import PropTypes from 'prop-types';

function Customer({ customer }) {
  return (
    <>
      <td>{customer.name}</td>
      <td>{customer.partySize}</td>
      <td>{customer.waitTime}</td>
    </>
  );
}

Customer.propTypes = {
  customer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    partySize: PropTypes.number.isRequired,
    waitTime: PropTypes.number.isRequired
  }).isRequired
};

export default Customer;
