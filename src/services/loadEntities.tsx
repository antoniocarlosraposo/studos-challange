import api from './api';

interface Data {
  dados: Entities;
}

interface Entities {
  entities: Entity[];
}

interface Entity {
  started: boolean;
  title: string;
  subject: string;
  teacher: string;
  questions: number;
  questionsCompleted: number;
  type: number;
}

const cleanData = (data: Data) =>
  data.dados.entities.map(
    (entity): Entity => {
      const parsedEntity: Entity = {
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

const loadEntities = async (): Promise<Entity[]> => {
  try {
    const {data} = await api.get('/v3/865096e8-cdb8-49d7-b548-6488db4c8129');
    return cleanData(data);
  } catch (error) {
    throw error.message;
  }
};

export {loadEntities};
