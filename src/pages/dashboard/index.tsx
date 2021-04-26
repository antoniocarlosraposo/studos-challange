import React from 'react';
import {SearchBar} from 'react-native-elements';

import Header from '../../components/Header';
import TaskCard from '../../components/TaskCard';
import {
  Container,
  TaskContainer,
  HeaderText,
  FilterContainer,
  FilterText,
  TempContainer,
} from './style';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <TaskContainer>
        <HeaderText>Próximas entregas</HeaderText>
        <SearchBar platform="android" placeholder="Pesquisar" />
        <FilterContainer>
          <FilterText>Novas</FilterText>
          <FilterText>Em andamento</FilterText>
          <FilterText>Finalizadas</FilterText>
        </FilterContainer>
        <TempContainer>
          <TaskCard />
        </TempContainer>
      </TaskContainer>
    </Container>
  );
};

export default Dashboard;
