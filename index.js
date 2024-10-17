// index.js
require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const { sequelize } = require('./models/Employee');
const employeeTypeDefs = require('./typeDefs/employeeTypeDefs');
const employeeResolvers = require('./resolvers/employeeResolvers');

const server = new ApolloServer({
  typeDefs: employeeTypeDefs,
  resolvers: employeeResolvers,
});

sequelize.sync().then(() => {
  server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}).catch(error => console.error('Unable to connect to the database:', error));
