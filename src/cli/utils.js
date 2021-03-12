const { copyFileSync, ensureFileSync, existsSync, outputFileSync, readFileSync } = require('fs-extra')
const chalk = require('chalk')
const packageJson = require('../../package.json')
const path = require('path')
const {compose, trim, toLower} = require('ramda')

function header() {
  log()
  log(packageJson.name, packageJson.version)
}

function log(...msgs) {
  console.log(chalk.cyan('  ', ...msgs))
}

function error(...msgs) {
  console.log(chalk.red('  ', ...msgs))
}

function exit(...msgs) {
  if(msgs.length) {
    error(...msgs)
    log()
  }
  process.exit(1)
}

function copyFile(source, destination) {
  copyFileSync(source, destination)
}

function readFile(paths) {
  return readFileSync(paths, 'utf-8')
}

function writeFile(paths, content) {
  ensureFileSync(paths)
  return outputFileSync(paths, content)
}

function exists(paths) {
  return existsSync(paths)
}

function space(str, len=28) {
  if(str.length < len) {
    let i = 0
    const count = len - str.length

    for(; i<count; i++) { str += ' ' }
  }
  return str
}

/**
 * absolute path
 */
function absolutePath(paths) {
  return path.resolve(process.cwd(), paths)
}

/**
 * @param {Array} args
 *
 * @example
 *   parseCli(["build", "--init", "--config", "./ztoo.config.js", "-o", "./ztoo.css"])
 *   => {
 *     commandName: 'build',
 *     options: {
 *       init: true,
 *       config: './ztoo.config.js',
 *       o: './ztoo.css'
 *     }
 *   }
 *
 */
function parseCli(args) {
  const commandName = args[0]
  const options = {}

  let name = ''
  args.slice(1).forEach(arg => {
    arg = compose(trim, toLower)(arg)

    if(arg.indexOf('-') === 0) {
      name = arg.replace(/^-+/, '')
      options[name] = true
    }
    else if(name) {
      options[name] = arg
      name = void 0
    }
  })

  return {commandName, options}
}

module.exports = {
  header,
  log,
  error,
  exit,
  copyFile,
  readFile,
  writeFile,
  exists,
  space,
  absolutePath,
  parseCli
}
