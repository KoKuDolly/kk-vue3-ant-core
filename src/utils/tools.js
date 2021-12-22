export const typeOf = (obj) => {
  const { toString } = Object.prototype
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object',
  }
  return map[toString.call(obj)]
}

export function deepCopy(data) {
  const t = typeOf(data)
  let o

  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return data
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i += 1) {
      o.push(deepCopy(data[i]))
    }
  } else if (t === 'object') {
    Object.keys(data).forEach((key) => {
      o[key] = deepCopy(data[key])
    })
  }
  return o
}

export function formatJson(jsonStr) {
  function repeat(s, count) {
    return new Array(count + 1).join(s)
  }
  var json = jsonStr

  var i = 0
  var len = 0
  var tab = '    '
  var targetJson = ''
  var indentLevel = 0
  var inString = false
  var currentChar = null

  for (i = 0, len = json.length; i < len; i += 1) {
    currentChar = json.charAt(i)

    switch (currentChar) {
      case '{':
      case '[':
        if (!inString) {
          targetJson += currentChar + '\n' + repeat(tab, indentLevel + 1)
          indentLevel += 1
        } else {
          targetJson += currentChar
        }
        break
      case '}':
      case ']':
        if (!inString) {
          indentLevel -= 1
          targetJson += '\n' + repeat(tab, indentLevel) + currentChar
        } else {
          targetJson += currentChar
        }
        break
      case ',':
        if (!inString) {
          targetJson += ',\n' + repeat(tab, indentLevel)
        } else {
          targetJson += currentChar
        }
        break
      case ':':
        if (!inString) {
          targetJson += ': '
        } else {
          targetJson += currentChar
        }
        break
      case ' ':
      case '\n':
      case '\t':
        if (inString) {
          targetJson += currentChar
        }
        break
      case '"':
        if (i > 0 && json.charAt(i - 1) !== '\\') {
          inString = !inString
        }
        targetJson += currentChar
        break
      default:
        targetJson += currentChar
        break
    }
  }
  return targetJson
}
