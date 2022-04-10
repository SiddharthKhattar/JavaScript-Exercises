const fibonacci = function(input) {
    NumberInput= Number(input);
    if (NumberInput == 1){
        return 1;
    }
    if (NumberInput < 0){
        return "OOPS";
    }
    else{   
        let n1=0,n2=1,nextTerm;
        for (let i=1; i <NumberInput;i++){
            nextTerm=n1+n2;
            n1=n2;
            n2=nextTerm;
        }
        return nextTerm;
    }
};

// Do not edit below this line
module.exports = fibonacci;
