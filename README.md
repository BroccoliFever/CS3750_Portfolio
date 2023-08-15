# CS3750_Portfolio
This contains the projects that I worked on during CS3750 at WSU. The included projects are:
* A tic-tac-toe game
* A connect four game that also includes highscore functionality
* An authentication app that salts and hashes users passwords
* The beginnings of a online speed card game using sockets

## Tic-tac-toe

## Connect Four
This web app is built using the MERN (MongoDB, Express.js, React, and Node.js) stack, offering users a way to play the classic game of Connect Four. The game's objective is to connect four of your own colored discs in a row, either horizontally, vertically, or diagonally, before your opponent does.

Using JavaScript, the game simulates different turns and gravity. As players take turns dropping their colored discs into the grid, the simluated gravity causes the discs to fall to the lowest available position within each column to mimic the real game.

When a player achieves victory in Connect Four, the app automatically detects the winner and directs them to the /create page. This page allows the victorious player to input their name and save their achievement in the high scores database. Additionally, the number of turns taken during the game is passed along with the winner's name.

For those interested in comparing their performance against others, the app provides a dedicated "Highscores" page. Here, users can view a list of previous high scores from various Connect Four games played by different players. The high scores are stored securely in a MongoDB Atlas database, ensuring that the data is persistent and can be accessed from any device.
