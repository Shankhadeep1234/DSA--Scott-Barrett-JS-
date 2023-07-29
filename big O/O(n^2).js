//this is an o(n^2) because the number of operations is directly proportional to the size of n
//drop constants and non dominant terms to simplify big O notation, in the above example we have 3 nested loops, n * n * n = n^3
//so we drop the constant and we are left with O(n^2)

function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(i, j, k);
      }
    }
  }
}

logItems(10);
