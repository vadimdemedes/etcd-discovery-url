# etcd-discovery-url [![Circle CI](https://circleci.com/gh/vdemedes/etcd-discovery-url.svg?style=svg)](https://circleci.com/gh/vdemedes/etcd-discovery-url)

Retrieve a discovery url from discovery.etcd.io service.


### Installation

```
$ npm install etcd-discovery-url --save
```


### Usage

```javascript
const discoveryUrl = require('etcd-discovery-url');

let url = yield discoveryUrl(); // 'https://discovery.etcd.io/ea08c54315144a0b5713aad4c4a9905f'
```


### Tests

[![Circle CI](https://circleci.com/gh/vdemedes/etcd-discovery-url.svg?style=svg)](https://circleci.com/gh/vdemedes/etcd-discovery-url)

```
$ npm test
```


### License

etcd-discovery-url is released under the MIT license.
