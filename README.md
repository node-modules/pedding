# pedding

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
[![Node.js Version](https://img.shields.io/node/v/pedding.svg?style=flat)](https://nodejs.org/en/download/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

[npm-image]: https://img.shields.io/npm/v/pedding.svg?style=flat-square
[npm-url]: https://npmjs.org/package/pedding
[download-image]: https://img.shields.io/npm/dm/pedding.svg?style=flat-square
[download-url]: https://npmjs.org/package/pedding

Useful tools for unit test: Just pending for callback.

## Installation

### Node.js

```bash
npm install pedding
```

## Usage

CommonJS

```js
const { pending } = require('pedding');

it('should request two resources', done => {
  done = pending(2, done);
  http.get('http://fengmk2.github.com', res => {
    done();
  });
  http.get('http://www.taobao.com', res => {
    done();
  });
});
```

ESM and TypeScript

```ts
import { pending } from 'pedding';

it('should request two resources', done => {
  done = pending(2, done);
  http.get('http://fengmk2.github.com', res => {
    done();
  });
  http.get('http://www.taobao.com', res => {
    done();
  });
});
```

## License

[MIT](LICENSE)

## Contributors

[![Contributors](https://contrib.rocks/image?repo=node-modules/pedding)](https://github.com/node-modules/pedding/graphs/contributors)

Made with [contributors-img](https://contrib.rocks).
