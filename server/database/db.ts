// import pgPromise from 'pg-promise' ;
import pgPromise, { IMain, IDatabase } from 'pg-promise';

interface IConnectionParameters {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
  min: number;
  max: number;
}



const connection: IConnectionParameters = {
  host: 'localhost',
  port: 5432,
  database: 'nova_db',
  user: 'postgres',
  password: '',
  min: 2,
  max: 30
}

const pgp: IMain = pgPromise();

const db: IDatabase<any> = pgp(connection);

db.connect()
.then((success) => {
  success.done()
  console.log('Connection to "nova_db" successful.')
})
.catch((err) => {
  console.log('There was an error connecting to the database.: ', err.message || err)
})

export default db;