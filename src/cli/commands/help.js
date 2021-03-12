const {log, header, space} = require('../utils')
const {forEachObjIndexed} = require('ramda')

exports.run = function(commands, commandName) {
  return new Promise(function(resolve) {
    header()
    const command = commands[commandName]

    if(!command) { allHelpInfo(commands) }
    else { commandHelpInfo(command, commandName) }

    log()
    resolve()
  })
}

function allHelpInfo(commands) {
  log('Usage:')
  log('  ztoocss <command> [options]')
  log()
  log('Commands:')

  forEachObjIndexed(
    (opt, command) => {
      log(space(`  ztoocss ${command} [options]`), opt.config.description)
    },
    commands
  )
}

function commandHelpInfo(command, commandName) {
  let helpOpt = command.config
  log('Usage:')
  log(`  ztoocss ${helpOpt.usage}  ${helpOpt.description}`)
  log()
  log('Commands:')

  forEachObjIndexed(
    opt => {
      let option = opt.option ? [opt.option] : []
      if(opt.alias) {
        option.push(opt.alias)
      }
      log(space(`  ztoocss ${commandName} ${option.join(', ')}`), opt.description)
    },
    helpOpt.options
  )
}
