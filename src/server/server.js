const express = require('express');
const rollRouter = require('./routes/rollRouter');
const fsCallback = require('fs');
const app = express();
const path = require('path');
const PORT = 3000;
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//server index html
app.get('/', (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.get('/styles.css', (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../client/styles.css'));
});

app.get('/api', (req, res) => {
  return res.status(200).json('status 200');
});

app.use('/api/roll', rollRouter);

app.use((req, res) =>
  res.status(404).sendFile(path.resolve(__dirname, '../client/404.html')),
);

/* start server */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
