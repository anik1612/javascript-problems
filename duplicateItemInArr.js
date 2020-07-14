var arr = [1,1,1,2,2,2,3,3,3];
var copyarr = [];

for(var i=0; i<arr.length; i++){
    var index = copyarr.indexOf(arr[i]);
    if(index == -1){
        copyarr.push(arr[i]);
    }
}

console.log(copyarr);