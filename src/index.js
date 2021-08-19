
exports.min = function min (array) {
  if (array == null ) {
    return 0;
  }
  let search = 0;
  for (let biba = 0; biba < array.length; biba++) {
    if (array[biba] < search) {
      search = array[biba];
    }
    
  }
  return search;
}

exports.max = function max (array) {
  if (array == null ) {
    return 0;
  }
  let search = 0;
  for (let biba = 0; biba < array.length; biba++) {
    if (array[biba] > search) {
      search = array[biba];
    }
    
  }
  return search;
}

exports.avg = function avg (array) {
  if (array == NaN || array == null || array.length == 0) {
    return 0;
  }
  let sum = 0, avgSum = 0;
  for (let biba = 0; biba < array.length; biba++) {
    sum += array[biba];
  }
  avgSum = sum / array.length
  return avgSum;
}
