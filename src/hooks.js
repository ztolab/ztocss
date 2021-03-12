const Color = require('color')
const {map, forEachObjIndexed, is} = require('ramda')

class Hooks {
  constructor(options) {
    this.constant = options.constant
    map(
      fn => this[fn] = this[fn].bind(this),
      [
        'config', 'palette', 'rgba', 'minus',
        'each', 'through', 'type', 'safe', 'mix', 'breakpoint'
      ]
    )
    return this
  }

  config(name) {
    return this.constant[name]
  }

  palette(alpha) {
    const result = {}
    forEachObjIndexed((color, colorAlias) => {
      if(is(String, color)) {
        result[colorAlias] = this.rgba(color, alpha)
      }
      else if(is(Object, color)) {
        forEachObjIndexed((val, suffix) => {
          result[`${colorAlias}-${suffix}`] = this.rgba(val, alpha)
        }, color)
      }
    }, this.constant.colors)

    return result
  }

  rgba(hex, alpha=1) {
    let rgba = (hex+'').toLowerCase().trim()
    if(alpha === 1 || rgba === 'transparent') return hex

    try {
      let c = Color(hex)
      rgba = `rgba(${c.red()}, ${c.green()}, ${c.blue()}, ${alpha})`
    }
    catch(err) {}

    return rgba
  }

  minus(data) {
    const result = {}
    const test = val => /^([1-9]|0\.)/.test(val)

    if(this.type(data, 'object')) {
      forEachObjIndexed((val, key) => {
        if(test(val)) {
          result[`-${key}`] = `-${val}`
        }
      }, data)
    }

    return result
  }

  each(callback, object) {
    return forEachObjIndexed(callback, object)
  }

  through(callback, end, start=1, prefix='', suffix='') {
    let res = {}

    start = start | 0
    end = end | 0

    if(this.type(callback, 'function')) {
      for(;start <= end; start++) {
        res[prefix+start+suffix] = callback(start)
      }
    }

    return res
  }

  type(obj, type) {
    let t = Object.prototype.toString.call(obj).slice(8)
    t = t.slice(0, t.length - 1).toLowerCase()

    if(type !== void 0) {
      return t === ('' + type).toLowerCase()
    }

    return t
  }

  safe(val) {
    return (val + '').replace(/(\.|\/)/g, '\\$1')
  }

  mix(obja, objb, callback) {
    forEachObjIndexed(
      (aVal, aKey) => forEachObjIndexed(
        (bVal, bKey) => callback(aVal, aKey, bVal, bKey), objb
      ),
      obja
    )
  }

  breakpoint(content, start, end='up') {
    let mstart = ''
    switch(end) {
      case 'up':
        mstart = `@media screen and (min-width: ${start})`
        break
      case 'down':
        mstart = `@media screen and (max-width: ${start})`
        break
      default:
        mstart = `@media screen and (min-width: ${start}) and (max-width: ${end})`
    }

    return `${mstart} {\n${content}}\n`

  }
}

module.exports = Hooks
