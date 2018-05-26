import sql, { Request } from "mssql";

const model = {
  getProducts: async (page = 1, limit = 10) => {
    //console.log({ page, limit });
    try {
      const request = new Request();
      request.input("pageNumber", sql.Int, page);
      request.input("pageSize", sql.Int, limit);

      const dataset = await request.execute("GetProductsByPage");
      return dataset.recordsets;
    } catch (err) {
      console.log(err);
      return { err };
    }
  }
};

export default model;
