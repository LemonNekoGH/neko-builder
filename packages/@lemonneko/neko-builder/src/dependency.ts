interface Dependency {
    type: string
    group: string
    name: string
    version: string
}

function isId (str: string): boolean {
  const regexp = /([a-zA-Z]+(.[a-zA-Z]+)*:){2}.+$/
  const matched = str.match(regexp)
  if (matched == null) {
    return false
  }
  return str.match(regexp).length !== 0
}

function compile(id: string): Dependency
function compile(group: string, name: string, version: string): Dependency

function compile (id?: string, group?: string, name?: string, version?: string): Dependency {
  if (group) {
    return {
      type: 'compile',
      group: id,
      name: group,
      version: name
    }
  }
  if (isId(id)) {
    const arr = id.split(':')
    return {
      type: 'compile',
      group: arr[0],
      name: arr[1],
      version: arr[2]
    }
  }
  throw Error('config error')
}

export {
  compile,
  isId,
  Dependency
}
