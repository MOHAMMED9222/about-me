'use strict';

console.log('hi')
let username = prompt('What is your name')
console.log('Greetings ' + username)



// && is the "logical and"
//one false and it will not run
// ll is the 'logical or' double pipe
// ! the logical not 
// ${username} money curly

let doilikewrestling = prompt("Do i like wrestling? YES or NO?").toLowerCase();
if (doilikewrestling === 'yes' || doilikewrestling === 'y'){
  console.log('you are correct! i love wrestling')
}
let whoisbetter = prompt("Who is better? CENA or ORTON?").toLowerCase();
if (whoisbetter === 'cena' || whoisbetter === 'c'){
  console.log('Thats right, YOU CANT SEE MEEEE!');
} else if (whoisbetter === 'orton') {
  // console.log('Not even his dad was better');
  alert('Not even his dad was better');
}
let whoownswwe = prompt('Who owns the WWE? Vince or Triple H?').toLowerCase();
if (whoownswwe === 'vince' || whoownswwe === 'v'){
  // console.log('Yes, he does');
  alert('Yes, he does');
} else if (whoisbetter === 'triple h' || 'hhh'){
  // console.log('That is incorrect');
  alert('That is incorrect');
}
let whatisbetter = prompt('STARCADE OR WRESTLEMANIA?').toLowerCase();
if (whatisbetter === 'starcade'){
  // console.log('Old school but i prefer Wrestlemania');
  alert('Old school but i prefer Wrestlemania');
} else if (whatisbetter === 'wrestlemania'){
  // console.log('of course, so many classics');
  alert('of course, so many classics');
}
let cantyoutell = prompt('Cant you tell i love wrestling?YES OR NO?').toLowerCase();
if (cantyoutell === 'yes' || 'y'){
  // console.log('LETS GO');
  alert('LETS GO');
} else if (cantyoutell === 'no' || 'n'){
  // console.log('OFF THE TOP ROPE!!!');
  alert('OFF THE TOP ROPE!!!');
}


let score = 0

let myFavChampionship = ['European'];
let userResponse = prompt('What is my favorite wwe title?')

let attemptsThatRemain = 6;
let answeredCorrectly = false;

while (attemptsThatRemain > 0) {
  attemptsThatRemain--;
  //console.log(`I'm in the while loop. you have ${attemptsThatRemain} attempts remaining`);
  alert(`Nah, Think Europe. You have ${attemptsThatRemain} attempts remaining`);
  for (let i = 0; i < myFavChampionship.length; i++) {
    //console.log(myFavChampionship[i]);
    //alert(myFavChampionship[i]);
    if (myFavChampionship[i].toLowerCase() === userResponse.toLowerCase()) {
      //console.log('You are correct!')
      alert('You are correct!')
      score++; 
      answeredCorrectly = true
      attemptsThatRemain = 0 
    } 
  } 
  if (!answeredCorrectly){
  userResponse = prompt('What is my favorite wwe title?') 
  }
}

let attemptsRemaining = 4;
let howmanyLosses = 2

 while (attemptsRemaining) {
   attemptsRemaining--;
 // code that runs as long as the condition is 
 // evaluated to true
 
let userResponse = prompt('How many times did Taker lose at Wrestlemania?')
   userResponse = Number(userResponse)

   if(userResponse === howmanyLosses){
     //console.log('that is correct');
     alert('that is correct');
     break 
   } else {
     //console.log('that is wrong');
     alert('that is wrong');
     if (userResponse > howmanyLosses) {
       //console.log('too high, try lower!');
       alert('too high, try lower!');
     } else {
       //console.log('thats toooo low');
       alert('thats toooo low');
       }
     }  
   //console.log(`the users has ${attemptsRemaining} attempts remaining`);
   alert(`the users has ${attemptsRemaining} attempts remaining`);

   if (attemptsRemaining === 0) {
     //console.log('the answer is 2');
     alert('the answer is 2');
   }
   }
// console.log('Enjoy the website ' + username)


// let x = 4;
// if (x < 5) {
  // this code will run if x < 5 
//}
