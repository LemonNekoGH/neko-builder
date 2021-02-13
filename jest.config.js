module.exports = {
  roots: [
    'packages/@lemonneko/neko-builder/test'
    // 'packages/@lemonneko/neko-builder/test'
  ],
  testRegex: 'test/(.+)\\.test\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
