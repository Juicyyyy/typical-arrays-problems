
exports.min = function min (array) {


    if (!array || array.length === 0) {return 0}
    else {
        var min = parseInt(array[array.length-1]), el;
        for(var i=array.length-2; i>=0; i--){
            el = parseInt(array[i]);
            if(el<min){
                min = el;
            }
        }
        return min;
    }
}

exports.max = function max (array) {
    
    if (!array || array.length === 0) {return 0}
    else {
        var max = parseInt(array[array.length-1]), el;
        for(var i=array.length-2; i>=0; i--){
            el = parseInt(array[i]);
            if(el>max){
                max = el;
            }
        }
        return max;
    }
}

exports.avg = function avg (array) {
    if (!array || array.length === 0) {return 0}
    else {
        let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    res = sum / array.length;
    return res;
    }   
}
