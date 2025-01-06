# Bubble Clicker Game

Bubble Clicker Game is a fun and interactive web-based game where players race against time to click the correct bubbles and score points. It's built using **JavaScript**, **HTML**, and **CSS**.

## Features

- **Dynamic Bubble Generation**: Randomly generates a grid of numbered bubbles.
- **Random Target Number**: A new target number is displayed after each successful match.
- **Score Tracking**: Increments your score by 10 points for every correct click.
- **Countdown Timer**: Gives players 60 seconds to achieve the highest possible score.
- **Game Over Screen**: Displays the final score once the timer runs out.

## How to Play

1. Launch the game in your web browser.
2. Look at the "Target Number" displayed on the screen.
3. Click on the bubbles that match the target number.
4. Score as many points as possible within the 60-second timer.

## How It Works

- The game uses JavaScript to:
  - Generate random numbers for bubbles.
  - Keep track of time and score.
  - Update the grid and target number dynamically.
- When the timer reaches zero, the game stops and displays the player's final score.

## Code Explanation

### Key Functions

1. **`makebubble()`**  
   Generates a grid of 168 bubbles, each with a random number between 0 and 9.

2. **`RunTime()`**  
   Starts a 60-second countdown timer. When time runs out, it displays the "Game Over" screen with the final score.

3. **`getNewHit()`**  
   Generates a new target number for the player to match.

4. **`increScores()`**  
   Increases the player's score by 10 points and updates the scoreboard.

5. **Event Listener**  
   Listens for bubble clicks, checks if the clicked number matches the target, and updates the grid and target number accordingly.

### Example Code Snippet

```javascript
p_btm.addEventListener("click", function (elm) {
    var clicknumber = Number(elm.target.textContent);
    if (clicknumber == value) {
        increScores();
        makebubble();
        getNewHit();
    }
});
