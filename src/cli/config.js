const {absolutePath} = require('./utils')
const path = require('path')

module.exports = {
  customConfigFile: absolutePath('./ztoo.config.js'),
  studsSimpleConfigFile: path.resolve(__dirname, '../../studs/simple.config.js'),
  studsAllConfigFile: path.resolve(__dirname, '../../studs/all.config.js'),
}
