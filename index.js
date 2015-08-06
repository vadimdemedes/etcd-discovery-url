/**
 * Dependencies
 */

const request = require('got-retry');


/**
 * Expose function
 */

module.exports = requestDiscovery;


/**
 * Receive etcd discovery url
 */

function requestDiscovery () {
  return request('https://discovery.etcd.io/new')
    .then(function (response) {
      return response.body.toString();
    });
}
