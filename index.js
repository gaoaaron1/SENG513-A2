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
const battlefield = document.getElementById("battlefield-map");

const gameOver = document.querySelector('#displayText');
const gravity = 0.7;

class Fighter {
  constructor({position, velocity, element}) {
    this.position = position;
    this.velocity = velocity;
    this.element = element;
    this.height = 150;
    this.lastKey;
  }

  update() {
            //Update positions of our entity
            //Update positions of our entity
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            
            if (this.position.y + this.height + this.velocity.y >= 150) {
                this.velocity.y = 0;
            } else {
                this.velocity.y += gravity;
            }
  }
}


// Create a Fighter instance and associate it with the player1Elements DOM element
const player1 = new Fighter({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    element: player1Elements
});

const player2 = new Fighter({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
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


  
function rectangularCollision({ rectangle1, rectangle2 }) {
  // position rectangle1 corresponding to the attacking collision box for player 1 
  // position rectangle2 corresponding to the attacking collision box for player 2
}

  
function determineWinner({ player, enemy, timerId }) {
    clearTimeout(timerId)
    document.querySelector('#displayText').style.display = 'flex'
    if (player.health === enemy.health) {
      document.querySelector('#displayText').innerHTML = 'Tie'
    } else if (player.health > enemy.health) {
      document.querySelector('#displayText').innerHTML = 'Player 1 Wins'
    } else if (player.health < enemy.health) {
      document.querySelector('#displayText').innerHTML = 'Player 2 Wins'
    }
}


  function decreaseTimer() {
    if (timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000)
        timer--
        document.querySelector('#timer').innerHTML = timer
      }
    
      if (timer === 0) {
        determineWinner({ player, enemy, timerId })
      }
  }


  function animate() {
    animatePlayer1();
    animatePlayer2();
  }



  function animatePlayer1() {
    player1.update();
  
    // Player 1 Movement
    if (keys.a.pressed && player1.lastKey === 'a') {
      player1.velocity.x = -2;
    } else if (keys.d.pressed && player1.lastKey === 'd') {
      player1.velocity.x = 2;
    } else {
      player1.velocity.x = 0; // No key is pressed, stop the player
    }

    // Player 1 Jumping
    //if (player.velocity.y < 0) {
        //player.switchSprite('jump')
    //} else if (player.velocity.y > 0) {
        //player.switchSprite('fall')
    //}

  
    // Update the position of the associated DOM element 
    player1.element.style.transform = `translate(${player1.position.x}px, ${player1.position.y}px)`;
  
    
    requestAnimationFrame(animatePlayer1);
  }
  
  function animatePlayer2() {
    player2.update();
  
    if (keys.ArrowLeft.pressed && player2.lastKey === 'ArrowLeft') {
      player2.velocity.x = -2;
    } else if (keys.ArrowRight.pressed && player2.lastKey === 'ArrowRight') {
      player2.velocity.x = 2;
    } else {
      player2.velocity.x = 0; // No key is pressed, stop the player
    }
  
    // Update the position of the associated DOM element
    player2.element.style.transform = `translate(${player2.position.x}px, ${player2.position.y}px)`;
  
    requestAnimationFrame(animatePlayer2);
  }
  
  // Start the animation for player1 and player2
  requestAnimationFrame(animatePlayer1);
  requestAnimationFrame(animatePlayer2);
          

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
      
    
  



  

  /*============================= KEYBOARD LISTENERS ======================== */
  window.addEventListener('keydown', (event) => {

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
            player1.velocity.y = -15;  
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
            player2.velocity.y = -15;   
            break;                
        
    }
    console.log(event.key);
})

  
  window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false;
            break;
        case 'a':
            keys.a.pressed = false;
            break;
        case 'w':
            keys.w.pressed = false;
            break;            
    }

    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            break;
        case 'ArrowUp':
            keys.ArrowUp.pressed = false;
            break;            
    }
    console.log(event.key);
  })
  
  //============================ MAIN METHOD =======================//
  decreaseTimer();
  animate();