import api from '../services/api';
// Actions Types
export const LOGIN_USER = 'LOGIN_USER';
export const login = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export const WALLET_USER = 'WALLET_USER';
export const wallet = (payload) => ({
  type: WALLET_USER,
  payload,
});

export const WALLET_FETCH = 'WALLET_FETCH';
export const walletfetch = (payload) => ({
  type: WALLET_FETCH,
  payload,
});

export const getCurrency = (currency) => async (dispatch) => {
  await api(currency)
    .then((response) => dispatch(walletfetch(response)));
};
