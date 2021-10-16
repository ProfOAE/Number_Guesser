let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//generating random number
const generateTarget = () =>{
  return Math.floor(Math.random()*10)
}

// checking who wins
const compareGuesses = (sn, hn, cn) => {
sn = generateTarget();
// difference between human no: and secret no:
hn = hn - sn;
hn < 0 ? hn = hn* -1 : hn = hn; // making it +ve
// diff betwn computer no and secret no:
cn = cn - sn;
cn < 0? cn = cn * -1 : cn = cn;
// returning false if computer wins
if (cn < hn){
  return false;
}  // returning true if human wins
return true;
}

//update score function
const updateScore = update => {
 if (update === 'human'){
   humanScore++;
 }
 else {
   computerScore++;
 }
}

// updating the Round
const advanceRound = () => {
  return currentRoundNumber++;
}

//testing the code
updateScore('human');
console.log(humanScore);

updateScore ('computer');
console.log(computerScore);
