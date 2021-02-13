import { compile } from '../src/dependency'

test('compile', () => {
  expect(compile('moe.lemonneko:neko-logger:1.0.1-SNAPSHOT'))
      .toStrictEqual(compile('moe.lemonneko','neko-logger','1.0.1-SNAPSHOT'))
})