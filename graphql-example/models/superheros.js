import mongoose from 'mongoose';
import uuid from 'node-uuid';
const schema = mongoose.Schema;
const superheroSchema = new schema({
  id: {type: String, default: uuid.v1},
  name: String, 
  age: Number,
  gender: String
});

const model = mongoose.model('superhero', superheroSchema);
export default model;