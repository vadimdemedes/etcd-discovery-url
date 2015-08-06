/**
 * Dependencies
 */

const discoveryUrl = require('./');

require('mocha-generators')();
require('chai').should();


/**
 * Dependencies
 */

describe ('etcd-discovery-url', function () {
  it ('request discovery url', function * () {
    var url = yield discoveryUrl();
    
    url.should.match(/https\:\/\/discovery\.etcd\.io\/[a-z0-9]{32}/i);
  });
});
