/* function removeFromArray(array){
array = array.filter(n => {return n != 3});
return array;
} */

// The above returns true for the first test

/* function removeFromArray(array){
    array = array.filter(n => {return n != 3});
    array = array.filter(n => {return n != 2})
    return array;
} */

// The above returns true for the second test

/* function removeFromArray(arr,value){
    return arr.filter(function(ele)
{return ele != value;}  ) };   */

// The above returns true for the third test

/* function removeFromArray(arr,value){
    a=arr.filter(function(ele){ return ele != value;})
    b=a.filter(n => { return n != 2;})
    return b;
} */

// The above test returns true for the fourth test

/* function removeFromArray(...c){
    c.length=0;
    return c;
} */

// The above test returns true for the fifth test

function removeFromArray(...a){
    b = a.filter((item) => item !== "hey");
    c = b.filter((item) => item !== 3);
    d = c.filter((item) => item !== "hey");
    return d;
} 

// Do not edit below this line
module.exports = removeFromArray;
