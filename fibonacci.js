#!/usr/bin/node

function fibs(num) {
  const fibArr = [0, 1];

  for (let i = 2; i < num; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  console.log(fibArr);
}

const fibArr = [0, 1];
let fibNum = 2;

function fibsRec(num) {
  console.log('This was printed recursively');
  if (num === fibArr.length || num <= 2) {
    return fibArr;
  } else {
    fibArr.push(fibArr[fibNum - 1] + fibArr[fibNum - 2]);
    fibNum++;
    return fibsRec(num);
  }
}
