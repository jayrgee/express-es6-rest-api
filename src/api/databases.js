import { Router } from 'express';
import { Request } from 'mssql';

const router = new Router();

router.get('/', async (req, res, next) => {
  try {
    const request = new Request();
    const dataset = await request.query(`
      SELECT [id]=database_id, name
      FROM [sys].[databases]
    `);
    if (dataset.recordset.length) {
      res.send(dataset.recordset);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const request = new Request();
    request.input('id', req.params.id);
    const dataset = await request.query(`
      SELECT [id]=database_id, name
      FROM [sys].[databases] WHERE database_id = @id
    `);
    if (dataset.recordset.length) {
      res.send(dataset.recordset[0]);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

export default router;