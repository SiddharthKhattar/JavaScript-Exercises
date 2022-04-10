const palindromes = function (string) {
  /*  const len=string.length
    for ( let i=0 ; i<len/2 ; i++ ){
        if (    string[i] !== string[len -  1   - i]  ){
            if (string[len - 1 -i] !== ('!' || '.' || ' ' || " ," ))
            return false
        }
    return true
    } */
    processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    return (processedString.split("").reverse().join("") == processedString);
};

// Do not edit below this line
module.exports = palindromes;
