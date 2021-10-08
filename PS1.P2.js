
//Function that takes in a string in the format: digit operator digit
//returns a function to implement input operator that returns the result


//----------------------------START OF HELPER FUNCTIONS--------------------------------------------------------
//split and convert nums
const split_string = expression => {
    let left = Number(expression.charAt(0));
    let op = expression.charAt(1);
    let right = Number(expression.charAt(2));
    return [left, op, right];
};
//ADD
const addr = (left, right) =>{
    return left + right;
};
//SUBTRACT
const sub = (left, right)=> {
    return left - right;
};
//MULTIPLY
const multi = (left, right)=>{
    return left * right;
};
//DIVIDE
const div = (left, right)=>{
    return left/right;
};
//MOD
const mod = (left, right) => {
    return left % right;
};
//EXPONENT
const exponent = (left, right)=>{
    return left ** right;
};
//Choose operator
const evaluate = ([left, operator, right]) => {
    switch (operator) {
        case '+':
            return addr(left, right);
        case '-':
            return sub(left, right);
        case '*':
            return multi(left, right);
        case '/':
            return div(left, right);
        case '%':
            return mod(left, right);
        case '^':
            return exponent(left, right);
    }
};
//---------------------END OF HELPER FUNCTIONS--------------------------------------------------------

let findAnswer = my_string =>{
   return evaluate(split_string(my_string));
}
//Test functions
let expression = '8+2';
let e1 = '4+2';
let e2 = '5*7';
let e3 = '6-1';
let e4 = '9/2';
let e5 = '2^8';

let a1 = findAnswer(e1);
console.log("The answer for '4+2' is: ", a1);

let a2 = findAnswer(e2);
console.log("The answer for '5*7' is: ", a2);

let a3 = findAnswer(e3);
console.log("The answer for '6-1' is: ", a3);

let a4 = findAnswer(e4);
console.log("The answer for '9/2' is: ", a4);

let a5 = findAnswer(e5);
console.log("The answer for '2^8' is: ", a5);