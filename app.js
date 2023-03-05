const express = require('express');

const { validate, errorHandlers } = require('./middleware');
const { contactsController } = require('./controllers');

const app = express();

app.use(express.json());

app.get(
  '/',
  (req, res, next) => {
    console.log('handler 1 :>> ');
    next();
  },
  (req, res) => {
    console.log('handler 2 :>> ');
    res.send('app )))');
  }
);

// GET /constacts?page=1&results=5
app.get('/contacts/', contactsController.getContacts);

// POST /contacts (body)
app.post(
  '/contacts',
  validate.validateContactOnCreate,
  contactsController.createContact
);

// GET /contacts/5
app.get('/contacts/:id', contactsController.getContactById);

// PATCH /contacts/5 (body)
app.patch(
  '/contacts/:id',
  validate.validateContactOnUpdate,
  contactsController.updateContactById
);

// реалізувати endpoint для видалення конкретного контакту
// DELETE /contacts/5
app.delete('/contacts/:id', contactsController.deleteContactById);

app.use(errorHandlers.validationErrorHandler, errorHandlers.errorHandler);

module.exports = app;
