var extend = function (obj) {
  var F = function () {};
  F.prototype = obj;
  return new F();
};

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
    if (target) target = mixin(target, arg);
    else target = arg;
  }

  return target;
};

module.exports = function () {
  if (!arguments.length) {
    return;
  }

  if (arguments.length === 1) {
    return extend.apply(null, arguments);
  }

  return mixem.apply(null, arguments);
};
