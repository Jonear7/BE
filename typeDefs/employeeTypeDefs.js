// typeDefs/employeeTypeDefs.js
const { gql } = require('apollo-server');

const employeeTypeDefs = gql`
  type Employee {
    id: ID!
    name: String!
    position: String!
    salary: Float!
  }

  type Query {
    getAllEmployees: [Employee]
    getEmployee(id: ID!): Employee
  }

  type Mutation {
    createEmployee(name: String!, position: String!, salary: Float!): Employee
    updateEmployee(id: ID!, name: String, position: String, salary: Float): Employee
    deleteEmployee(id: ID!): String
  }
`;

module.exports = employeeTypeDefs;
