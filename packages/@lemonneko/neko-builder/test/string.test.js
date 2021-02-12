const dependency = require('../lib/dependency')

test('isId',() => {
    expect(dependency.isId('moe.lemonneko:neko-logger:1.0.1_RELEASE')).toBe(true)
})