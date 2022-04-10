const caesar = function(string,shift) {
    return string.split("").map(char => shiftChar(char,shift)).join("");
}; 

const codeSet = code => (code < 97 ? 65 : 97);

const mod = (n,m) => (n % m + m) % m;
 
const shiftChar = (char, shift) => {
    const code = char.charCodeAt();  
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) 
    {
      return String.fromCharCode(mod(code + shift - codeSet(code), 26) + codeSet(code));
    }
    return char;
};













/* function mod(n, p){
    if ( n < 0 ){
        n = p - Math.abs(n) % p;
    }
    return n % p;
}; */

/* var decMsg="";
    var i =0;
    a=input.length;
    while(i < a)
    {
        var code=input.charCodeAt(i);
        if (code >=65 && code <= 85){
            code=code+number;
            decMsg += String.fromCharCode(code);
            i++;
        }
        return decMsg; */
              /*  if (code >= 65 && code <= 65 + 26 - 1)
        {
            code -= 65;
            code = mod(code + number,26);
            code += 65;
        } */

   /* let textlength=input.length;
    arrayinput=input.split("");
    for (i=0;i<textlength;i++){
        var unicode = input.charCodeAt(i);
        unicode=unicode+number;
        //input.charCodeAt(i)=input.charCodeAt(unicode);
        input = input + input.fromCharCode(number+ input.charCodeAt(unicode));
    }
    return input
    */


// Do not edit below this line
module.exports = caesar;
