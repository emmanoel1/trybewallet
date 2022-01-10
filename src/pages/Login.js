import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  render() {
    const { email, password } = this.state;
    console.log('email:', email);
    console.log('password:', password);
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
        <button type="button" className="button is-primary">Entrar</button>
      </div>
    );
  }
}

export default Login;
