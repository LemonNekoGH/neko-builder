import {compile} from '../src/dependency'
import {mavenCentral} from "../src/repository";
import {DependencyUtil} from "../src/utils";

const dependency = compile('moe.lemonneko:neko-logger:1.0.1-RELEASE')
const repository = mavenCentral()

test('getBaseName', () => {
    const localCacheBaseName = DependencyUtil.getLocalCacheBaseName(dependency)
    const repoBaseName = DependencyUtil.getRepoBaseName(dependency, repository)
    const endsStr = 'moe/lemonneko/neko-logger/1.0.1-RELEASE/neko-logger-1.0.1-RELEASE'
    console.log(localCacheBaseName)
    console.log(repoBaseName)
    expect(localCacheBaseName.endsWith(endsStr)).toBe(true)
    expect(repoBaseName.endsWith(endsStr)).toBe(true)
})