#!/usr/bin/env node

import chalkAnimation, { karaoke } from 'chalk-animation';
import inquirer from 'inquirer';

const rest = (ms = 3000) => new Promise((r) => setTimeout(r,ms));

async function welcome() {
    const KaroleTitle = chalkAnimation.karaoke("Welcome to the Calculator made by Anish\n");
    await rest();
    KaroleTitle.stop();
}

async function userImformation() {
    const data = await inquirer.prompt([{
        type: "list",
        name: "operator",
        message: "Select an Operator ?\n",
        choices: ["Addition","Subtraction","Multiplication","Division"],
        default: "operator"
    },
    {
        type: "number",
        name: "num1",
        message: "First Number ?\n",
        default: 0,
    },
    {
        type: "number",
        name: "num2",
        message: "Second Number ?\n",
        default: 0,
    },
])
return Answer(data.operator,data.num1,data.num2);
}

const Answer = async function(isOperator:string,number1:number,number2:number) {
    let result: number;
    switch(isOperator) {
        case "Addition":
            result = number1 + number2;
            console.log(result);
            break;
        case "Subtraction":
            result = number1 - number2;
            console.log(result);
            break;
        case "Multiplication":
            result = number1 * number2;
            console.log(result);
            break;
        case "Division":
            result = number1 / number2;
            console.log(result);
            break;
    }
}

await welcome();
await userImformation();


