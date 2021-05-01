import React, {useEffect, useState} from 'react';
import {SearchBar} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import {ThemeProvider} from 'styled-components';
import {loadEntities} from '../../services/loadEntities';
import Header from '../../components/Header';
import TaskCard from '../../components/TaskCard';
import dark from '../../styles/dark';
import light from '../../styles/light';
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
  date: Date;
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
  const types = ['Novas', 'Em andamento', 'Finalizadas'];
  const [active, setActive] = useState(types[0]);

  const fetchEntities = async () => {
    const response = await loadEntities();
    setEntities(response);
    const isSorted = response.sort((a, b) => a.date - b.date);
    setFilteredentities(isSorted);
  };

  useEffect(() => {
    fetchEntities();
  }, []);

  const onFilter = (filter: string) => {
    if (filter === 'Novas') {
      const temp = entities?.filter(item => item.started === false);
      setFilteredentities(temp);
      setActive('Novas');
    }
    if (filter === 'Em andamento') {
      const temp = entities?.filter(item => item.started === true);
      setFilteredentities(temp);
      setActive('Em andamento');
    }
    if (filter === 'Finalizadas') {
      const temp = entities?.filter(
        item => item.questions === item.questionsCompleted,
      );
      setFilteredentities(temp);
      setActive('Finalizadas');
    }
  };

  return (
    <Container>
      <TaskContainer>
        <HeaderText>Próximas entregas</HeaderText>
        <SearchBar platform="android" placeholder="Pesquisar" />
        <FilterContainer>
          <FilterButton onPress={() => onFilter('Novas')}>
            <FilterText active={active === 'Novas'}>Novas</FilterText>
          </FilterButton>
          <FilterButton onPress={() => onFilter('Em andamento')}>
            <FilterText active={active === 'Em andamento'}>
              Em andamento
            </FilterText>
          </FilterButton>
          <FilterButton onPress={() => onFilter('Finalizadas')}>
            <FilterText active={active === 'Finalizadas'}>
              Finalizadas
            </FilterText>
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
                date={item.date.toLocaleString('pt-BR')}
                title={item.title}
                teacher={item.teacher}
                subject={item.subject}
                questions={item.questions}
                questionsCompleted={item.questionsCompleted}
              />
            )}
          />
        </TempContainer>
      </TaskContainer>
    </Container>
  );
};

export default Dashboard;
