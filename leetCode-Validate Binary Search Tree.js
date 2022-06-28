// var isValidBST = function (root) {
//   function isMaior(fstIndex, secIndex) {
//     if (secIndex -1 >= root.length - 1) {
//       return (output = true);
//     }
//     root[secIndex] > root[fstIndex]
//       ? isMinor((fstIndex += 1), (secIndex += 1))
//       : {};
//   }
//   function isMinor(fstIndex, secIndex) {
//     if (root[fstIndex] > root[secIndex]) {
//       isMaior(fstIndex, (secIndex += 1));
//     } else return (output = false);
//   }
//   isMinor((fstIndex = 0), (secIndex = 1));
//   return output;
// };
// console.log(isValidBST([1, -5, 3, -8, -2, 2, 10, -10]));

var isValidBST = function (root) {
  let [fstIndex, secIndex] = [0, 1];
  let output
  for (i = 0; i <= root.length - 1; i++) {
    if (root[fstIndex] > root[secIndex] || root[fstIndex] === null || root[secIndex] === null) {
      secIndex += 1;
    } else return output = false;
    if (secIndex >= root.length) {
      return output = true;
    }

    if (root[fstIndex] < root[secIndex] || root[fstIndex] === null || root[secIndex] === null) {
      [(fstIndex += 1), (secIndex += 1)];
    } else return output = false;
    if (secIndex >= root.length) {
      return output = true;
    }
  }
  return output;
};

console.log(isValidBST([1, -5, 3, -8, -2, 2, 10, -10]));

