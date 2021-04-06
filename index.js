const {
  listContacts,
  getContactById,
  removeContact,
  addContact
} = require('./contacts')

// listContacts()
// getContactById(4)
// removeContact(3)
addContact('Serhii', 'dem@com.ua', '333-333-333')

process.on('exit', code => {
  switch (code) {
    case 0:
      console.log('Goodbye!')
      return
    case 1000:
      console.log(`Read file error. Exit code: ${code}`)
      return
    case 1001:
      console.log(`Write file error. Exit code: ${code}`)
      return
    case 1002:
      console.log(`Contact not found. Exit code: ${code}`)
      return
    default:
      console.log(`Unknown error code. Exit code: ${code}`)
  }
})
