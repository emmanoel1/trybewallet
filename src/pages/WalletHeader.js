import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import header from './header.css';

class WalletHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { total, currency } = this.state;
    return (
      <header>
        <div className="email" data-testid="email-field">
          {email}
        </div>
        <div data-testid="total-field">
          { total }
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
});

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(WalletHeader);
