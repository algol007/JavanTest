const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'adyrahmansyah',
  host: 'localhost',
  database: 'family',
  password: '',
  port: 5432
});

module.exports = pool;