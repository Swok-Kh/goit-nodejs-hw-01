const fs = require('fs')
const path = require('path')
const { successMessage } = require('./utils/message')

const contactsPath = path.resolve('./db/contacts.json')

// Prints a list of contacts to the console.
const listContacts = () => {
  fs.readFile(contactsPath, (err, data) => {
    if (err) {
      process.exit(1000)
    }
    const rawData = data.toString()
    if (!rawData) {
      process.exit(1002)
    }
    const contacts = JSON.parse(rawData)
    if (contacts.length === 0) {
      successMessage('Contacts list is empty!')
      return
    }
    console.table(contacts)
  })
}

// Displays the contact found by id to the console.
const getContactById = contactId => {
  fs.readFile(contactsPath, (err, data) => {
    if (err) {
      process.exit(1000)
    }
    if (!data.toString()) {
      process.exit(1002)
    }
    const contacts = JSON.parse(data.toString())
    const foundContact = contacts.find(({ id }) => id === contactId)
    if (foundContact) console.table([foundContact])
    else process.exit(1006)
  })
}

// Removes contact found by id.
function removeContact(contactId) {
  fs.readFile(contactsPath, (err, data) => {
    if (err) {
      process.exit(1000)
    }
    if (!data.toString()) {
      process.exit(1002)
    }
    const contacts = JSON.parse(data.toString())
    const filteredContacts = contacts.filter(({ id }) => id !== contactId)
    if (contacts.length === filteredContacts.length) {
      process.exit(1006)
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
    let contacts
    let id
    if (!data.toString()) {
      contacts = []
      id = 1
    } else {
      contacts = JSON.parse(data.toString())
      id = contacts.length === 0 ? 1 : contacts[contacts.length - 1].id + 1
    }

    if (name && email && phone) {
      contacts.push({ id, name, email, phone })
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
