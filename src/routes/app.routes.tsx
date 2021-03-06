import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../pages/dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#FFF'},
    }}
    initialRouteName="Dashboard">
    <App.Screen name="Dashboard" component={Dashboard} />
  </App.Navigator>
);

export default AppRoutes;
