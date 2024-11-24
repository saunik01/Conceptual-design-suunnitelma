// Use import instead of require for ES modules
import express from 'express';

const app = express();

// Basic route for home
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
