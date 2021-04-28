import React from 'react';

import {
  Container,
  SubjectText,
  TempContainer,
  TimerContainer,
  TimerText,
  TitleText,
} from './styles';

interface Props {
  date: string;
  // started: boolean;
  title: string;
  subject: string;
  teacher: string;
  // questions: number;
  // questionsCompleted: number;
  type: number;
}

const TaskCard: React.FC<Props> = ({
  date,
  title,
  subject,
  teacher,
  type,
}: Props) => {
  return (
    <Container type={type}>
      <TimerContainer>
        <TimerText>{date}</TimerText>
        <TimerText>Icone</TimerText>
      </TimerContainer>
      <TitleText>{title}</TitleText>
      <SubjectText>{subject}</SubjectText>
      <TempContainer>
        <SubjectText>{teacher}</SubjectText>
        <SubjectText>0/100</SubjectText>
      </TempContainer>
    </Container>
  );
};

export default TaskCard;
