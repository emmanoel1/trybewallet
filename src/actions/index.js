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
