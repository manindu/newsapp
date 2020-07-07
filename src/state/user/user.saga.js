import {takeLatest, put, call} from 'redux-saga/effects';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';
import userActionTypes from './user.types';
import {FAILURE} from '../../utils/constants';

function* signIn({payload}) {
  try {
    const authRef = auth();
    const result = yield call(
      [authRef, authRef.signInWithEmailAndPassword],
      payload.email,
      payload.password,
    );

    yield put({type: userActionTypes.SET_USER, payload: result.user._user});
  } catch (error) {
    yield put({
      type: userActionTypes.SIGN_IN + FAILURE,
      payload: error.message,
    });

    Toast.show(error.message);
  }
}

function* signUp({payload}) {
  try {
    const authRef = auth();
    const result = yield call(
      [authRef, authRef.createUserWithEmailAndPassword],
      payload.email,
      payload.password,
    );
    yield put({type: userActionTypes.SET_USER, payload: result.user});
    Toast.show('Success');
  } catch (error) {
    yield put({
      type: userActionTypes.SIGN_UP + FAILURE,
      payload: error.message,
    });

    Toast.show(error.message);
  }
}

export default function* watcherSaga() {
  yield takeLatest(userActionTypes.SIGN_IN, signIn);
  yield takeLatest(userActionTypes.SIGN_UP, signUp);
}
