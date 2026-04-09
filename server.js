import express from 'express';

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/data', (req, res) => {
  const data = {
    message: 'This is some sample data from the mac',
    timestamp: new Date()

  };
  res.json(data);
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 
