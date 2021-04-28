import React, {useEffect, useState} from 'react';
import {SearchBar} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
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
  FilterButton,
} from './style';

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
  const [filteredEntities, setFilteredentities] = useState<Entity[]>();

  const fetchEntities = async () => {
    const response = await loadEntities();
    setEntities(response);
  };

  useEffect(() => {
    fetchEntities();
  }, []);

  const onFilter = (filter: string) => {
    if (filter === 'Novas') {
      const temp = entities?.filter(item => item.started === false);
      setFilteredentities(temp);
    }
    if (filter === 'Em andamento') {
      const temp = entities?.filter(item => item.started === true);
      setFilteredentities(temp);
    }
    if (filter === 'Finalizadas') {
      const temp = entities?.filter(
        item => item.questions === item.questionsCompleted,
      );
      setFilteredentities(temp);
    }
  };

  return (
    <Container>
      <Header />
      <TaskContainer>
        <HeaderText>Próximas entregas</HeaderText>
        <SearchBar platform="android" placeholder="Pesquisar" />
        <FilterContainer>
          <FilterButton onPress={() => onFilter('Novas')}>
            <FilterText>Novas</FilterText>
          </FilterButton>
          <FilterButton onPress={() => onFilter('Em andamento')}>
            <FilterText>Em andamento</FilterText>
          </FilterButton>
          <FilterButton onPress={() => onFilter('Finalizadas')}>
            <FilterText>Finalizadas</FilterText>
          </FilterButton>
        </FilterContainer>
        <TempContainer>
          <FlatList
            data={filteredEntities}
            keyExtractor={item => item.title}
            contentContainerStyle={{flex: 1}}
            renderItem={({item}) => (
              <TaskCard
                type={item.type}
                date={item.date}
                title={item.title}
                teacher={item.teacher}
                subject={item.subject}
              />
            )}
          />
        </TempContainer>
      </TaskContainer>
    </Container>
  );
};

export default Dashboard;
