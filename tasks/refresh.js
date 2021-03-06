'use strict';

//////////////////////////////
// Requires
//////////////////////////////
var sequence = require('run-sequence');

//////////////////////////////
// Export
//////////////////////////////
module.exports = function (gulp) {
  //////////////////////////////
  // Refresh Server
  //////////////////////////////
  gulp.task('refresh:server', function (cb) {
    return sequence(
      'clean:server',
      'build:server',
      cb
    );
  });
}
