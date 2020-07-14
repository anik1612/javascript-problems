var a = 7, b = 6, c = 9;
//using max function
var max = Math.max(a, b, c);

console.log(max)

//using condition 
if (a > b && a > c) {
    console.log('max is a');
} else if (b > a &&  b > c) {
    console.log('max is b');
} else if (c > a && c > b) {
    console.log('max is c');
}

//find largest element in an array
var arr = [1,2,3,4,5]
var max = arr[0];
for(var i=1; i<arr.length; i++){
    if(arr[0]<arr[i]){
        max = arr[i];
    }
}
console.log(max);