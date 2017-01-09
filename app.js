'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('hey, what\'s up!');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});