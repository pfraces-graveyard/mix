var inher = function (obj) {
  var F = function () {
    this.parent = obj;
  };
  
  F.prototype = obj;
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
