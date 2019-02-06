function shuffle(a) {
  var _a = babelHelpers.toConsumableArray(a);

  var j, x, i;

  for (i = _a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = _a[i];
    _a[i] = _a[j];
    _a[j] = x;
  }

  return _a;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}