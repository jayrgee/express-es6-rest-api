import sql, { Request } from "mssql";

const model = {
  getProducts: async (pageNumber = 1, pageSize = 10) => {
    try {
      const request = new Request();
      request.input("pageNumber", sql.Int, pageNumber);
      request.input("pageSize", sql.Int, pageSize);

      const dataset = await request.execute("GetProductsByPage");
      return dataset.recordsets;
    } catch (err) {
      console.log(err);
      return { err };
    }
  }
};

export default model;
