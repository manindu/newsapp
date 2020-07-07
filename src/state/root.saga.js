import {all} from 'redux-saga/effects';
import requestSaga from './request.saga';
import newsSaga from './news/news.saga';
import userSaga from './user/user.saga';

export default function* rootSaga() {
  yield all([requestSaga(), newsSaga(), userSaga()]);
}
