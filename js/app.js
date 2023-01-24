'use strict';

console.log('hi')
let username = prompt('What is your name')
console.log('Greetings ' + username)



// && is the "logical and"
//one false and it will not run
// ll is the 'logical or' double pipe
// ! the logical not 

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
// console.log('Enjoy the website ' + username)

