import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';

import apiRouter from './routes/apiRouter';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname,'../client/build')));

app.use('/api/recipes', apiRouter);
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use((err: Error, req: Request, res: Response, next: CallableFunction): void => {
  res.status(500);
  res.json({ error: err.message });
});

app.listen(port, (): void => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
