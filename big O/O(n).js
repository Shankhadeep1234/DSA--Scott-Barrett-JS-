//this is an o(n) because the number of operations is directly proportional to the size of n
//drop constants and non dominant terms to simplify big O notation, in the above example we have 2 loops, n + n = 2n
//so we drop the constant and we are left with O(n)

function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = 0; j < n; j++) {
    console.log(j);
  }
}

logItems(10);
