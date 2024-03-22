// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

// Explain & TIP: Imagine you have a magic box that can add a specific number to any number you put in it. This program makes that magic box for you!
let number: number;
function invokeNumber(num: number): void {
  number = num;
}
function createRandomNum(min:number,max:number){
  const randomNumber =  Math.floor(Math.random() * (max-min +1)) + min ;
  console.log(`${number}${randomNumber}`);
}
invokeNumber(1);
const randomNumb = createRandomNum(1,10);
