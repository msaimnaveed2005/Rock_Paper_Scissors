# Rock_Paper_Scissors
# 🪨📄✂️ Rock Paper Scissors (Console Game)

## 📌 Overview

This is a simple **Rock, Paper, Scissors** game implemented in **JavaScript**, played entirely in the **browser console** using `prompt()` and `console.log()`.

The game allows a human player to compete against the computer for **5 rounds**, with scores tracked and a final winner announced at the end.

---

## 🚀 Features

* 🎮 Play against the computer
* 🔁 5-round game loop
* 📊 Score tracking (Human vs Computer)
* 📢 Round-by-round results
* 🏆 Final winner declaration
* 🧪 Includes a simple **Hello World test** before the game starts

---

## 🛠️ How It Works

### 1. Hello World Test

Before the game starts, a simple **Hello World** message is executed to verify that the script is running correctly.

### 2. Player Input

* The user is prompted to enter:

  * `rock`
  * `paper`
  * `scissors`
* Input is case-insensitive (e.g., `Rock`, `ROCK`, `rock` all work)

### 3. Computer Choice

* The computer randomly selects:

  * ROCK
  * PAPER
  * SCISSORS

### 4. Game Logic

* The game compares both choices and determines:

  * Winner of the round
  * Updates scores accordingly

### 5. Game Loop

* The game runs for **5 rounds**
* After each round:

  * Choices are displayed
  * Winner is announced
  * Scores are updated

### 6. Final Result

* After 5 rounds:

  * Final scores are displayed
  * Overall winner is घोषित 🎉

---

## 🧑‍💻 Technologies Used

* JavaScript (Vanilla)
* Browser Console (`prompt`, `console.log`)

---

## ▶️ How to Run

1. Open your browser (Chrome recommended)
2. Open Developer Tools:

   * Right click → Inspect → Console
3. Copy and paste the script
4. Run the function:

   ```javascript
   playGame();
   ```

---

## 📷 Example Output

```
Human chose: ROCK
Computer chose: SCISSORS
ROCK beats SCISSORS. HUMAN WINS!

Score → Human: 1 | Computer: 0
----------------------

FINAL SCORE → HUMAN: 3 | COMPUTER: 2
🎉 HUMAN WINS THE GAME!
```

---

## 📚 Learning Purpose

This project was built to practice:

* Functions
* Conditional logic
* Loops
* User input handling
* Basic game design

---

## 🔮 Future Improvements

* Add GUI (buttons instead of prompt)
* Add animations and styling
* Keep score across multiple games
* Improve input validation

---

## 🙌 Acknowledgment

This project is part of learning JavaScript fundamentals and building logic through small interactive games.

---

## 📌 Author

**Muhammad Saim Naveed**
