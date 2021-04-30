import React from 'react';
import {Switch} from 'react-native';

import {Container} from './styles';

interface Props {
  toggleTheme(): void;
  theme: any;
}

const Header: React.FC<Props> = ({toggleTheme, theme}) => {
  return (
    <Container>
      <Switch onValueChange={toggleTheme} value={theme} />
    </Container>
  );
};

export default Header;
