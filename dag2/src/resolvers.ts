import { Resolvers } from './generated/graphql';

const resolvers: Resolvers = {
  Query: {
    medals: () => {
      return [
        {
          id: 1,
          name: 'Medal 1',
          description: 'Medal 1 description',
          requirement: 'Medal 1 requirement',
          image:
            'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        },
      ];
    },
  },
};

export default resolvers;
