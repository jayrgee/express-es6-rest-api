import sql, { Request } from "mssql";

const model = {
  getProducts: async (page = 1, limit = 10) => {
    try {
      const request = new Request();
      request.input("PageNumber", sql.Int, page);
      request.input("PageSize", sql.Int, limit);

      const dataset = await request.execute("GetProductsByPage");
      return dataset.recordset;
    } catch (err) {
      console.log(err);
      return { err };
    }
  }
};

export default model;
