#!/usr/bin/node

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  } else {
    const halfLength = Math.floor(arr.length / 2);
    const leftHalfArr = arr.slice(0, halfLength);
    const rightHalfArr = arr.slice(halfLength, arr.length);

    return mergeArr(mergeSort(leftHalfArr), mergeSort(rightHalfArr));
  }
};

const mergeArr = (left, right) => {
  const sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left[0]);
      left.shift();
    } else {
      sortedArr.push(right[0]);
      right.shift();
    }
  }

  return sortedArr.concat(...left).concat(...right);
};
