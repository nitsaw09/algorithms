/*
  Return the Node which greater left or right and if there is no node return empty and for -1 there is no node
  Input: arr [1, 6, 2, 9, -1, 10]
  Output: Left
                   1
                  / \
                 6   2
                /     \
               9       10
*/

const solution = (arr) => {
    let startNode = 0;
    let leftNodes = {};
    let rightNodes = {};
    let sumLeft = 0;
    let sumRight = 0;
    if(!arr.length || arr.length === 1) return "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== -1) {
           if (startNode) {
               if (!rightNodes[i]) {
                  leftNodes[i] = arr[i];
                  sumLeft = sumLeft + arr[i]; 
               } else {
                  leftNodes[i + 1] = arr[i + 1];
                  sumLeft = sumLeft + arr[i + 1]; 
               }
               if (!leftNodes[i+1] && arr[i+1]) {
                  rightNodes[i+1] = arr[i+1];
                  sumRight = sumRight + arr[i+1];
         			 }   
           } else {
              startNode = arr[i];
           }
        }
    }
    if (sumRight < sumLeft) {
        return "Left"
    } else if (sumRight > sumLeft) {
        return "Right";
    }

};

console.log(solution([]))
console.log(solution([1]))
console.log(solution([4, 5, 100, 9]))
console.log(solution([1, 6, 2, 9, -1, 10]))

/*
Output
""
""
"Right"
"Left"
*/
