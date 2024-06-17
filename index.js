const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, WarriorsWay Community ! Welcome to Full Stack web dev. Series');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});