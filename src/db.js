import sql from "mssql";

const dbConfig = {
  user: process.env.DB_USER || 'user',
  password: process.env.DB_PASS || 'password',
  server: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'mssqlDb'
};

export default async callback => {
  // connect to a database if needed, then pass it to `callback`:
  try {
    const pool = await sql.connect(dbConfig);
    console.log(`connected to ${dbConfig.database} as ${dbConfig.user}`);
    callback(sql);
  } catch (err) {
    // ... error checks
    console.log(err);
  }
}
