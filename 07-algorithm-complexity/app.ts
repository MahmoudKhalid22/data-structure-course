function sumNumbers(num: number) {
  let sum = (num * (num + 1)) / 2;
  return sum;
  // O(1) => Constant time
}

// ----------------

function sumNumberWayTwo(num: number) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
  // O(n) => n time
}

console.log(sumNumbers(1000000000));
console.log(sumNumberWayTwo(1000000000));
