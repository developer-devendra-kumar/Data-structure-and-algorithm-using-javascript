// @params function that accespts an array and a key
// @return index of the first element index in the array (-1 if key item is not found)
// required binary search can only be done on the sorted arrays we are using assending sorted array
function binarySearchFirstElement(array, key) {
  let index = -1;
  let start = 0;
  let end = array.length - 1;
  let mid = findMid(start, end);

  while (start <= end) {
    if (array[mid] >= key) {
      index = mid;
      end = mid - 1;
      mid = findMid(start, end);
    } else if (array[mid] < key) {
      start = mid + 1;
      mid = findMid(start, end);
    }
  }
  return index;
}

// find the last element in the array
function binarySearchLastElement(array, key) {
  let index = -1;
  let start = 0;
  let end = array.length - 1;
  let mid = findMid(start, end);

  while (start <= end) {
    if (array[mid] <= key) {
      index = mid;
      start = mid + 1;
      mid = findMid(start, end);
    } else if (array[mid] > key) {
      end = mid - 1;
      mid = findMid(start, end);
    }
  }
  return index;
}

// find all occurences of element in the array
function binarySearchAllElementIndex(array, key) {
  let indexes = [];
  let leftIndexes = searchAllIndexLeft(array, 0, array.length - 1, key);
  let rightIndexes = searchAllIndexRight(array, 0, array.length - 1, key);
  if (leftIndexes.length > 0 || rightIndexes.length > 0) {
    indexes = [...new Set([...leftIndexes, ...rightIndexes])];
    return indexes.sort().join(", ");
  } else {
    return -1;
  }
}

// search left most using recurssion
function searchLeft(array, start, end, key) {
  let index = -1;
  function innerSearch(array, start, end, key) {
    let mid = findMid(start, end);
    if (start <= end) {
      if (array[mid] > key) {
        innerSearch(array, start, mid - 1, key);
      } else if (array[mid] < key) {
        innerSearch(array, mid + 1, end, key);
      } else {
        index = mid;
        innerSearch(array, start, mid - 1, key);
      }
    }
  }
  innerSearch(array, start, end, key);
  return index;
}
// search right most using recurssion
function searchRight(array, start, end, key) {
  let index = -1;
  function innerSearch(array, start, end, key) {
    let mid = findMid(start, end);
    if (start <= end) {
      if (array[mid] > key) {
        innerSearch(array, start, mid - 1, key);
      } else if (array[mid] < key) {
        innerSearch(array, mid + 1, end, key);
      } else {
        index = mid;
        innerSearch(array, mid + 1, end, key);
      }
    }
  }
  innerSearch(array, start, end, key);
  return index;
}

// search all right index using recurssion
function searchAllIndexRight(array, start, end, key) {
  let indexes = [];
  function innerSearch(array, start, end, key) {
    let mid = findMid(start, end);
    if (start <= end) {
      if (array[mid] > key) {
        innerSearch(array, start, mid - 1, key);
      } else if (array[mid] < key) {
        innerSearch(array, mid + 1, end, key);
      } else {
        indexes.push(mid);
        innerSearch(array, start + 1, end, key);
      }
    }
  }
  innerSearch(array, start, end, key);
  return indexes;
}
// search all left index using recurssion
function searchAllIndexLeft(array, start, end, key) {
  let indexes = [];
  function innerSearch(array, start, end, key) {
    let mid = findMid(start, end);
    if (start <= end) {
      if (array[mid] > key) {
        innerSearch(array, start, mid - 1, key);
      } else if (array[mid] < key) {
        innerSearch(array, mid + 1, end, key);
      } else {
        indexes.push(mid);
        innerSearch(array, start, end - 1, key);
      }
    }
  }
  innerSearch(array, start, end, key);
  return indexes;
}

function findMid(s, e) {
  return Math.trunc((s + e) / 2);
}

// example
console.log(binarySearchFirstElement([1, 2, 3, 3, 3, 4, 5, 6], 3));
console.log(binarySearchLastElement([1, 2, 3, 3, 3, 4, 5, 6], 3));
console.log(binarySearchAllElementIndex([1, 2, 3, 3, 3, 3, 4, 5], 3));
console.log(searchLeft([1, 2, 3, 3, 3, 4, 5, 6], 0, 7, 3));
console.log(searchRight([1, 2, 3, 3, 3, 3, 4, 5, 6], 0, 7, 3));
