// this is O(1) because it only runs once no matter how big the input is (n) so it is constant time complexity
// drop constants and non dominant terms to simplify big O notation, in the above example we have 1 loop, n = n
// so we drop the constant and we are left with O(1)

function addItems(n) {
  return n + n;
}
