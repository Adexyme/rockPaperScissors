function computerPlay(  ){

const choices = [ "rock","paper","scissors"] ;

const choiceIndex = Math.floor(Math.random()*3);

  return choices[choiceIndex];

  }


function determineWinner( playerSelection, computerSelection ){

   const pSelection = playerSelection.toUpperCase();

   const cSelection = computerSelection.toUpperCase();

   if( pSelection === cSelection ){  

       //Draw

       return `Sorry ! That was a draw`;

       }
   else if( pSelection === "ROCK" && cSelection === "SCISSORS" ){

       //Player won     

       return`You won! ${ pSelection } beats ${ cSelection } `;

      }
   else if( pSelection === "SCISSORS" && cSelection === "PAPER" ){

       //Player won   
   
       return`You won! ${ pSelection } beats ${ cSelection } `;

      }
   else if( pSelection === "PAPER" && cSelection === "ROCK" ){

       //Player won

       return`You won ! ${ pSelection } beats ${ cSelection } `;

      }
   else{

       //Computer won

      return `You Lose! ${ cSelection } beats ${ pSelection } `;

      }

  }

const playerSelection = "rock";

const computerSelection = computerPlay(  );

console.log(determineWinner( playerSelection, computerSelection ) );