function oddEvenChecker(num) {
    if (typeof num === 'number') {
        num%2 == 0
        ? console.log(`The number is even.`)
        : console.log(`The number is odd.`);
    }
    else
        console.log('Invalid Output.');
}

oddEvenChecker(8);
oddEvenChecker(7);
oddEvenChecker('2');

function budgetChecker(num) {
    if (typeof num === 'number') {
        num > 40000
        ? console.log(`You are over the budget.`)
        : console.log(`You have resources left.`);
    }
    else
        console.log('Invalid Output.');
}

budgetChecker(40001);
budgetChecker(40000);
budgetChecker(`40000`);
