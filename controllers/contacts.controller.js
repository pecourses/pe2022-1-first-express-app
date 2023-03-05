const createError = require('http-errors');
const { ContactDB } = require('./../models');

// req.query

module.exports.getContacts = (req, res) => {
  const { page = 1, results = 5 } = req.query;
  const contacts = ContactDB.getContacts(page, results);
  res.status(200).send(contacts);
};

module.exports.createContact = (req, res) => {
  const { body } = req;

  const createdContact = ContactDB.createContact(body);
  res.status(201).send(createdContact);
};

module.exports.getContactById = (req, res, next) => {
  const { id } = req.params;

  const foundContact = ContactDB.getContactById(id);

  if (foundContact) {
    return res.status(200).send(foundContact);
  }
  // res.status(404).send('Contact Not Found');
  next(createError(404, 'Contact Not Found'));
};

module.exports.updateContactById = (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;

  const updatedContact = ContactDB.updateContact(id, body);

  if (updatedContact) {
    return res.status(200).send(updatedContact);
  }
  // res.status(404).send('Contact Not Found');
  next(createError(404, 'Contact Not Found'));
};

module.exports.deleteContactById = (req, res, next) => {
  const {
    params: { id },
  } = req;

  const deleteContact = ContactDB.deleteContact(id);

  if (deleteContact) {
    return res.status(204).send();
  }
  // res.status(404).send('Not Found');
  next(createError(404, 'Contact Not Found'));
};
