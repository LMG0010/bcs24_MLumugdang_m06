/*
    Switch
        - is a conditional statement that evaluates an expression and matches it to one of several cases
        - alternative for multiple if-else statements
    
        syntax:
            switch(expression) {
                case value1:
                    -case represents a possible match.
                    [code to be executed if expression matches value];
                    break;
                     - a point control is transferred to the end of the switch statement.
                case value2:
                    [code to be executed if expression matches value];
                    break;
                ....
                default:
                    [executes when no prior cases matched, though 'default' is still optional];
            }
*/


// sample

let color = 'red';

switch(color) {
    case 'red':
        console.log('The color is red.');
        //break;
        // the break statement ensures that the code inside the other cases is not executed.
    case 'green':
        console.log('The color is green.');
        break;
    case 'blue':
        console.log('The color is blue.');
        break;
    default:
        console.log('The color is unknown.');
}

/*
    Mini Activity
*/
// Can also be function shirtColor(day.toLowerCase()) or in switch(day.toLowerCase())
function shirtColor(day) {
    if (typeof day === 'string') {
        day = day.toLowerCase();
        switch(day) {
            case 'monday':
                console.log(`Today is Monday, wear Black.`);
                break;
            case 'tuesday':
                console.log(`Today is Tuesday, wear Green.`);
                break;
            case 'wednesday':
                console.log(`Today is Wednesday, wear Yellow.`);
                break;
            case 'thursday':
                console.log(`Today is Thursday, wear Red.`);
                break;
            case 'friday':
                console.log(`Today is Friday, wear Violet.`);
                break;
            case 'saturday':
                console.log(`Today is Saturday, wear Blue.`);
                break;
            case 'sunday':
                console.log(`Today is Sunday, wear White.`);
                break;
            default:
                console.log(`Invalid input. Enter a valid day of the week.`);
        }
    }
    else {
        console.log('User Input is not a string.');
    }
}

shirtColor('Monday');
shirtColor('Tuesday');
shirtColor('Wednesday');
shirtColor('Thursday');
shirtColor('Friday');
shirtColor('Saturday');
shirtColor('Sunday');
shirtColor('January');
shirtColor(true);

// End of Mini-Activity

function roleChecker(role) {
    switch(role) {
        case 'Admin':
            console.log('Welcome Admin to the dashboard');
            break;
        case 'user':
            console.log('You are not authorised to view this page.');
            break;
        case 'Guest':
            console.log('Go to the registration page to register.');
            break;
        default:
            console.log('Invalid Role.');
        // by default you switch ends with default case, so therefore even if no break it will end the switch
    }
}

roleChecker('Guest');

function gradeEvaluator(grade) {
    if (typeof grade === 'number') {
        switch(true) {
            case grade >= 90:
                //console.log('A');
                //break;
                return 'A';
            case grade >= 80:
                return 'B';
            case grade >= 71:
                return 'C';
            case grade <= 70:
                return 'F';
            default:
                return 'Invalid';
        }
    }
    else
        return 'Input not a number.';
}

console.log(gradeEvaluator(90));
console.log(gradeEvaluator(80));
console.log(gradeEvaluator(71));
console.log(gradeEvaluator(70));
console.log(gradeEvaluator('yes'));
gradeEvaluator(90);
//a = 2;
//if (a == 2)
//    console.log(true);
   //a = 5;
//else
//    console.log("hi");


// Ternary Operator
/*
    Ternary Operator
        Shorthand way of writing if-else statements.

        syntax: 
        condition ? if-statement: else-statement
 */
let price = 5000;

if (price > 1000) {
    console.log(`Price is over 1000.`);
}
else
    console.log(`Price is less than 1000.`);

price > 1000 ? console.log(`Price is over 1000.`) : console.log(`Price is less than 1000.`);

let hero = 'Anpanman';

hero === 'Vegeta' ? console.log('You are the prince of all Saiyans.') : console.log('You are not even royalty.');
// else statements in ternary operators is required.

let villain = 'Harvey Dent';
villain == 'Harvey Dent' 
? console.log('You are supposed to be the chosen one.') 
: console.log('Who you?');

// ternary operators were created so that we can have a if-else statement in one line.
// ternary operators are not meant for complex if-else trees. However it is advantageous to use in simple i.e. statements for shorter code.

let robin = 'Dick Grayson', currentRobin = 'Tim Drake';
let isFirstRobin = currentRobin === robin ? true : false;
console.log(isFirstRobin);

// else if with ternary operators
let a =7;

a === 5
? console.log('A')
: ( a === 10 
    ? console.log('A is 10')
    : console.log('A is not 5 or 10'));