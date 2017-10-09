var arr = [1,1,1,1,1,1,1,1,2,2];
function quChong(arr){
    var brr = [];
    for(var i=arr.length-1;i>=0;i--){
        if(brr.indexOf(arr[i]) == -1){
            brr.unshift(arr[i]);
        }
    }
    return brr;
}
console.log(quChong(arr));