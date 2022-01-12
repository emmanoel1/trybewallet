import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { table } from './table.css';

class WalletTable extends React.Component {
  render() {
    const { expenses } = this.props;
    console.table(expenses);
    return (
      <table className="table is-bordered is-fullwidth has-background-success">
        <thead className="thead">
          <tr className="tr">
            <th className="th">Descrição</th>
            <th className="th">Tag</th>
            <th className="th">Método de pagamento</th>
            <th className="th">Valor</th>
            <th className="th">Moeda</th>
            <th className="th">Câmbio utilizado</th>
            <th className="th">Valor convertido</th>
            <th className="th">Moeda de conversão</th>
            <th className="th">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {expenses.map(({
            id,
            value,
            tag,
            method,
            description,
            currency,
            exchangeRates,
          }) => (
            <tr key={ id } className="tr">
              <td className="td">{description}</td>
              <td className="td">{tag}</td>
              <td className="td">{method}</td>
              <td className="td">{value}</td>
              <td className="td">{currency}</td>
              <td className="td">{exchangeRates[currency].name.split('/')[0]}</td>
              <td className="td">
                {
                  (Number(exchangeRates[currency].ask)
                     * Number(value)).toFixed(2)
                }
              </td>
              <td className="td">{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
              <td className="td">Real</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

WalletTable.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps)(WalletTable);
