import React from 'react';

import {Container, Theme, PortraitButton, Portrait, ThemeText} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <PortraitButton>
        <Portrait />
      </PortraitButton>

      <Theme>
        <ThemeText>0</ThemeText>
      </Theme>
    </Container>
  );
};

export default Header;
