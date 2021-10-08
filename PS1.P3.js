
//one function that takes in a string and decorator function
//apply function to string and return result??

//write one expression calling a lambda function that splits string on 'c'


//write another expression that calls a lambda function that replaces all 'a' with 'A'
//return object of original string, modified string, num of replacements, length of modified string

//Create Function
const applyFunction = (my_string, __) => __(my_string);

//First Decorator Function
const splitC = (A_string) => {
    let strList = A_string.split('c');
    let len = strList.length;
    for (let i=1; i<len; i++){
        strList[i] = 'c'+ strList[i];
    }
    return strList;
};
const example1 = 'supercalifragilisticexpialidocious';
let test1 = applyFunction(example1, splitC);
//print
console.log("The answer for Example 1: ", test1)

//Second Decorator Function
const replA = (A_string)=>{
    let strList = A_string.split('a');
    let len = strList.length;
    let modString = A_string.replaceAll('a', 'A');
    return {
        originalString: A_string,
        modifiedString: modString,
        numberReplaced: len-1,
        length: A_string.length
    };
};

let test2 = applyFunction(example1, replA);
//print
console.table( test2);

