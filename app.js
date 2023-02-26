const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('app )))');
});

// CRUD
app.get('/posts', (req, res) => {});
app.get('/posts/1', (req, res) => {});
app.post('/posts', (req, res) => {});
app.patch('/posts/1', (req, res) => {});
app.delete('/posts/1', (req, res) => {});

module.exports = app;
