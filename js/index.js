
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

       return [`Sorry ! That was a draw`,0];

       }
   else if( pSelection === "ROCK" && cSelection === "SCISSORS" ){

       //Player won     

       return [`You won! ${ pSelection } beats ${ cSelection } `,1];

      }
   else if( pSelection === "SCISSORS" && cSelection === "PAPER" ){

       //Player won   
   
       return [`You won! ${ pSelection } beats ${ cSelection } `,1];

      }
   else if( pSelection === "PAPER" && cSelection === "ROCK" ){

       //Player won

       return [`You won ! ${ pSelection } beats ${ cSelection } `,1];

      }
   else{

       //Computer won

      return [`You Lose! ${ cSelection } beats ${ pSelection } `,0];

      }

  }


function game(  ){

let scores = 0;

for( cnt = 0 ; cnt < 5 ; cnt++ ){

const playerSelection = prompt( `Please enter "Rock" or "Paper" or "Scissors" to play.`);

if ( playerSelection === null || ( playerSelection.toUpperCase() !== "ROCK" && playerSelection.toUpperCase() !== "PAPER" && playerSelection.toUpperCase() !== "SCISSORS" )){

   console.log("Wrong Input, Game Over");

   alert( "Wrong Input, Game Over");

   return;

  }

const computerSelection = computerPlay(  );

const gameResult = determineWinner( playerSelection, computerSelection );


scores = scores + gameResult[1] ;

alert( gameResult[0]);

console.log( gameResult[0] );


}
alert( `You: ${ scores } ----- Computer:${ 5 - scores } `);

console.log( `You: ${ scores } ----- Computer:${ 5 - scores }` );



 }


game();

