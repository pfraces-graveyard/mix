var mixin = function (a, b) {
  for (prop in b) {
    a[prop] = b[prop];
  };

  return a;
};

var mixem = function () {
  var args = [].slice.apply(arguments),
    target = {};

  while (var arg = args.shift()) {
    mixin(target, arg);
  }

  return target;
};

module.exports = mixem;
