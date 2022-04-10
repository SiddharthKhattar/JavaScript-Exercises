const findTheOldest = function(a) {
 /*   temp=0;
    LengthOfArray=a.length;
    birthyear= a.map(people => people.yearOfBirth);
    deathyear= a.map(people => people.yearOfDeath);
    age = deathyear - birthyear;

    a.forEach((Element) => {
        if (temp < age) {
            temp = age;
        } 
    });
    return temp; */

    return a.reduce((oldest,currentPerson) => {
        const oldestAge= getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge= getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
      //  return oldestAge < currentAge ? currentPerson : oldest;
        if(oldestAge < currentAge ){
            return currentPerson;
        }
        else{
            return oldest;
        }

    })
};

const getAge = function (birth,death){
    if (!death){
        death= new Date().getFullYear();
    }
    return death-birth;
};





// Do not edit below this line
module.exports = findTheOldest;
