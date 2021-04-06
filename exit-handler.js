const { successMessage, errorMessage } = require('./utils/message')

process.on('exit', code => {
  switch (code) {
    case 0:
      successMessage('Goodbye!')
      return
    case 1000:
      errorMessage(`Read file error. Exit code: ${code}`)
      return
    case 1001:
      errorMessage(`Write file error. Exit code: ${code}`)
      return
    case 1002:
      errorMessage(`Contact not found. Exit code: ${code}`)
      return
    case 1004:
      errorMessage(`Unknown action type! Exit code: ${code}`)
      return
    case 1005:
      errorMessage(`Wrong parameters! Exit code: ${code}`)
      return
    default:
      errorMessage(`Unknown error code!. Exit code: ${code}`)
  }
})
