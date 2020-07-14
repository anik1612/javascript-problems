//sum of an array all element

function getArrSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

var result = getArrSum([15, 2, 3, 4, 50, 6, 7, 8, 9, 10])
console.log(result);
