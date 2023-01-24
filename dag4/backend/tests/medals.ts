import { Medal } from '../src/CRUD/types';

// Medal ommiting id
const medals = [
  {
    name: 'Gold',
    description: 'Gold medal',
    image: 'bild1',
    requirement: 'You must be the best',
  },
  {
    name: 'Silver',
    description: 'Silver medal',
    image: 'bild2',
    requirement: 'You must be the second best',
  },
  {
    name: 'Bronze',
    description: 'Bronze medal',
    image: 'bild3',
    requirement: 'You must be the third best',
  },
];

export const medalToCreate = {
  name: 'New medal',
  description: 'New medal description',
  image: 'bild4',
  requirement: 'You must be the fourth best',
};

export default medals;
