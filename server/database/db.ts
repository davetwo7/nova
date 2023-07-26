// https://github.com/vitaly-t/pg-promise-demo/blob/master/TypeScript/db/index.ts

const pgp = require('pg-promise')()

const connection = {
  host: 'localhost',
  port: 5432,
  database: 'nova_db',
  user: 'postgres',
  password: '',
  max: 30
}

const db = pgp(connection);

db.connect()
.then((success) => {
  success.done()
  console.log('Connection to "nova_db" successful.')
})
.catch((err) => {
  console.log('There was an error connecting to the database.: ', err.message || err)
})

export default db;