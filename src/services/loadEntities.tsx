import moment from 'moment';
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

const validateDate = (s: string) => {
  const [year, month, day] = s.split('-');
  if (day.length === 4 && year.length === 2) return `${day}-${month}-${year}`;
  return s;
};

const cleanData = (dados: Dados) => {
  return dados.data.entities.map(
    (entity): ParsedEntity => {
      const newDate = entity.date.replace(/([/])/g, '-');
      const validatedDate = validateDate(newDate);
      const parsedEntity: ParsedEntity = {
        date: new Date(validatedDate),
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
