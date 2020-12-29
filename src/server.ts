import express from 'express';
import { router } from './routes/routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router)

const PORT: number = process.env.PORT ? parseInt(process.env.PORT as string, 10) : 3000;

 app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});