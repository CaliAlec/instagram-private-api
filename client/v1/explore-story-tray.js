var _ = require('underscore');

function ExploreStoryTray(session) {
  this.session = session;
}

module.exports = ExploreStoryTray;
var Request = require('./request');

ExploreStoryTray.prototype.get = function () {
  var that = this;
  return new Request(that.session)
  .setMethod('GET')
  .setResource('exploreStoryTray')
  .send()
  .then(function(data) {
    return data.items[0].stories;
  });
};
