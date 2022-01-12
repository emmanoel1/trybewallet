import React from 'react';
import WalletHeader from './WalletHeader';
import WalletForm from './WalletForm';
import WalletTable from './WalletTable';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <WalletHeader />
        <WalletForm />
        <WalletTable />
      </>
    );
  }
}

export default Wallet;
