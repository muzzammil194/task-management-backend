import express from 'express';
import routes from './controllers/news-controller';
import 'dotenv/config'
const PORT = process.env.PORT ?? 3000;
const app = express();
import cors from 'cors'


app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});