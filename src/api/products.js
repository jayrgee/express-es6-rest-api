import { Router } from "express";

import products from "../models/products";

const router = new Router();

router.get("/", async (req, res, next) => {
  //console.log(req.query);
  const { page, limit } = req.query;
  try {
    const result = await products.getProducts(page, limit);
    if (result.err) {
      res.sendStatus(500).send(result.err);
    }

    if (result.length) {
      res.send(result);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

export default router;
