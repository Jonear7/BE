// resolvers/employeeResolvers.js
const { Employee } = require('../models/Employee');

const employeeResolvers = {
  Query: {
    getAllEmployees: async () => {
      return await Employee.findAll();
    },
    getEmployee: async (_, { id }) => {
      return await Employee.findByPk(id);
    },
  },
  Mutation: {
    createEmployee: async (_, { name, position, salary }) => {
      return await Employee.create({ name, position, salary });
    },
    updateEmployee: async (_, { id, name, position, salary }) => {
      const employee = await Employee.findByPk(id);
      if (!employee) throw new Error('Employee not found');
      return await employee.update({ name, position, salary });
    },
    deleteEmployee: async (_, { id }) => {
      const employee = await Employee.findByPk(id);
      if (!employee) throw new Error('Employee not found');
      await employee.destroy();
      return `Employee with id ${id} deleted`;
    },
  },
};

module.exports = employeeResolvers;
