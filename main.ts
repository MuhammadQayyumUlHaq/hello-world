#! /usr/bin/env node

import { Console } from "console"
import inquirer from "inquirer"

let firstnumber = await inquirer.prompt(
    [
        {
            name: "num1",
            type: "number",
            message: "Enter first number"
        }
    ]
)
let secondnumber = await inquirer.prompt(
    [
        {
            name: "num2",
            type: "number",
            message: "Enter second number"
        }
    ]
)
let operator = await inquirer.prompt(
    [
        {
            name: "operator",
            type: "list",
            message: "Please Select Operator",
            choices: ["+", "-", "*", "/",]
        }
    ]
)
if(operator.operator === "+")
{
    console.log(firstnumber.num1 + secondnumber.num2)
}
else if(operator.operator === "-")
{
    console.log(firstnumber.num1 - secondnumber.num2)
}
else if(operator.operator === "*")
{
    console.log(firstnumber.num1 * secondnumber.num2)
}
else if(operator.operator === "/")
{
    console.log(firstnumber.num1 / secondnumber.num2)
}
else
{
    console.log("Error")
}

