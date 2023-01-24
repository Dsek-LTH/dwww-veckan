import { Medal } from '../src/CRUD/types';

const medals: Medal[] = [
  {
    id: 1,
    name: 'Gold',
    description: 'Gold medal',
    image: 'bild1',
    requirement: 'You must be the best',
  },
  {
    id: 2,
    name: 'Silver',
    description: 'Silver medal',
    image: 'bild2',
    requirement: 'You must be the second best',
  },
  {
    id: 3,
    name: 'Bronze',
    description: 'Bronze medal',
    image: 'bild3',
    requirement: 'You must be the third best',
  },
];

export const medalToCreate: Medal = {
  id: 4,
  name: 'New medal',
  description: 'New medal description',
  image: 'bild4',
  requirement: 'You must be the fourth best',
};

export default medals;
