import React from 'react';
import {Switch} from 'react-native';

import {
  Container,
  Portrait,
  ProfileContainer,
  ProfileText,
  SwitchContainer,
  SwitchText,
} from './styles';

interface Props {
  toggleTheme(): void;
  theme: boolean;
}

const Header: React.FC<Props> = ({toggleTheme, theme}) => {
  return (
    <Container>
      <ProfileContainer>
        <Portrait />
        <ProfileText>Olá, João Paulo</ProfileText>
      </ProfileContainer>

      <SwitchContainer>
        <SwitchText>Modo Escuro</SwitchText>
        <Switch
          onValueChange={toggleTheme}
          value={theme}
          trackColor={{false: '#C4C4C4', true: '#339CF7'}}
          thumbColor="#fff"
        />
      </SwitchContainer>
    </Container>
  );
};

export default Header;
