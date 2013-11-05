var inher = function (obj) {
  var F = function () {};
  F.prototype = obj;
  F.prototype.parent = obj;
  return new F();
};

var mixin = function (a, b) {
  for (prop in b) {
    a[prop] = b[prop];
  };

  return a;
};

module.exports = function () {
  var args = [].slice.apply(arguments),
    target,
    arg;

  while (arg = args.shift()) {
    if (target) target = inher(mixin(target, arg));
    else target = inher(arg);
  }

  return target;
};
