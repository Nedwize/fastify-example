const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

const userRoutes = require('./routes/users');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoutes);

app.get('/', (req, res) => {
  res.json({ messsage: 'API OK' });
});

app.use('/*', (req, res) => {
  return res.status(404).json({ msg: 'Bad Request', status: res.statusCode });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});
