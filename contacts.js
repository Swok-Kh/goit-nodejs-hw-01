const fs = require("fs");
const path = require("path");

const contactsPath = path.parse("./db/contacts.json");

module.exports = contactsPath;
