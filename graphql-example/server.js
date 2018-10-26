import express from 'express';
import SERVER from './schema';
import mongoose from 'mongoose';

const server = express();

// Middleware: GraphQL
  SERVER.applyMiddleware({
  app: server
});

mongoose.connect('mongodb://localhost:27017/graphql');
const conn = mongoose.connection;
conn.once('open', () => {
  console.log('connection to database was successful!')
});

// Express: Port
const PORT = 4000 || process.env;

// Express: Listener
server.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});

export default server;

