import knex from './database';

type Medal = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const createMedal = async (
  name: string,
  description: string,
  image: string
) => {
  const medal = (
    await knex<Medal>('medals')
      .insert([
        {
          name,
          description,
          image,
        },
      ])
      .returning('*')
  )[0];
  console.log(medal);
};

const getMedals = async () => {
  const medals = await knex('medals').select('*');
  console.log(medals);
  return medals;
};

createMedal('Gold', 'Gold medal', 'gold.png');
