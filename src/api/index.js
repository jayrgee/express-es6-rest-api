import { Router } from "express";
import paginate from "express-paginate";

import { version } from "../../package.json";
import facets from "./facets";
import databases from "./databases";
import products from "./products";

export default ({ config, db }) => {
  let api = Router();

  // keep this before all routes that will use pagination
  api.use(paginate.middleware(10, 50));

  // mount the facets resource
  api.use("/facets", facets({ config, db }));
  api.use("/databases", databases);
  api.use("/products", products);

  // perhaps expose some API metadata at the root
  api.get("/", (req, res) => {
    res.json({ version });
  });

  return api;
};
