const normalize = require('./normalize')
const Hooks = require('./hooks')
const {map, forEachObjIndexed, filter, is, contains, values} = require('ramda')

class Compile {
  constructor(config) {
    const {constant, theme, prefix, separator} = config

    this.prefix = prefix
    this.separator = separator
    this.constant = constant
    this.theme = theme

    this.hooks = new Hooks(config)

    return this
  }

  toString() {
    const result = []
    const {theme, constant: {breakpoints}, hooks} = this

    const respListing = values(filter(r => contains('responsive', r.ABILITY || []), theme))
    const rules = (opt, breakpointAlias) => {
      return this.rule(opt, {breakpointAlias}) + this.abilityRule(opt, breakpointAlias)
    }

    result.push(normalize(this))
    map(opt => result.push(rules(opt)), theme)

    if(respListing.length) {
      const reps = '_@___@@__breakpointAlias@_@__' + +new Date
      const content = map(opt => rules(opt, reps), respListing).join('')

      for(let breakpointAlias in breakpoints) {
        result.push(hooks.breakpoint(
          content.replace(new RegExp(reps, 'g'), breakpointAlias),
          breakpoints[breakpointAlias])
        )
      }
    }

    return result.join('')
  }

  rule(option, selectorOption) {
    const rules = []
    const {PROP, VALUE, PSEUDO} = option
    const {hooks, separator} = this
    const realValue = r => r === 'DEFAULT' ? void 0 : r

    const props = PROP === void 0 ? {'': ''} : PROP
    const listing = hooks.type(VALUE, 'function') ? VALUE(hooks, {option}) : VALUE

    hooks.mix(props, listing, (property, selectorPrefix, value, suffix) => {

      const selector = this.getSelector({
        ...selectorOption,
        selector: this.join([realValue(selectorPrefix), realValue(suffix)], separator),
        configPseudo: PSEUDO,
      })
      const decl = this.decl({option, property, selector, value})

      rules.push(`${selector} {${decl}}\n`)
    })

    return rules.join('')
  }

  decl(opt) {
    let {option: {VARIABLE, GLOBAL}, property, value} = opt
    const {hooks} = this
    const res = []

    const callValue = val => hooks.type(val, 'function') ? val(hooks, opt) : val
    const push = (target, key, val) => target.push(`${key}:${val}`)
    const addObject = (target, data) => {
      return hooks.type(data, 'object')
        && forEachObjIndexed((val, key) => push(target, key, val), data)
    }

    addObject(res, callValue(VARIABLE))
    addObject(res, callValue(GLOBAL))

    value = callValue(value)
    property = callValue(property)

    if(hooks.type(value, 'object')) {
      forEachObjIndexed((val, key) => push(res, key, val), value)
    }
    else {
      switch(hooks.type(property)) {
        case 'string':
          push(res, property, value)
          break
        case 'array':
          map(prop => push(res, prop, value), property)
          break
        default:
          addObject(res, property)
      }
    }

    return res.join(';')
  }

  getSelector(selectorOption) {
    const {prefix, separator} = this
    const {selector, abilityAlias, breakpointAlias, root, configPseudo, pseudo} = selectorOption

    let res = ''

    if(this.hasVal(root)) {
      res += '.' + this.hooks.safe(this.join([prefix, root])) + ' '
    }

    res += '.' + this.hooks.safe(
      prefix +
      this.join([breakpointAlias, abilityAlias, selector], separator) +
      this.join([pseudo, configPseudo])
    )

    return res
  }

  abilityRule(option, breakpointAlias) {
    const abilityOption = option.ABILITY || []
    const result = []

    forEachObjIndexed(
      (ability, abilityAlias) => {
        if(abilityOption.indexOf(abilityAlias) > -1) {
          result.push(this.rule(option,
            {abilityAlias, breakpointAlias, ...ability}
          ))
        }
      },
      this.constant.abilities
    )

    return result.join('')
  }

  hasVal(val) {
    return val !== void 0 && val !== null && val !== ''
  }

  join(arr, separate='') {
    if(!is(Array, arr)) return arr
    return filter(r => this.hasVal(r), arr).join(separate)
  }
}

module.exports = Compile
