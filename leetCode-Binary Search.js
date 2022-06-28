var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let middle;

  while (middle !== end) {
    middle = Math.floor((start + end) / 2);

    if (nums[middle] === target) {
     return middle
 } else if (nums[middle] < target) {
 start = middle + 1;
} else {
 end = middle - 1;
}
  }
  return -1;
};
console.log(search([-1, 0, 3, 5, 9, 12], 9));
