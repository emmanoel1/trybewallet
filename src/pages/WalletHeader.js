import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import header from './header.css';

class WalletHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      currency: 'BRL',
    };
  }

  handleTotal() {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, { exchangeRates, currency, value }) => (
      acc + (Number(exchangeRates[currency].ask) * Number(value))
    ), 0);
    return total.toFixed(2);
  }

  render() {
    const { email } = this.props;
    const { currency } = this.state;
    return (
      <header>
        <div className="email" data-testid="email-field">
          {email}
        </div>
        <div data-testid="total-field">
          { this.handleTotal() }
          <div data-testid="header-currency-field">
            { currency }
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps)(WalletHeader);
