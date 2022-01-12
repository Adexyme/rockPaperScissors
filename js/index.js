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

const gameResult = determineWinner( playerSelection, computerSelection );

console.log( gameResult );

alert( gameResult);
lection === null || ( playerSelection.toUpperCase() !== "ROCK" && playerSelection.toUpperCase() !== "PAPER" && playerSelection.toUpperCase() !== "SCISSORS" )){

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

