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
const rectangle1 = document.getElementById("rectangle1");
const rectangle2 = document.getElementById("rectangle2");
const gameOver = document.querySelector('#displayText');
const gravity = 0.4;

class Fighter {
  constructor({position, velocity,  element, offset, imageSrc}) {

    this.position = position;
    this.velocity = velocity;
    this.element = element;
    this.width = 50;
    this.height = 100;
    this.imageSrc = imageSrc;
    this.lastKey;
    this.attackBox = {
        position: {
            x: this.position.x,
            y: this.position.y
        },
        offset,
        width: 100,
        height: 50,
    }
    this.isAttacking;
    this.health = 100;
  }

  draw() {
        // attack box
        if (this.isAttacking) {
            c.fillStyle = 'red'
            c.fillRect(
            this.attackBox.position.x, 
            this.attackBox.position.y, 
            this.attackBox.width, 
            this.attackBox.height
            );
        }    
  }

    update() {       


        //Create attack box
        this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
        this.attackBox.position.y = this.position.y;

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

    attack() {
        this.isAttacking = true;

        setTimeout(() => {
            this.isAttacking = false;
        }, 100)
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
    offset: {
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
    offset: {
        x: -50,
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





//Used for detecting collisions among our two players  
function rectangularCollision({rectangle1, rectangle2}) {
    return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x && 
        rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
        rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    )
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




  /*===================================================== ANIMATE GAME =============================================================== */
  //Animate game
  function animate() {
    animatePlayer1();
    animatePlayer2();
  }


  //---------------------------------------------------- Player 1 features ------------------------------------//
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

    // detect for player 1 attack player 2 collision
    if (rectangularCollision({rectangle1: player1, rectangle2: player2}) && (player1.isAttacking)) {
        player1.isAttacking = false;
        player2.health -= 10;
        document.querySelector('#player2Health').style.width = player2.health + '%';
        
        if (player2.health < 70) {
            document.querySelector('#player2Health').style.background = '#fdb44b'; // Change background color to yellow
        }

        if (player2.health < 30) {
            document.querySelector('#player2Health').style.background = 'red'; // Change background color to yellow
        }        

        console.log('player 1 attack');
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
  
    if (keys.ArrowLeft.pressed && player2.lastKey === 'ArrowLeft') {
      player2.velocity.x = -2;
    } else if (keys.ArrowRight.pressed && player2.lastKey === 'ArrowRight') {
      player2.velocity.x = 2;
    } else {
      player2.velocity.x = 0; // No key is pressed, stop the player
    }

    // detect for player 2 attack player 1 collision
    if (rectangularCollision({rectangle1: player2, rectangle2: player1}) && (player2.isAttacking)) {
        player2.isAttacking = false;
        player1.health -= 10;
        document.querySelector('#player1Health').style.width = player1.health + '%';

        if (player1.health < 70) {
            document.querySelector('#player1Health').style.background = '#fdb44b'; // Change background color to yellow
        }

        if (player1.health < 30) {
            document.querySelector('#player1Health').style.background = 'red'; // Change background color to yellow
        }       
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
            if (player1.velocity.y == 0) 
                player1.velocity.y = -12;  
            break;     
         case 's':
            player1.attack();
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
            break;         
    }

})

  
  window.addEventListener('keyup', (event) => {
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

  })
  
  //============================ MAIN METHOD =======================//
  decreaseTimer();
  animate();