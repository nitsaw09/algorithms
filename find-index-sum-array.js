function sumArrayHashTable(arr, sum) {

  const result = [];
  const hashTable = {};

  for (let i = 0; i < arr.length; i++) {
    const s = sum - arr[i]; 
    if (hashTable[s] !== undefined) {
      result.push([i, hashTable[s]]);
    } else {
      hashTable[arr[i]] = i;
    }
  }
  return result;
}

console.log(sumArrayHashTable([4, 2, 6, 1, 3, 9, 0, 7], 9));
// output: [[4, 2], [6, 5], [7, 1]]
