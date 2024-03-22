// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.

// Explain & TIP: This program can handle any number of scores you give it, and it tells you the average score. Handy for seeing how well you did overall!

function Average_Score_Calculator(...numbers:number[]){
  let sum =  numbers.reduce((acc,val) => acc + val,0);
  return sum/numbers.length;
}
console.log(Average_Score_Calculator(60,75,88,90,67,59));