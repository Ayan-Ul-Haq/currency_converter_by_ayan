import inquirer from 'inquirer';
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "kindly enter your ID:"
    },
    {
        type: "number",
        name: "userPin",
        message: "kindly enter your pin"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select your account"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select your transaction",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "withdrawMethod",
        choices: [1000, 2000, 10000, 20000],
        message: "Select your amount",
        when(answers) {
            return answers.transactionTypeType == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Select your amount",
        when(answers) {
            return answers.transactionTypeType == "Withdraw";
        },
    }
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 100000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance < EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log("Your remaining amount is: ", remaining);
    }
    else {
        console.log("Insufficent amount");
    }
}
