// @params function that accespts an array and a key
// @return index of the first element index in the array (-1 if key item is not found)
function linearSearchFirstElement(array, key) {
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      index = i;
      break;
    }
  }
  return index;
}

// to get the last element index
function linearSearchLastElement(array, key) {
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      index = i;
    }
  }
  return index;
}

// to get the all elements index
function linearSearchAllElement(array, key) {
  let indexes = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      indexes.push(i);
    }
  }
  if (indexes.length > 0) {
    return indexes.join(", ");
  } else {
    return -1;
  }
}
// to get the all element counts
// 0 if not found the key items and count if found any
function linearSearchCountAllElement(array, key) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      count++;
    }
  }
  return count;
}

// example
console.log(linearSearchLastElement([1, 2, 3, 4, 5, 6, 7, 1, 3, 4, 3], 3));
console.log(linearSearchFirstElement([1, 2, 3, 4, 5, 6, 7, 1, 3, 4, 3], 3));
console.log(linearSearchAllElement([1, 2, 3, 4, 5, 6, 7, 1, 3, 4, 3], 3));
console.log(linearSearchCountAllElement([1, 2, 3, 4, 5, 6, 7, 1, 3, 4, 3], 9));
