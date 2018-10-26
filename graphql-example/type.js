import { gql } from 'apollo-server-express';

// GraphQL: TypeDefs
const TYPEDEFS = gql`
  type Query {
    getAllPersons: [Person]
    getPerson(id: String!): Person
  }

  type Mutation {
    addPerson(name: String!, age: Int!, gender: String!): Person
    deletePerson(id: String!): Person
    updatePerson(id: String!, name: String!, age: Int, gender: String): Person
  }

  type Person {
    id: String
    name: String
    age: Int
    gender: String
  }
`;

export default TYPEDEFS;