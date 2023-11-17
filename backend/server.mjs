import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import routes from './routes/db-routes.mjs';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', routes);

const PORT = process.env.PORT || 80;

app.listen(PORT, ()=> console.log(`Server körs på port ${PORT}`))