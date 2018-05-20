import { Router } from "express";

import databases from "../models/databases";

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await databases.getDatabases();
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

router.get("/:id", async (req, res, next) => {
  try {
    const result = await databases.getDatabaseById(req.params.id);
    if (result.err) {
      res.sendStatus(500).send(result.err);
    }

    if (result.length) {
      res.send(result[0]);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

export default router;
