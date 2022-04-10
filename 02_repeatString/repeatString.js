function repeatString(str,num) {
    a="";
if (num<0){
    return "ERROR";
}
else{while (num>0){
    a+=str;
    num--;
}
return a;
}
}

// Do not edit below this line
module.exports = repeatString;
