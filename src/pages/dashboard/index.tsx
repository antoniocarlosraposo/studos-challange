import React, {useEffect, useState} from 'react';
import {SearchBar} from 'react-native-elements';
import {FlatList} from 'react-native-gesture-handler';
import {loadEntities} from '../../services/loadEntities';
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
  const [searchFilteredEntities, setsearchFilteredEntities] = useState<
    Entity[]
  >();
  const types = ['Novas', 'Em andamento', 'Finalizadas'];
  const [active, setActive] = useState(types[0]);
  const [search, setSearch] = useState('');

  const fetchEntities = async () => {
    const response = await loadEntities();
    setEntities(response);
    const isSorted = response.sort((a, b) => a.date - b.date);
    setFilteredentities(isSorted);
    setsearchFilteredEntities(isSorted);
  };

  const onFilter = (filter: string) => {
    if (filter === types[0]) {
      const temp = entities?.filter(item => item.started === false);
      setFilteredentities(temp);
      setsearchFilteredEntities(temp);
      setActive(types[0]);
    }
    if (filter === types[1]) {
      const temp = entities?.filter(item => item.started === true);
      setFilteredentities(temp);
      setsearchFilteredEntities(temp);
      setActive(types[1]);
    }
    if (filter === types[2]) {
      const temp = entities?.filter(
        item => item.questions === item.questionsCompleted,
      );
      setFilteredentities(temp);
      setsearchFilteredEntities(temp);
      setActive(types[2]);
    }
  };

  const searchFilter = (text: string) => {
    if (text) {
      const temp = filteredEntities?.filter(item =>
        item.title.toLowerCase().match(text),
      );
      setsearchFilteredEntities(temp);
      setSearch(text);
    } else {
      setsearchFilteredEntities(filteredEntities);
      setSearch(text);
    }
  };

  useEffect(() => {
    fetchEntities();
  }, []);

  return (
    <Container>
      <TaskContainer>
        <HeaderText>Próximas entregas</HeaderText>
        <SearchBar
          onChangeText={text => searchFilter(text)}
          onClear={text => searchFilter('')}
          platform="android"
          placeholder="Pesquisar"
          value={search}
        />
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
        <FlatList
          data={searchFilteredEntities}
          keyExtractor={item => item.title}
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1}}
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
      </TaskContainer>
    </Container>
  );
};

export default Dashboard;
