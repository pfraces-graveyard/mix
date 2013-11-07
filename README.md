# mix

Mix objeect properties

# Usage

Any number of objects can be passed

A new object is returned without altering the arguments received

```js
var mix = require('u.mix');

var obj = mix({ a: 1 }, { b: 2, c: 3 }, { d: 4 });
console.log(obj); // { a: 1, b: 2, c: 3, d: 4 }
```

Last wins

```js
var obj = mix({ a: 1 }, { a: 2 }, { a: 3 });
console.log(obj); // { a: 3 }
```

Objects received are unaltered

```js
var foo = { a: 1, b: 2 },
    bar = { a: 4, c: 3 },
    foobar = mix(foo, bar);

console.log(foo); // { a: 1, b: 2 }
console.log(bar); // { a: 4, c: 3 }
console.log(mix); // { a: 4, b: 2, c: 3 }
```

# install

    npm install u.mix

# Motivation

Straightforward oject mixing library, aimed for simple tasks.
