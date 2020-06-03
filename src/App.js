import React from 'react';
import {Provider} from 'react-redux';
import store from './state/store';
import {Home} from './screens';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
