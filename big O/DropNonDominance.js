// this is O(n^2) because the first loop is O(n^2) and the second loop is O(n) but we drop the non-dominant term so it is O(n^2)

function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }

  for (let k = 0; k < n; k++) {
    console.log(k);
  }
}

logItems(10);
