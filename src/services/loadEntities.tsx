import {response} from '../values/mock';
import api from './api';

interface Dados {
  data: Entities;
}

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

interface ParsedEntity {
  date: Date;
  started: boolean;
  title: string;
  subject: string;
  teacher: string;
  questions: number;
  questionsCompleted: number;
  type: number;
}

const cleanData = (dados: Dados) => {
  return dados.data.entities.map(
    (entity): ParsedEntity => {
      const parsedEntity: ParsedEntity = {
        date: new Date(entity.date),
        started: entity.started,
        title: entity.title,
        subject: entity.subject,
        teacher: entity.teacher,
        questions: entity.questions,
        questionsCompleted: entity.questionsCompleted,
        type: entity.type,
      };
      return parsedEntity;
    },
  );
};

const loadEntities = async (): Promise<ParsedEntity[]> => {
  try {
    const data = response;
    // const {data} = await api.get('/v3');
    // console.log(data);
    return cleanData(data);
  } catch (error) {
    throw error.message;
  }
};

export {loadEntities};
