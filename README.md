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



