var mixin = function (a, b) {
  for (prop in b) {
    a[prop] = b[prop];
  };

  return a;
};

module.exports.mix = function () {
  var args = [].slice.apply(arguments),
    target = {};

  while (var arg = args.shift()) {
    mixin(target, arg);
  }

  return target;
};
