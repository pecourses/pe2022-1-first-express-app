const { ContactDB } = require('./../models');

module.exports.getContacts = (req, res) => {
  const contacts = ContactDB.getContacts();
  res.status(200).send(contacts);
};

module.exports.createContact = (req, res) => {
  const createdContact = ContactDB.createContact(req.body);
  res.status(201).send(createdContact);
};

module.exports.getContactById = (req, res) => {
  // перевірити, чи є контакт з заданим id
  const foundContact = ContactDB.getContactById(req.params.id);
  if (foundContact) {
    // якщо є, то 200 і відправити
    res.status(200).send(foundContact);
  } else {
    // якщо нема, то 404 Contact Not Found
    res.status(404).send('Contact Not Found');
  }
};
