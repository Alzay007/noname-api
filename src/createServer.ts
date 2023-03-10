import express from 'express';
import cors from 'cors';

import { router as goodsRouter } from './router/goods.js';

export function createServer() {
  const app = express();

  app.use(express.static('./src'));

  app.use(cors());
  app.use('/goods', goodsRouter);

  app.get('/', (req, res) => {
    res.send('Hi');
  });

  return app;
}