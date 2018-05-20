import { Request } from "mssql";

const databasesModel = {
  getDatabaseById: async id => {
    try {
      const request = new Request();
      request.input("id", id);
      const dataset = await request.query(`
        SELECT [id]=database_id, name
        FROM [sys].[databases] WHERE database_id = @id
      `);
      return dataset.recordset;
    } catch (err) {
      return { err };
    }
  },
  getDatabases: async () => {
    try {
      const request = new Request();
      const dataset = await request.query(`
        SELECT [id]=database_id, name
        FROM [sys].[databases]
      `);
      return dataset.recordset;
    } catch (err) {
      return { err };
    }
  }
};

export default databasesModel;
