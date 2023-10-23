/* Course: SENG 513 */
/* Date: OCT 18, 2023 */
/* Assignment 2 */
/* Name: Aaron Gao */
/* UCID: 30056912 */
  
  /*===================================== VARIABLES ===================================== */
  let timer = 30;
  let timerId;

const player1Elements = document.getElementById("player-1");
const player2Elements = document.getElementById("player-2");

const gameOver = document.querySelector('#displayText');
const gravity = 0.7;

class Fighter {
  constructor(options) {
    //I plan to add variable declarations to this constructor 
    //Then I plan to have player 1 and player 2 take on those variables
  }
}

const player1 = new Fighter({
  // properties specific to player 1
});

const player2 = new Fighter({
  // properties specific to player 2
});



  
function rectangularCollision({ rectangle1, rectangle2 }) {
  // position rectangle1 corresponding to the attacking collision box for player 1 
  // position rectangle2 corresponding to the attacking collision box for player 2
}
  
function determineWinner({ player, enemy, timerId }) {
  // clearTimeout(timerId)

  // if player 1 health and player 2 health are equal:
    // display tie using query selector
  // else if player 1 health > player 2 health:
    // display player 1 wins using query selector
  // else if player 1 health < player 2 health:
    // display player 2 wins using query selector

}


  function decreaseTimer() {
    // if timer > 0: (Check if timer greater than 0)
      // timerId stores identifier for timer
      // Set a timer with a 1000ms (1 second) delay
      // time should decrease by 1 every second.
  }

  function animate() {
    // updates player 1 position
    // updates player 2 position

    // set player 1 x velocity to 0
    // set player 2 x velocity to 0

    /*=========================== Player 1 Movement ========================*/
    // if ('A' or 'a' key is pressed and player1.lastkey is 'a' or 'A'):
          // player 1 velocity of x is -5;
          // player 1 swaps sprite to 'run'

    // if ('D' or 'd' key is pressed and player1.lastkey is 'd' or 'D'):
          // player 1 velocity of x is -5;
          // player 1 swaps sprite to 'run'     
    // else: 
          // player 1 swaps sprite to idle     


    /*=========================== Player 2 Movement ========================*/          
    // if (left arrow key is pressed and player2.lastkey is 'arrowLeft'):
          // player 2 velocity of x is -5;
          // player 2 swaps sprite to 'run'

    // if (right arrow key is pressed and player2.lastkey is 'arrowRight'):
          // player 2 velocity of x is -5;
          // player 2 swaps sprite to 'run'     
    // else: 
          // player 2 swaps sprite to idle     

    /*=========================== Jump Movement ========================*/          
    // if player 1 and player 2 velocity is less than 0 
      // player swaps sprite to jump

    // if player 1 and player 2 velocity is greater than 0
      // player swaps sprite to fall  
      
    /*=========================== Detect Collision ========================*/
      // Check if there is a collision between the Player 2's attack box and player 1.
      // Check if enemy is in an attacking state.
      // Player 2's animation frame is at the second frame.
  
      // Update player's health bar using a GSAP animation
      // animate player's health bar (identified by '#playerHealth') by setting its width to player's health percentage
      
    
  }


  /*============================= KEYBOARD LISTENERS ======================== */
  window.addEventListener('keydown', (event) => {
    // if user 1 is not dead:

      // switch (event.key) {
          // if press a or A:           
            // move player 1 left       

          // if press d or D:           
            // move player 1 right      

          // if press w or W:                                   
            // player 1 jumps using velocity shift in y direction

          // if press s or S:
            // call player 1 attack function

        // if user 2 is not dead: 

          // if press left arrow key:
            // move player 2 left

          // if press right arrow key:
            // move player 2 right

          // if press up arrow key:
            // player 2 jumps using velocity shift in y direction

          // if press down arrow key:
            // call player 2 attack function 
      // }

    })

  
  window.addEventListener('keyup', (event) => {
    // switch (event.key) {
          // if released d or D:           
            // player 1 stops moving right  
        
          // if released a or A:          
            // player 1 stops moving left  
    // }
  
    // enemy keys
    // switch (event.key) {
          // if released right arrow:          
            // player 2 stops moving right  
        
          // if released left arrow:            
            // player 2 stops moving left  
    // }
  })
  