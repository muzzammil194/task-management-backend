import express from 'express';
import routes from './controllers/task.controller';
import 'dotenv/config'
const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});