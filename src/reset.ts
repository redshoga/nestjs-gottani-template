import { createConnection, Connection } from 'typeorm';

(async () => {
  const ormconfig = require(process.env.ORMCONFIG || '../ormconfig.development.js');

  let connection: Connection;
  try {
    connection = await createConnection({
      ...ormconfig,
    });

    await connection.manager.query(`DROP DATABASE ${ormconfig.database}`);
    await connection.manager.query(`CREATE DATABASE ${ormconfig.database}`);
    await connection.close();
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
  }
})();
