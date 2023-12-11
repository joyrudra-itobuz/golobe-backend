import { Client } from 'pg';

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'balmerol',
  port: 5432,
});

export default function connectToPostgres() {
  try {
    client.connect();
    console.log('Connected! ✅');

    getData();
  } catch (error) {
    console.log(error);
  }
}

async function getData() {
  try {
    const res = await client.query(`Select * from car`);

    // const res2 = await client.query(
    //   `insert into car values(${uuid()}, '2010', 'Honda', 'Jon', 110)`
    // );

    // console.log(res2.rows);

    console.log(res.rows);
  } catch (error) {
    console.log(error);
  }
}
