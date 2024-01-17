/**
 * FUNCTION AND METHODS
 * Block of code
 * funtion defination
 * function name(paramenters){
 * //logic
 * return  //last executable line
 * }
 *
 * ADVANTAGE
 * reduce redundancy
 */
function display(msg) {
  console.log(msg);
}

display("taurn");

function sum(a, b, c) {
  //local varibale -> a,b,c
  return a + b + c;
}

sum = sum(10, 20, 30);
display(sum);

/**
 * ARROW FUNCTIONS
 * const name = (paramneter) => {
 * //logic
 * }
 *
 * arrow fucntions are part of mordern javaScript
 */

const sums = (a, b) => {
  return a + b;
};
display(sums(10, 20));

const print = () =>
  console.log(
    "fucntion without curly braces because it has single line to execute"
  );
print();

const countVowel = (msg) => {
  let count = 0;
  for (const i of msg.toLowerCase()) {
    if (i == "a" || i == "e" || i == "o" || i == "u" || i == "i") {
      count++;
    }
  }
  console.log(`Number of vowels in String ${msg} are ${count}`);
};
countVowel("tarun");
countVowel("AIEOUklacma;c;vkwv;");

/**
 * forEach loop //it is a method beacuse it is used with object
 * only used for arrays
 * arr.forEach(callBackFucntion)
 * a call back is a function passed as an argument to another function
 * forEach loop can take 3 parameters (value, index, array) names could be anything
 */
let arr=[2,3,4,5,6]
let fo =["delhi","mumbai","shahdara"]
arr.forEach((val)=>console.log(val)) //forEach array ki har value ko uthayega or use internal val mai pass krega jisse wo funther arguments mai jayegi

fo.forEach((val)=>{
  console.log(val.toUpperCase())
})
fo.forEach((val,index)=>{
  console.log(val.toUpperCase(),index)
})
fo.forEach((val,index,arry)=>{
  console.log(val.toUpperCase(),index,arry)
})
display()
display()
display()
display("Sqaure of a Number")
let nums = [1,2,3,4,5,6,34,56,78,32,67,89.6]
nums.forEach((val)=> display(`Square of ${val} is ${val**2}`))
//passing function in for each loop

const square =(num)=>{
  console.log( num**2);
}
// function square(num){
//   console.log( num**2);
// }
nums.forEach(square)
/**
 * HIGHER ORDER FUNCTIONS
 * Those function which take another functions as parameter
 */