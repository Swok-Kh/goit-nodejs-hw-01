const errorMessage = message => {
  console.error(`\x1b[41m\x1b[30m ${message} \x1b[37m\x1b[40m`)
}
const successMessage = message => {
  console.log(`\x1b[42m\x1b[30m ${message} \x1b[37m\x1b[40m`)
}

module.exports = {
  errorMessage,
  successMessage
}
