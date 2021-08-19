const arr = [4, 2, 6, 1, 3, 9, 0, 7];
const sum = 9;

function sumArrayHashTable(arr, sum) {

  const result = [];
  const hashTable = {};

  for (let i = 0; i < arr.length; i++) {
    const s = sum - arr[i]; 
    if (!hashTable[s]) {
      result.push([i, hashTable[s]]);
    } else {
      hashTable[arr[i]] = i;
    }
  }
  return result;
}

console.log(sumArrayHashTable(arr, sum));
// output: [[4, 2], [6, 5], [7, 1]]
