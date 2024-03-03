const { pool } = require("../config/connection");

class Client {
  constructor(pool) {
    // pass in pool connection
    this.pool = pool;
  }
  // method to query database with pool connection
  async query({ text, values: [] }) {
    const client = await this.pool.connect();
    try {
      // pass query config object
      const res = await client.query({ text, values });
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
  }
}

module.exports = { Client };
