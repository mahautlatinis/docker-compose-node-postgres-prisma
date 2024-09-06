import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const PORT = 3000;

const app = express();

app.use(cors());

const prisma = new PrismaClient();

app.listen(PORT, () => {});

app.get('/', async (req, res) => {
  res.json('hello');
});

app.get('/user', async (req, res) => {
  const client = await prisma.user.findMany({});
  res.json(JSON.stringify(client));
});
