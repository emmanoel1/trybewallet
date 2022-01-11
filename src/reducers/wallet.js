// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_USER } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  password: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_USER:
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password,
    };
  default:
    return state;
  }
};

export default wallet;
