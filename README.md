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
- We add an event listener to the keydown event, which listens for keyboard inputs.
When the left or right arrow key is pressed, or a or d on the keyboard is pressed, the respective players will move accordingly.
- I am debating whether to use css or assigning new sprites using javascript. It will all depend on my later implementation.
- The timer will decrease in 1000 milliseconds which equates to a second real time. 
- We will detect collisions using collision boxes that will be created using rectangles and new instances will be built using javascript.


#### Custom Interaction Mechanism

The collision detection logic checks if the bounding rectangles of the player and the hit box collides with opposing players.
If the player press "Attack" button then a rectangular box will be created to correspond as a hit box. 
If a collision is detected the health bar points should decrease until one of the players runs out of health points.
The game will then display text showcasing the winner. Each player will soon have their own constructor and properties. 


#### Custom Algorithms
1. An algorithm to show the users who is the winner by comparing the scores between these two players.
2. I will implement a simple scoring algorithm that increases the score when a player successfully avoids an obstacle.
We initialize the gravity to a specified number, then players will be given velocities for x and y in their properties. 
As a player's velocity on the y-axis increases, we want to make sure the players do not go out of bounds so we set restrictions. 
The y-velocity will be set to 0 after the player falls through a certain percentage or view height and view width of the screen.
We want to also ensure that this functionality is optimized for all screen sizes. 
The timer will be going through subsequent until it reaches 0. Players with higher health will be determined as the winner, otherwise if
their health points are equivalent we will end the game in a draw.


## Citations:

The material I took is open sourced

1. Player 1 grunt sound effects grunt1.wav:
[a link](https://freesound.org/people/F.M.Audio/sounds/695378/)

2. Player 2 grunt sound effects grunt2.wav:
[a link](https://freesound.org/people/Nox_Sound/sounds/474651/)

3. Background music in combat WesternTheme.wav:
[a link](https://freesound.org/people/humanoide9000/sounds/699748/)

4. Unused background music PeaceTheme.mp3:
[a link](https://freesound.org/people/Migfus20/sounds/586838/)

5. Tree Sprite:
[a link](https://www.dlf.pt/ddownload/iixomxb_dry-grass-clipart-sprite-2d-tree-sprite-png/)