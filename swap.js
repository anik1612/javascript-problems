// using temp variable
var a = 5;
var b = 7;

console.log('before swap a = ', a, 'b = ', b);

var temp;
temp = a;
a = b;
b = temp;

console.log('after swap a = ',a, 'b = ', b);

// without temp variable 

var c = 5;
var d = 7;

console.log('before swap c = ', c, 'd = ', d);

c = c+d;
d = c-d;
c = c-d;

console.log('after swap c = ',c, 'd = ', d);

// using array index 

var e = 5;
var f = 7;

console.log('before swap e = ', e, 'f = ', f);

[e, f] = [f, e]; 
console.log('after swap e = ',e, 'f = ',f);