// @ts-nocheck
import pgPromise from 'pg-promise' ;


const connection = {
  host: 'localhost',
  port: 5432,
  database: 'nova_db',
  user: 'postgres',
  password: '',
  min: 2,
  max: 30
}

const pgp = pgPromise();

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