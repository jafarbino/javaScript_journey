let calculateTotal = (price, tax) => {
return `The final total is ${price+ tax}`;

};

let result = calculateTotal(50, 8);
console.log(result);


if (0) {
  console.log( 'Hello' );
}


console.log('What is the official name of javaScript?');
let answer;
if (answer == 'ECMAScript'){
    console.log('Right!');
}
else {
    console.log('You don\'t know? ECMAScript!');
}


let checkGrade = (score) => {
if (score >= 50){
    console.log(`Passed with ${score}`);
}
else{
    console.log(`Failed with ${score}`);
}

};

checkGrade(75);

let canAccess = (age, hasTicket) => {
if (age >= 18 && hasTicket== true){
    return console.log("entry allowed");
}
else {
    return console.log("entry denied");
}

};

canAccess(20, true);

let countTo = (max) => {
for (i=1; i<= max; i++){
    console.log(i);
}

};
countTo(5);
Bash
git init