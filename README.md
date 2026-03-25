# Rock Paper Scissors (Console-Based JavaScript Game)

## Overview

This project is a simple **Rock, Paper, Scissors** game built using **JavaScript**, where the entire gameplay runs in the **browser console**.

The game is played between a human user and the computer for **5 rounds**, and the final winner is घोषित based on the scores.

---

## Project Structure

```
Rock-Paper-Scissors
 ┣ 📜 index.html
 ┗ 📜 logic.js
```

---

## Initial Test (Hello World)

Before the game starts, a simple test is executed in `index.html`:

```javascript
console.log("Hello World");
```

This ensures that the JavaScript environment is working correctly before running the game.

---

## How the Game Works

### 1. Game Start

* The script `logic.js` is linked to `index.html`
* The function `playGame()` is automatically executed

---

### 2. Player Input

* The user is prompted to enter:

  * `rock`
  * `paper`
  * `scissors`
* Input is converted to lowercase to make it **case-insensitive**

---

### 3. Computer Choice

* The computer generates a random number using `Math.random()`
* Based on the value, it selects:

  * ROCK
  * PAPER
  * SCISSORS

---

### 4. Round Logic

* Each round:

  * Displays both choices in the console
  * Determines the winner
  * Updates scores accordingly

Example:

```
Human chose: ROCK
Computer chose: SCISSORS
ROCK beats SCISSORS.
```

---

### 5. Game Loop

* The game runs for **5 rounds** using a `for` loop
* Scores are tracked using:

```javascript
let humanScore = 0, computerScore = 0;
```

---

### 6. Final Result

After 5 rounds:

* Final scores are displayed
* Overall winner is announced

Example:

```
----- FINAL SCORE -----
HUMAN SCORE: 3
COMPUTER SCORE: 2
HUMAN WINS THE GAME!
```

---

## Technologies Used

* HTML
* JavaScript (Vanilla)
* Browser Console (`prompt`, `console.log`)

---

## How to Run

1. Download or clone the repository
2. Open `index.html` in your browser
3. Open Developer Tools:

   * Right click → Inspect → Console
4. Follow the prompts to play the game

---

## Concepts Practiced

* Functions and modular code
* Conditional statements (`if-else`)
* Loops (`for`)
* Random number generation
* User input handling
* Basic game logic

---

## Limitations

* No graphical interface (console-based only)
* Uses `prompt()` for input (browser dependent)
* Limited input validation

---

## Future Improvements

* Add a graphical user interface (buttons & UI)
* Replace `prompt()` with event-based input
* Display results on the webpage instead of console
* Add replay option

---

## Author

**Muhammad Saim Naveed**

---

## Acknowledgment

This project is part of learning JavaScript fundamentals and building logic through small interactive games.
