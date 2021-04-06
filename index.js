require('./exit-handler')
const { argv } = require('./comander')
const { invokeAction } = require('./invoke-action')

invokeAction(argv)
