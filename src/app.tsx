import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {rootStore} from './store/rootReducer';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <Provider store={rootStore}>
      <NavigationContainer>
        <View style={{flex: 1}}>
          <Routes />
        </View>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
