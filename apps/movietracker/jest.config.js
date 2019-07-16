module.exports = {
  name: 'movietracker',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/movietracker',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
