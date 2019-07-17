module.exports = {
  name: 'movietracker-movies',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/movietracker/movies',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
