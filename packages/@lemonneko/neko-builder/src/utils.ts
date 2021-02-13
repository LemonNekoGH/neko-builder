import { Dependency } from './dependency'
import { Repository } from './repository'
import * as path from 'path'

export class DependencyUtil {
  static getRepoBaseName (dependency: Dependency, repo: Repository): string {
    let baseName = repo.url
    if (!baseName.endsWith('/')) {
      baseName += '/'
    }
    baseName += dependency.group.replace('.', '/') + '/'
    baseName += dependency.name + '/'
    baseName += dependency.version + '/'
    baseName += dependency.name + '-' + dependency.version
    return baseName
  }

  static getLocalCacheBaseName (dependency): string {
    let baseName = process.env.HOME + path.sep + '.neko-builder/caches/'
    baseName += dependency.group.replace('.', path.sep) + path.sep
    baseName += dependency.name + path.sep
    baseName += dependency.version + path.sep
    baseName += dependency.name + '-' + dependency.version
    return baseName
  }
}
