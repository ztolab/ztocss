const help = require('./help')
const {exit, parseCli} = require('../utils')

const commands = {
  init: require('./init'),
  build: require('./build')
}

module.exports = function(args) {
  const {commandName, options} = parseCli(args)
  const command = commands[ commandName ]

  const commandPromise = command && command.validate(options)
    ? command.run(options)
    : help.run(commands, commandName)

  commandPromise.catch(err => exit(err.stack))
}
