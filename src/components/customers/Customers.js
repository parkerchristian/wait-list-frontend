import React from 'react';
import PropTypes from 'prop-types';
import Customer from './Customer';

function Customers({ customers }) {
  const customerList = customers.map(customer => (
    <tr key={customer.id}>
      <Customer customer={customer} />
    </tr>
  ));
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Party Size</th>
        <th>Wait (min)</th>
      </tr>
      <tbody>
        {customerList}
      </tbody>
    </table>
  );
}

Customers.propTypes = {
  customers: PropTypes.array.isRequired
};

export default Customers;
