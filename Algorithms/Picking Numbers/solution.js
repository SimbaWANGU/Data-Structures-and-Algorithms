"use strict";
function pickingNumbers(a) {
    let maxLength = 0;
    for (const iterator of a.sort((x, y) => x - y))
        maxLength = Math.max(a.filter((value) => value === iterator || value === iterator + 1).length, maxLength);
    return maxLength;
}
console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5])); //[4,4,5,5,5] => 5
console.log(pickingNumbers([4, 6, 5, 3, 3, 1])); // [3,3,1]=> 3
console.log(pickingNumbers([1, 2, 2, 3, 1, 2])); // => 5
