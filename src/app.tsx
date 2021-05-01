import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {rootStore} from './store/rootReducer';
import Routes from './routes';
import Header from './components/Header';
import light from './styles/light';
import dark from './styles/dark';

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);
  const [isOn, setIsOn] = useState(false);

  const toggleTheme = () => {
    setIsOn(theme.title === 'light');
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Provider store={rootStore}>
        <NavigationContainer>
          <View style={{flex: 1}}>
            <Header toggleTheme={toggleTheme} theme={isOn} />
            <Routes />
          </View>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
};
export default App;
