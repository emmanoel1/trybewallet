import React from 'react';
import WalletHeader from './WalletHeader';
import WalletForm from './WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <WalletHeader />
        <WalletForm />
        <div>TrybeWallet</div>
      </>
    );
  }
}

export default Wallet;
