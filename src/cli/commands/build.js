const { PurgeCSS } = require('purgecss')
const {indexOf, keys, all, mergeDeepLeft, forEachObjIndexed, is, dissoc, map} = require('ramda')
const {exists, exit, writeFile, log, header, absolutePath} = require('../utils')
const {config:allConfig, render} = require('../../../ztoo')
const {customConfigFile} = require('../config')

const config = {
  usage: 'build [options]',
  description: 'Compiles ztoo CSS file.',
  options: [
    {
      option: '-o, --output <file>',
      description: 'Output file.',
    },
    {
      option: '-c, --config <file>',
      description: 'ztoo config file.',
    }
  ]
}

function validate(options) {
  const builtInOptions = ['output', 'o', 'config', 'c']

  return all(option => indexOf(option, builtInOptions) > -1, keys(options))
}

function run(options) {
  return new Promise(function(resolve) {
    header()
    log('Building...')

    getCSSRules(options).then(rules => {
      const outputFile = absolutePath(options.output || options.o || './ztoo.css')

      writeFile(outputFile, rules)

      log('Saved to', outputFile)
      log()
      resolve()
    })
  })
}

function getCSSRules(options) {
  return new Promise(function(resolve) {
    let optionConfig = options.config || options.c
    let rules = ''
    let cfg = allConfig

    if(optionConfig !== void 0) {
      optionConfig = absolutePath(optionConfig)

      if(!exists(optionConfig)) {
        exit(optionConfig, 'dose not exist')
      }

      cfg = require(optionConfig)
      rules = render(cfg)
    }
    else if(exists(customConfigFile)) {
      cfg = merge(allConfig, require(customConfigFile))
      rules = render(cfg)
    }
    else {
      rules = render()
    }

    if(is(Array, cfg.purge) && cfg.purge.length) {
      new PurgeCSS().purge({
        content: map(path => absolutePath(path), cfg.purge),
        css: [{raw: rules}]
      })
      .then(res => res && res[0] && resolve(res[0].css))
    }
    else {
      resolve(rules)
    }
  })
}

function merge(allConfig, customConfig) {
  const result = Object.create(null)

  if(!is(Object, customConfig)) {
    return allConfig
  }

  forEachObjIndexed((val, key) => {
    const customItem = customConfig[key] || {}
    let itemConfig = customConfig[key] !== void 0 ? customConfig[key] : val

    if(indexOf(key, ['constant', 'theme']) > -1) {
      let temp = val
      if(is(Object, customItem.extend)) {
        temp = mergeDeepLeft(customItem.extend, temp)
      }
      itemConfig = Object.assign({}, temp, dissoc('extend', customItem))
    }

    result[key] = itemConfig

  }, allConfig)

  return result
}

module.exports = {
  config,
  validate,
  run
}
