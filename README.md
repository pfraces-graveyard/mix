# mixem

Simple object augmentation

# Usage

Any number of obhects can be passed.

The first object will be augmented with the properties of the rest

```js
var mixem = require('mixem');

var obj = mixem({ a: 1, b: 2 }, { a: 4, c: 3 });
console.log(obj); // { a: 4, b: 2, c: 3 }
```

Last wins

```js
var obj = mixem({ a: 1 }, { a: 2 }, { a: 3 });
console.log(obj); // { a: 3 }
```

If you want to save the initial state of your object, you can pass an
empty object first

```js
var obj = mixem({}, { a: 1, b: 2 }, { a: 4, c: 3 });
```

# install

    npm install mixem

# Motivation

Simple, straightforward, dependency free oject augmentation library.
