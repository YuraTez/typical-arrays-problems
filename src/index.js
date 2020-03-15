
exports.min = function min (array) {
    let minNam=0;
    if(arguments.length===minNam || array.length===minNam){
        return minNam;
    }
    for(let i=0; i<array.length; i++){
        if(minNam > array[i]){
            minNam = array[i];
        }
    }
  return minNam;
};
exports.max = function max (array) {
    let maxNam=0;

    if(arguments.length===maxNam || array.length===maxNam){
        return maxNam;
    }
    for(let i=0; i<array.length; i++){
        if(maxNam< array[i]){
            maxNam = array[i];
        }
    }
  return maxNam;
};

exports.avg = function avg (array) {
    let midlNam=0;

    if(arguments.length===midlNam || array.length===midlNam){
        return midlNam;
    }
    for(let i=0; i<array.length; i++){
            midlNam += array[i];
    }
    midlNam=midlNam/array.length;
    return midlNam;
};
