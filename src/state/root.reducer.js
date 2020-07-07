import {combineReducers} from 'redux';
import news from './news/news.reducer';
import user from './user/user.reducer';

const rootReducer = combineReducers({
  news,
  user,
});

export default rootReducer;
