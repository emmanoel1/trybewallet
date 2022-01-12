// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_USER, WALLET_FETCH } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_USER:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };

  case WALLET_FETCH:
    return {
      ...state,
    };

  default:
    return state;
  }
};

export default wallet;
