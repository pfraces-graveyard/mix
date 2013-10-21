# inher

Simple object inheritance

# Usage

```js
var inher = require('inher');

var obj = inher({ a: 1 }, { a: 2 });

console.log(obj); // {}
console.log(obj.parent); // { a: 2 }
console.log(obj.parent.parent); // { a: 1 }
```

# install

    npm install inher

# Motivation

Object augmentation library for simple tasks
