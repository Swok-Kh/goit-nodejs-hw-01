const fs = require('fs')
const path = require('path')
const { successMessage } = require('./utils/message')

const contactsPath = path.normalize('./db/contacts.json')

// Prints a list of contacts to the console.
const listContacts = () => {
  fs.readFile(contactsPath, (err, data) => {
    if (err) {
      process.exit(1000)
    }
    console.table(JSON.parse(data.toString()))
  })
}

// Displays the contact found by id to the console.
const getContactById = contactId => {
  fs.readFile(contactsPath, (err, data) => {
    if (err) {
      process.exit(1000)
    }
    const contacts = JSON.parse(data.toString())
    const foundContact = contacts.find(({ id }) => id === contactId)
    if (foundContact) console.table([foundContact])
    else process.exit(1002)
  })
}

// Removes contact found by id.
function removeContact(contactId) {
  fs.readFile(contactsPath, (err, data) => {
    if (err) {
      process.exit(1000)
    }
    const contacts = JSON.parse(data.toString())
    const filteredContacts = contacts.filter(({ id }) => id !== contactId)
    if (contacts.length === filteredContacts.length) {
      process.exit(1002)
    }
    fs.writeFile(contactsPath, JSON.stringify(filteredContacts), err => {
      if (err) {
        process.exit(1001)
      }
      successMessage(
        `Contact with id ${contactId} was deleted. Saved successfully!`
      )
    })
  })
}

// Adds contact. Required data: name, email address, phone.
function addContact(name, email, phone) {
  fs.readFile(contactsPath, (err, data) => {
    if (err) {
      process.exit(1000)
    }
    const contacts = JSON.parse(data.toString())
    const id = contacts[contacts.length - 1].id + 1
    contacts.push({ id, name, email, phone })

    if (name && email && phone) {
      fs.writeFile(contactsPath, JSON.stringify(contacts), err => {
        if (err) {
          process.exit(1001)
        }
        successMessage('Contact was added. Saved successfully!')
      })
    }
  })
}

module.exports = { listContacts, getContactById, removeContact, addContact }
