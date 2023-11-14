/* Course: SENG 513 */
/* Date: NOV 12, 2023 */
/* Assignment 3 */
/* Name: Aaron Gao */
/* UCID: 30056912 */
  
  /*===================================== VARIABLES ===================================== */

const player1Elements = document.getElementById("player-1");
const player2Elements = document.getElementById("player-2");
const battlefield = document.getElementById("battlefield-map");
const rectangle1 = document.getElementById("rectangle1");
const rectangle2 = document.getElementById("rectangle2");
const gameOver = document.querySelector('#displayText');
const gravity = 0.4;
let timer = 30;
let timerId;
let endGame = false;

// Additional code for playing audio
const audio = new Audio('../assets/WesternTheme.wav');

const gruntAudio1 = new Audio('../assets/grunt1.wav'); // Replace with the correct path to your grunt sound effect file

const gruntAudio2 = new Audio('../assets/grunt2.wav');

function playGruntAudio1() {
    gruntAudio1.play();
}

function playGruntAudio2() {
    gruntAudio2.play();
}


function playAudio() {
    audio.play();
  }

// Create a Fighter instance and associate it with the player1Elements DOM element
const player1 = new Fighter({
    position: {
        x: -300,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: 0,
        y: 0
    },
    imageUrl: '../assets/player1/player1',    
    element: player1Elements
});

const player2 = new Fighter({
    position: {
        x: 300,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: -50,
        y: 0
    },    
    imageUrl: '../assets/player2/player2',    
    element: player2Elements
});


const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    }
}


//==================================== METHODS =======================================//


//Used for detecting collisions among our two players  
function rectangularCollision({rectangle1, rectangle2}) {
    return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x && 
        rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
        rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    )
}


//Used for determining winner  
function determineWinner({ player1, player2, timerId }) {
    clearTimeout(timerId)
    document.querySelector('#displayText').style.display = 'flex';
    
    if (player1.health === player2.health) {
      document.querySelector('#displayText').innerHTML = 'Draw';
    } else if (player1.health > player2.health) {
      document.querySelector('#displayText').innerHTML = 'Player 1 Wins';
    } else if (player1.health < player2.health) {
      document.querySelector('#displayText').innerHTML = 'Player 2 Wins';
    }
}

    //Used for decrementing time every second
  function decreaseTimer() {
    
    if (timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000)
        timer--
        document.querySelector('#timer').innerHTML = timer
      }
    
      if (timer === 0) {
        determineWinner({ player1, player2, timerId })
        endGame = true;
      }
  }




  /*===================================================== ANIMATE GAME FUNCTIONS =============================================================== */
  //Animate game
// Animate game
function animate() {
    animatePlayer(player1);
    animatePlayer(player2);
  }


  //---------------------------------------------------- Player 1 features ------------------------------------//
  function animatePlayer1() {
    
    
    player1.update(); 

    
    if ((player1.animateHit === false) && (!player1.dead)) {

    // Player 1 Movement
    if (keys.a.pressed && player1.lastKey === 'a') {
        if (player1.position.x >= -300) {
          player1.velocity.x = -2;
        } else {
          player1.velocity.x = 0;
        } 
        
        player1.switchSprite("dash");
  
      } else if (keys.d.pressed && player1.lastKey === 'd') {
  
          if (player1.position.x <= 500) {
              player1.velocity.x = 2;
          } else {
              player1.velocity.x = 0;
          }
        player1.switchSprite("dash");
  
      } else {
  
          player1.velocity.x = 0; // No key is pressed, stop the player
          if (player1.animateAttack) {
              player1.switchSprite("attack");
          } else {
              player1.switchSprite("idle");
          }
      }
  
      // jumping
      if (player1.velocity.y > 0) {
          if (player1.animateAttack) {
              player1.switchSprite("attack");
          } else {
              player1.switchSprite('jump');
          }
      } else if (player1.velocity.y < 0) {
          player1.switchSprite('idle');
      }
  

    } else {

        if (player1.health <= 0) {
            player1.switchSprite("death");
            
        } else {
            player1.switchSprite("hurt");
        }
        
    }

    


    // detect for player 1 attack player 2 collision
    if (rectangularCollision({rectangle1: player1, rectangle2: player2}) && (player1.isAttacking)) {
        
        player1.isAttacking = false;
        player2.takeHit();

        document.querySelector('#player2Health').style.width = player2.health + '%';
        
        

        if (player2.health < 70) {
            document.querySelector('#player2Health').style.background = '#fdb44b'; // Change background color to yellow
        }

        if (player2.health < 30) {
            document.querySelector('#player2Health').style.background = 'red'; // Change background color to yellow
        }        

    }
        //End game based on health
        if (player1.health <= 0 || player2.health <= 0) {
            determineWinner({player1, player2, timerId});
        }

    // Update the position of the associated DOM element 
    player1.element.style.transform = `translate(${player1.position.x}px, ${player1.position.y}px)`;

    //display attack for player 1
    if (player1.isAttacking) {
        rectangle1.style.display = 'block';
        rectangle1.style.transform = `translate(${player1.attackBox.position.x+50}px, ${player1.attackBox.position.y}px)`;
    } else {
        rectangle1.style.display = 'none';
    }
  
    requestAnimationFrame(animatePlayer1);
  }
  

  //---------------------------------- Player 2 features -------------------------------------//
  function animatePlayer2() {

    player2.update();
    
    if (player2.animateHit === false && !player2.dead) {
    
        // movement
        if (keys.ArrowLeft.pressed && player2.lastKey === 'ArrowLeft') {        
            
            if (player2.position.x >= -500) {
                player2.velocity.x = -2;
            } else {
                player2.velocity.x = 0;
            }        
            player2.switchSprite("dash");  

        } else if (keys.ArrowRight.pressed && player2.lastKey === 'ArrowRight') {
            
            if (player2.position.x <= 330) {
                player2.velocity.x = 2;
            } else {
                player2.velocity.x = 0;
            }
            player2.switchSprite("dash");    

        } else {

            player2.velocity.x = 0; // No key is pressed, stop the player
            if (player2.animateAttack) {
                player2.switchSprite("attack");
            } else {
                player2.switchSprite("idle");
            }
        }

        // jumping
        if (player2.velocity.y > 0) {

            // override jump if player 2 is attacking
            if (player2.animateAttack) {
                player2.switchSprite("attack");
            } else {
                player2.switchSprite('jump');
            }

        } else if (player2.velocity.y < 0) {
            player2.switchSprite('idle');
        }    
    } else {
        if (player2.health <= 0) {
            player2.switchSprite("death");
            
        } else {
            player2.switchSprite("hurt");
        }
    }  


    // detect for player 2 attack player 1 collision
    if (rectangularCollision({rectangle1: player2, rectangle2: player1}) && (player2.isAttacking)) {
    
        player2.isAttacking = false;
        player1.takeHit();

        document.querySelector('#player1Health').style.width = player1.health + '%';

        if (player1.health < 70) {
            document.querySelector('#player1Health').style.background = '#fdb44b'; // Change background color to yellow
        }

        if (player1.health < 30) {
            document.querySelector('#player1Health').style.background = 'red'; // Change background color to yellow
        }   
            
    }        

            //End game based on health
            if (player1.health <= 0 || player2.health <= 0) {
                determineWinner({player1, player2, timerId});
            }

    // Update the position of the associated DOM element
    player2.element.style.transform = `translate(${player2.position.x}px, ${player2.position.y}px)`;    
  
    
    //Display attacking for player 2
    if (player2.isAttacking) {
        rectangle2.style.display = 'block';
        rectangle2.style.transform = `translate(${player2.attackBox.position.x}px, ${player2.attackBox.position.y}px)`;
    } else {
        rectangle2.style.display = 'none';
    }

    requestAnimationFrame(animatePlayer2);
  }
  



  // Start the animation for player1 and player2
  requestAnimationFrame(animatePlayer1);
  requestAnimationFrame(animatePlayer2);
  



  

  /*============================= KEYBOARD LISTENERS ======================== */
  window.addEventListener('keydown', (event) => {

    playAudio();
    if ((!player1.dead) && (!player2.dead) && (!endGame)) {
        switch (event.key) {
            case 'd':
                keys.d.pressed = true;
                player1.lastKey = 'd';           
                break;
            case 'a':
                keys.a.pressed = true;
                player1.lastKey = 'a';
                break;
            case 'w':
                if (player1.velocity.y == 0) {
                    player1.velocity.y = -12;
                }
                break;     
            case 's':
                player1.attack();
                playGruntAudio1();
                break;  
                
            case 'ArrowRight':
                keys.ArrowRight.pressed = true;
                player2.lastKey = 'ArrowRight';            
                break;
            case 'ArrowLeft':
                keys.ArrowLeft.pressed = true;
                player2.lastKey = 'ArrowLeft';          
                break;
            case 'ArrowUp':
                if (player2.velocity.y == 0) 
                    player2.velocity.y = -12;
                break;                
            case 'ArrowDown':
                player2.attack();  
                playGruntAudio2();         
                break;         
        }
    }
})

  
  window.addEventListener('keyup', (event) => {
    if ((!player1.dead) && (!player2.dead) && (!endGame)) {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false;
            break;
        case 'a':
            keys.a.pressed = false;
            break;        
    }

    switch (event.key) {      
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            break;        
    }
    }
  })
  

  //============================ MAIN METHOD =======================//
  
  decreaseTimer();
  animate();