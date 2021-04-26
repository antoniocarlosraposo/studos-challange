import React from 'react';

import Header from '../../components/Header';
import {Container, TaskContainer, HeaderText} from './style';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <TaskContainer>
        <HeaderText>Próximas entregas</HeaderText>
      </TaskContainer>
    </Container>
  );
};

export default Dashboard;
