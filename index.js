/**
 * Dependencies
 */

const request = require('co-request');


/**
 * Expose function
 */

module.exports = requestDiscovery;


/**
 * Receive etcd discovery url
 */

function * requestDiscovery () {
  var response = yield request('https://discovery.etcd.io/new');
  
  if (response.statusCode !== 200) {
    throw new Error('Failed to generate discovery url');
  }
  
  return response.body.toString();
}
