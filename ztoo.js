const Compile = require('./src/compile')
const config = require('./studs/all.config')

module.exports = {
  config,
  render(opt) {
    return new Compile(opt || config).toString()
  }
}
