import React from 'react';
import Customers from './customers/Customers';

export default function App() {
  const customers = [
    { name: 'John Stevens', partySize: 5, waitTime: 10 },
    { name: 'John Stevens', partySize: 5, waitTime: 10 },
    { name: 'John Stevens', partySize: 5, waitTime: 10 },
  ];
  return (
    <Customers customers={customers} />
  );
}
