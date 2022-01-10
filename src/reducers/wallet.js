// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ACTION_2 } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
  password: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ACTION_2:
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
