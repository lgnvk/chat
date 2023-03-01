function get(obj, path, defaultValue) {
  const keys = path.split('.')

  let result = obj

  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    result = result[key]

    if (result === undefined) {
      return defaultValue
    }
  }

  return result ?? defaultValue
}

class Templator {
  TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi

  constructor(template) {
    this._template = template
  }

  compile(context) {
    return this._compileTemplate(context)
  }

  _compileTemplate = (ctx) => {
    let tmpl = this._template
    let key = null
    const regExp = this.TEMPLATE_REGEXP

    while ((key = regExp.exec(tmpl))) {
      if (key[1]) {
        const tmplValue = key[1].trim()
        const data = get(ctx, tmplValue)
        tmpl = tmpl.replace(new RegExp(key[0], 'gi'), data)
      }
    }

    return tmpl
  }
}

export default Templator;
