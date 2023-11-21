# SENG 513 Assignment 2
**Author**: Aaron Gao
**UCID**: 30056912

## GAME OVERVIEW

**Title**: Costume Warriors

**Target Platform**: This game is designed for Desktop with two players.

**Game Genre**: fighter, strategy, 2 players, retro game.

### Game Objective
- The primary goal of players is to defeat one another within the time limit.
- The player whose health bar points reach 0 first loses.

### Rules of the Game
- Players need to click the Start button to begin the game.
- Players have the option to view the instructions page to learn the game mechanics.
- Player 1 controls the skull warrior with 'a', 's', 'w', and 'd' on the keyboard to move left, right, jump, or attack. 
- Player 2 controls the pumpkin warrior with 'left-arrow key', 'right-arrow key', 'up-arrow key', and 'down-arrow key' on the keyboard to move left, right, jump, or attack. 
- If either player attacks, and the opposing player collides with the hit box, then the opposing takes damage. 
- The first player whose health bar reaches 0 loses. 
- If time runs out, the player with more health points in their health bar is the winner. 
-If time runs out, and both players have the same health bar points, then the game will declare the game as "Draw"

## Game Mechanics
### Player 1
**Movement**:
- 'a': Move left
- 'd': Move right

**Mobility**:
- 'w': Jump  

**Combat**:
- 's': Attack


### Player 2
**Movement**:
- 'leftArrow': Move left
- 'rightArrow': Move right

**Mobility**:
- 'upArrow': Jump

**Combat**:
- 'downArrow': Attack

**Description**: Depending on the button that a player pressed, the character will switch states and sprites accordingly. Collision boxes will also be created when a player attacks. Each player will generate a collision box, and if it collides with the opposing player, the opposing player takes damage and lose health points. Jumping is an asthetic used for dodging the collision boxes. 

**Health Points**: Players have a set number of health points. When a player's health points reach zero, they lose the game.

**Interactions**: The game will feature player-to-player and player-to-environment mechanisms. Players cannot go beyond the borders of the screen and collide with one another through collision boxes.

### Instruction button: Direct to instructions page.
### Start button: Start the game for both players.
### Back button: Direct back to home page.

## UI DESIGN
### Layout and Structure
- Logo and Icon
- Background image
- Button to direct you to instructions page
- Button to start the game
- Game container with a bar container and battlefield container
- Bar container contains 2 health bars for each player and a timer
- Battlefield container displays a windows with two players
- Copyright and author at the bottom

### UI Design
- Two button navigations, one for instructions page, and one for the game
- Instructions page provide clear explanation on how to play the game
- Game page contains 2 health bars for each player and a timer
- Game page contains a button to direct you back to home page 

### Visual Elements
- Fighters
- Map
- Logo of the game
- Grass
- HUD

## FUNCTIONALITY DESIGN

#### Custom Animations

- The user will control either player 1 or player 2 by using the keyboard.
- We're using CSS transitions to smoothly animate the movement of the players when keys are pressed:

Example:

```
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
  
```

- We add an event listener to the keydown event, which listens for keyboard inputs.
When the left or right arrow key is pressed, or a or d on the keyboard is pressed, the respective players will move accordingly.
- I am debating whether to use css or assigning new sprites using javascript. It will all depend on my later implementation.
- The timer will decrease in 1000 milliseconds which equates to a second real time. 
- We will detect collisions using collision boxes that will be created using rectangles and new instances will be built using javascript.


#### Custom Interaction Mechanism

If your game involves moving and interacting elements, implement a custom collision detection mechanism.

This is how to avoid collision:
```
function rectangularCollision({ rectangle1, rectangle2 }) {
  // position rectangle1 corresponding to the attacking collision box for player 1 
  // position rectangle2 corresponding to the attacking collision box for player 2
}

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
  // I will be adding health, sprites, frames, position, etc.
});

const player2 = new Fighter({
  // properties specific to player 2
  // I will be adding health, sprites, frames, position, etc.
});

```

The collision detection logic checks if the bounding rectangles of the player and the hit box collides with opposing players.
If the player press "Attack" button then a rectangular box will be created to correspond as a hit box. 
If a collision is detected the health bar points should decrease until one of the players runs out of health points.
The game will then display text showcasing the winner. Each player will soon have their own constructor and properties. 


#### Custom Algorithms
1. An algorithm to show the users who is the winner by comparing the scores between these two players.
2. I will implement a simple scoring algorithm that increases the score when a player successfully avoids an obstacle.

```
let gravity = 0.7;

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


```

We initialize the gravity to a specified number, then players will be given velocities for x and y in their properties. 
As a player's velocity on the y-axis increases, we want to make sure the players do not go out of bounds so we set restrictions. 
The y-velocity will be set to 0 after the player falls through a certain percentage or view height and view width of the screen.
We want to also ensure that this functionality is optimized for all screen sizes. 
The timer will be going through subsequent until it reaches 0. Players with higher health will be determined as the winner, otherwise if
their health points are equivalent we will end the game in a draw.


End of Assignment 2 README.md

