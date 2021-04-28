import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {View} from 'react-native';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <View style={{backgroundColor: '#FFF', flex: 1}}>
      <Routes />
    </View>
  </NavigationContainer>
);
export default App;
