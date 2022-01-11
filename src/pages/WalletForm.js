import React from 'react';
import form from './form.css';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <form>
        <input
          placeholder="Valor"
          data-testid="value-input"
        />
        <input
          placeholder="Descrição"
          data-testid="description-input"
        />
        <input
          data-testid="currency-input"
        />
        <label htmlFor="method">
          Método De Pagamento:
          <select
            id="method"
            data-testid="method-input"
          >
            <option value="dinheiro">dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            id="tag"
            data-testid="tag-input"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Trabalho">Transporte</option>
            <option value="Trabalho">Saúde</option>
          </select>
        </label>
        <input
          data-testid="tag-input"
        />
        <button type="button">Adicionar despesa</button>
      </form>
    );
  }
}

export default WalletForm;
