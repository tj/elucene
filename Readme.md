
# elucene

 Extended Lucene query syntax adding __LIMIT__, __FIELDS__, and __SORT__.

## Installation

```
$ npm install elucene
```

## Example

```js
var parse = require('elucene');
var query = 'level:error SORT timestamp:asc LIMIT 2 5 FIELDS message code';
var ret = parse(query);
```

 yields:

```js
{
  string: 'level:error',
  sort: ['timestamp:asc'],
  limit: ['2', '5'],
  fields: ['message', 'code']
}
```

# License

  MIT
