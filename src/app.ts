
import express from 'express';
const app = express();
const port = 3000;

app.use(express.json());

import userRoutes from './routes/users';
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});