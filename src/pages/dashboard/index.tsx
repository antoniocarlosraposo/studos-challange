import React, {useEffect, useState} from 'react';
import {SearchBar} from 'react-native-elements';
import {loadEntities} from '../../services/loadEntities';

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

interface Entities {
  entities: Entity[];
}

interface Entity {
  date: string;
  started: boolean;
  title: string;
  subject: string;
  teacher: string;
  questions: number;
  questionsCompleted: number;
  type: number;
}

const Dashboard: React.FC = () => {
  const [entities, setEntities] = useState<Entity[]>();

  const fetchEntities = async () => {
    const response = await loadEntities();
    setEntities(response);
  };

  useEffect(() => {
    fetchEntities();
  }, []);

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
          <TaskCard />
        </TempContainer>
      </TaskContainer>
    </Container>
  );
};

export default Dashboard;
