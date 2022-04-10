const sumAll = function(a,b) {
    if (a < 0 || b < 0){
        return "ERROR";
    }
    if ( ! (Number.isInteger(a) ) || ! (Number.isInteger(b) ) ) {
        return "ERROR";
    }
    var c =0;
    if(a>b){
        c=a;
        a=b;
        b=c;

    }
    var x=0;
    for (var i=a;i<=b;i++){
      x=x+i;
    } 
    return x;
};

// Do not edit below this line
module.exports = sumAll;
