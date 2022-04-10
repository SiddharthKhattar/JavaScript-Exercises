const add = function(a,b) {
  c=a+b
  return c;
};

const subtract = function(a,b) {
  c=a-b
  return c
};

const sum = function(...a) {
  b=a[0];
  var c=0;
  b.forEach(element => {
    c+=element;
  });
	return c
};

const multiply = function(...a) {
  b=a[0];
  var c=1;
  b.forEach(element => {
    c=c*element
  });
  return c
};

const power = function(a,b) {
	c=Math.pow(a,b);
  return c
};

const factorial = function(a) {
  var b=1;
  let c=1;
  if(a==0 || a==1){
    return 1
  }
  else{
    for( b = 1 ;b <= a ; b++){
      c=c*b;
    }
    return c;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
