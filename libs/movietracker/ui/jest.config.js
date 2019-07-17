module.exports = {
  name: 'movietracker-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/movietracker/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
