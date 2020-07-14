var a = 7, b = 6, c = 9;
//using max function
var max = Math.max(a, b, c);

console.log(max)

if (a > b && a > c) {
    console.log('max is a');
} else if (b > a &&  b > c) {
    console.log('max is b');
} else if (c > a && c > b) {
    console.log('max is c');
}