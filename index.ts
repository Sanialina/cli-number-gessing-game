#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber= Math.floor(Math.random() *10+1);

const answers = await inquirer.prompt([
    {
        name:"userGuessNumber",
        type:"number",
        message:"Please guess a number between 1-10:",
    }
]);

if(answers.userGuessNumber=== randomNumber){
console.log("Congratulations! you have guessed a right number");
}
else{
    console.log("You guessed a wrong number");
}
console.log(randomNumber);