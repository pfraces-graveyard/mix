var mixin = function (a, b) {
  for (prop in b) {
    a[prop] = b[prop];
  };

  return a;
};

var mixem = function () {
  var args = [].slice.apply(arguments),
    target,
    arg;

  while (arg = args.shift()) {
    if (target)  {
      mixin(target, arg);
    } else {
      target = arg;
    }
  }

  return target;
};

module.exports = mixem;
