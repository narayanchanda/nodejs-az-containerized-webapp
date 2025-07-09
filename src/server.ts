import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World from TypeScript!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
