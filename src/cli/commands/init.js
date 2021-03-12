const {indexOf, isEmpty, keys, all} = require('ramda')
const {exists, exit, readFile, writeFile, log, header} = require('../utils')
const {customConfigFile, studsSimpleConfigFile, studsAllConfigFile} = require('../config')

const config = {
  usage: 'init [option]',
  description: 'Creates ztoo config file.',
  options: [
    {
      description: 'generate simple configuration file.',
    },
    {
      option: '--full',
      description: 'generate complete configuration file.',
    }
  ]
}

function validate(options) {
  if(isEmpty(options)) {
    return true
  }

  const builtInOptions = ['full']
  return all(option => indexOf(option, builtInOptions) > -1, keys(options))
}

function run(options) {
  return new Promise(function(resolve) {
    header()

    const file = isEmpty(options) ? studsSimpleConfigFile : studsAllConfigFile

    if(exists(customConfigFile)) {
      exit(customConfigFile, 'already exists.')
    }

    writeFile(
      customConfigFile,
      readFile(file).replace('../colors', 'ztoocss/colors')
    )

    log('Created ztoo config file:', customConfigFile)

    log()
    resolve()
  })
}

module.exports = {
  config,
  validate,
  run
}
