import { ApolloServer, gql } from 'apollo-server-express';
import TYPDEFS from './type.js';
import RESOLVERS from './resolver';

const schema = new ApolloServer({
  typeDefs: TYPDEFS,
  resolvers: RESOLVERS,
  playground: {
    endpoint: `http://localhost:4000/graphql`,
    settings: {
      'editor.theme': 'light'
    }
  }
});

export default schema;