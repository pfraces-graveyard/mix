var each = require('u.each');

var mixin = function (a, b) {
  each(b, function (item, index) {
    a[index] = item;
  });

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
