//Function that takes in a string and returns the string in reverse alphabetical order
let reverse_string = s => {
    return s.split("").sort().reverse().join("");
    };
let inputString = 'supercalifragilisticexpialidocious'
console.log('Input String: ', inputString) //print out original string
console.log('The reverse of string:', reverse_string(inputString)); //print out answer

