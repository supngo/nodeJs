// import axios from 'axios';
import superhero from './models/superheros';

// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    getAllPersons: () => {
      // return persons
      return superhero.find();
    },
    getPerson: (root, {id}) => {
      // const age = args.age;
      return superhero.findOne({id: id});
    }
  },
  Mutation: {
    addPerson: (root, {name, age, gender}) => {
      const person = new superhero({age: age, name: name, gender: gender})
      return person.save();
    },
    deletePerson: (root, {id}) => {
      // return superhero.remove({id: id});
      return superhero.findOneAndRemove({id: id});
    },
    updatePerson: (root, {id, name, age, gender}) => {
      return superhero.findOneAndUpdate({id: id}, {name: name, age: age, gender: gender});
    }
  }
  // Query: {
  // test_query: (parent, args) => {
  //   return axios.get(`www.apiurl.com/people`)
  //   .then((response) => response.data)
  //   .catch((error) => console.log(error))
  // }
};

export default RESOLVERS;