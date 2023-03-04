const express = require('express');
const { ContactDB } = require('./models');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('app )))');
});

app.get('/contacts/', (req, res) => {
  const contacts = ContactDB.getContacts();
  res.status(200).send(contacts);
});

app.post('/contacts', (req, res) => {
  const createdContact = ContactDB.createContact(req.body);
  res.status(201).send(createdContact);
});

// params, req
// GET localhost:5000/contacts/10?results=10&page=5
// :id - параметр маршрута
// ?results=10&page=5 - параметри рядка запиту
app.get('/contacts/:id', (req, res) => {
  const {
    params: { id },
    query: { results, page },
  } = req;

  console.log('req.params :>> ', req.params);
  console.log('req.query :>> ', req.query);

  res.status(200).send('OK');
});

module.exports = app;

// звернутися до всіх замовлень певного користувача, зокрема до виконаних
// (від загального до конретного)
// users/5/orders?isDone=true
// прописати обробник, в якому витягти id користувача і дані для фільтру замовлень
app.get('/users/:id/orders', (req, res) => {
  const {
    params: { id },
    query: { isDone },
  } = req;

  console.log('id, isDone :>> ', id, isDone);
  res.status(200).send('OK');
});
