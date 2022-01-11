import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDisabled = this.handleDisabled.bind(this);
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  handleClick() {
    const { setDispatch, history } = this.props;
    setDispatch(this.state);
    history.push('/carteira');
  }

  handleDisabled() {
    const { password, email } = this.state;

    const validEmail = email.includes('@');
    const validEmail2 = email.includes('.com');
    const validPassword = 6;

    if (validEmail && validEmail2 && password.length >= validPassword) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        <label htmlFor="email">
          Email:
          <input
            data-testid="email-input"
            id="email"
            className="input is-primary"
            type="email"
            placeholder="Digite Seu Email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            data-testid="password-input"
            id="password"
            className="input is-info"
            type="password"
            placeholder="Digite Sua Senha"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          className="button is-primary"
          disabled={ this.handleDisabled() }
          onClick={ () => this.handleClick() }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setDispatch: (value) => dispatch(login(value)),
});

Login.propTypes = {
  setDispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
