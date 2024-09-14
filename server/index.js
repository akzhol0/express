import express from 'express';

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.status(201).send('Hello!')
});

app.get('/api/users', (req, res) => {
  
});

app.listen(PORT, () => {
  console.log('connected to the port ' + PORT);
});
