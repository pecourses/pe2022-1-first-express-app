const { contactsController } = require('./controllers');

const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('app )))');
});

// GET /constacts
app.get('/contacts/', contactsController.getContacts);

// POST /contacts (body)
app.post('/contacts', contactsController.createContact);

// GET /contacts/5
app.get('/contacts/:id', contactsController.getContactById);

// PATCH /contacts/5 (body)
app.patch('/contacts/:id', contactsController.updateContactById);

// реалізувати endpoint для видалення конкретного контакту
// DELETE /contacts/5
app.delete('/contacts/:id', contactsController.deleteContactById);

module.exports = app;
