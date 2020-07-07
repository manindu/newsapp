import userActionTypes from './user.types';

const signIn = (payload) => ({
  type: userActionTypes.SIGN_IN,
  payload,
});

const signUp = (payload) => ({
  type: userActionTypes.SIGN_UP,
  payload,
});

const signOut = () => ({
  type: userActionTypes.SIGN_OUT,
});

const setUser = (payload) => ({
  type: userActionTypes.SET_USER,
  payload,
});

export {signIn, signUp, signOut, setUser};
