import React from 'react';

import {
  Container,
  SubjectText,
  TempContainer,
  TimerContainer,
  TimerText,
  TitleText,
} from './styles';

const TaskCard: React.FC = () => {
  return (
    <Container>
      <TimerContainer>
        <TimerText>Até 02/06 8h30</TimerText>
        <TimerText>Icone</TimerText>
      </TimerContainer>
      <TitleText>
        Lista 03 - Fisica Moderna - Modulo 1 - Modulo 2 - Aula 4
      </TitleText>
      <SubjectText>Matemática</SubjectText>
      <TempContainer>
        <SubjectText>Ricardo</SubjectText>
        <SubjectText>0/100</SubjectText>
      </TempContainer>
    </Container>
  );
};

export default TaskCard;
