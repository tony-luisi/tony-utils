
exports.countIf = function (testFunc, arr) {
  var count = 0;
  for(var i = 0; i < arr.length; i++) {
    if( testFunc(arr[i]))
      count++;
  }
  return count;
}

exports.filter = function (func, arr) {
  var arrToReturn = arr.filter(func)
  return arrToReturn;
}

exports.map = function (func, arr) {
  var arrToReturn = arr.map(func);
  return arrToReturn;
}
