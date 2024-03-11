const { pool } = require('../config/connection');

class Client {
  constructor(pool) {
    // pass in pool connection
    this.pool = pool;
  }
  // method to query database with pool connection
  // query obj needs text and value keys
  async query(obj) {
    const client = await this.pool.connect();
    try {
      // pass query config object
      const res = await client.query(obj);
      // return res
      return res;
    } finally {
      client.release();
    }
  }
  //   method to end session
  async endPool() {
    // ends connection to database
    await this.pool.end();
    console.log('Thank you for using Employee Post');
  }

  // array returns for queries

  // view methods
  // view departments
  viewDepts() {
    return this.query({ text: `SELECT * FROM department;` });
  }
  // view department with role budget calculated
  viewDeptsWithBudget() {
    // need group by when using SUM
    return this.query({
      text: `SELECT department.id, department.name, SUM(role.salary) AS budget FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id GROUP BY department.id, department.name ORDER BY budget DESC;`,
    });
  }

  viewRoles() {
    return this.query({
      text: `SELECT role.id, role.title, role.salary, role.full_time, department.name AS department FROM role JOIN department ON role.department_id = department.id;`,
    });
  }

  viewEmps() {
    return this.query({
      text: `SELECT employee.id, employee.first_name, employee.last_name, employee.hire_date, role.title AS position, role.salary AS salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN employee manager ON employee.manager_id = manager.id;`,
    });
  }

  viewEmpsByManager({ manager_id }) {}
}

module.exports = new Client(pool);
