import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import store from './state/store';
import {Root} from './screens';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Root />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
