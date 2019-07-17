module.exports = {
  name: 'movietracker-core',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/movietracker/core',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
