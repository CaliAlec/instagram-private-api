var _ = require('underscore');

function TopLiveVideos(session) {
  this.session = session;
}

module.exports = TopLiveVideos;
var Request = require('./request');

TopLiveVideos.prototype.get = function () {
  var that = this;
  return new Request(that.session)
  .setMethod('GET')
  .setResource('topLiveVideos')
  .send()
  .then(function(data) {
    return data.broadcasts;
  });
};
