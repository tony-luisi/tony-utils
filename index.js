module.exports = {
  countIf: function (testFunc, arr) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
      if( testFunc(arr[i]))
        count++;
    }
    return count;
  },

  filter: function (func, arr) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (func(arr[i])){
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
  },

  map: function (func, arr) {

    var mappedArr = [];
    for (var i = 0; i < arr.length; i++) {
      mappedArr.push(func(arr[i]));
  }
  return mappedArr;
 }
}

