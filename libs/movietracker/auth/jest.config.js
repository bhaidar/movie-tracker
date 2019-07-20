module.exports = {
  name: 'movietracker-auth',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/movietracker/auth',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
