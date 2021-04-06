const {
  listContacts,
  getContactById,
  removeContact,
  addContact
} = require('./contacts')

const invokeAction = ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      listContacts()
      break

    case 'get':
      if (id && +id) {
        getContactById(+id)
      } else {
        process.exit(1005)
      }
      break

    case 'add':
      if (name && email && phone) {
        addContact(name, email, phone)
      } else process.exit(1005)
      break

    case 'remove':
      if (id && +id) {
        removeContact(+id)
      } else process.exit(1005)
      break

    default:
      process.exit(1004)
  }
}

module.exports = { invokeAction }
