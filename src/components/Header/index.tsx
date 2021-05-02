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
        <Portrait
          source={{
            uri:
              'https://s3-alpha-sig.figma.com/img/0ce1/fa7d/b1f88b93a8e5da0409defb8019c13649?Expires=1620604800&Signature=f07BOPQK0pdMi~6CIV3Oip5hfi6BnTRLXSXwWv7E1T9X0K1CQqyCjCx4iXA8wRPFf6ymB4w-OCMk7QBn-F6k4GvbzcI-bPwPJl4V9d72axrb70BXK4w6rPvHhT7AvkjQFONakcSc7L4Y0lWuEkNUJq5QL7Qmlea67nMaY97tgpxHa9Lh3UPwUmPnSF5CrZXOsQVEM8usOZrZsQVF1JtmOE7jPl9uc~q8LtpFRR8o0zs1Otf6AxO-EUJ6D-PqMuPXpjyi8tcdR9vu1A6HcRn1Imr3JvZqL9OaWQRzlHCCZ5MqX1-EAZKMFF-LiV7UUGgp4e4Cgp0WG~Y1dRE5dixHdg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          }}
        />
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
