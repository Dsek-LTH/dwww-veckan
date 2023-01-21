import { createMedal } from './CRUD/create';
import { deleteMedal } from './CRUD/delete';
import { readAllMedals, readOneMedal } from './CRUD/read';
import { updateMedal } from './CRUD/update';
import { Resolvers } from './generated/graphql';

const resolvers: Resolvers = {
  Query: {
    medals: () => {
      return readAllMedals();
    },
    medal: (_, { id }) => {
      return readOneMedal(id);
    },
  },
  Mutation: {
    createMedal: (_, { name, description, image, requirement }) => {
      return createMedal(name, description, requirement, image);
    },
    updateMedal: (_, { id, input }) => {
      return updateMedal(id, input);
    },
    deleteMedal: (_, { id }) => {
      return deleteMedal(id);
    },
  },
};

export default resolvers;
