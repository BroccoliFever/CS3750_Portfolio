# CS3750_Portfolio
This contains the projects that I worked on during CS3750 at WSU. The included projects are:
* A tic-tac-toe game
* A connect four game that also includes highscore functionality
* An authentication app that salts and hashes users passwords
* The beginnings of a online speed card game using sockets

## Tic-Tac-Toe
This web application showcases a classic game of Tic-Tac-Toe, offering an interactive and engaging experience for players. Built using React, the app provides a user-friendly interface where two players can take turns placing their respective symbols ("X" and "O") on a 3x3 grid. The app includes intelligent game mechanics that automatically determine the winner based on the established game rules, as well as detect ties.

Each move updates the game status, indicating the current player's turn or announcing the winner when the game concludes. The implementation ensures that squares are clickable only if they are not already occupied and the game is ongoing.

Whether you're reliving the nostalgia of the traditional game or enjoying friendly competitions with friends and family, this Tic-Tac-Toe app offers an accessible and entertaining way to play.


## Connect Four
This web app builds upon the Tic-Tac-Toe app, implementing the full MERN (MongoDB, Express.js, React, and Node.js) stack and offering users a way to play the classic game of Connect Four. The game's objective is to connect four of your own colored discs in a row, either horizontally, vertically, or diagonally, before your opponent does.

Using JavaScript, the game simulates different turns and gravity. As players take turns dropping their colored discs into the grid, the simluated gravity causes the discs to fall to the lowest available position within each column to mimic the real game.

When a player achieves victory in Connect Four, the app automatically detects the winner and directs them to the /create page. This page allows the victorious player to input their name and save their achievement in the high scores database. Additionally, the number of turns taken during the game is passed along with the winner's name.

For those interested in comparing their performance against others, the app provides a dedicated "Highscores" page. Here, users can view a list of previous high scores from various Connect Four games played by different players. The high scores are stored securely in a MongoDB Atlas database, ensuring that the data is persistent and can be accessed from any device.


## User Registration and Password Salting Application

The **User Registration and Password Salting Application** is a React-based web interface that allows users to create an account (for nothing in particular) to demonstrate salting and hashing while building upon the MongoDB used in the Connect Four app above. The application utilizes the MERN (MongoDB, Express.js, React, and Node.js) stack to provide a seamless user experience. Here are some key features about this app:

- **User Registration**: Administrators can create new user accounts by providing a username, password, confirming the password, and selecting an account type from the available options: admin, employee, or customer.

- **Password Complexity Check**: The application enforces password complexity rules to enhance security. A password complexity score is calculated based on criteria such as length, presence of lowercase and uppercase letters, numbers, and special characters. If a password doesn't meet the complexity requirements, administrators receive a clear alert detailing the specific deficiencies.

- **Password Salting and Hashing**: To enhance the security of user passwords, the application employs the bcrypt library to generate a random salt for each password. The password is then hashed along with the salt before being stored in the database. This adds an additional layer of protection against password breaches.

- **MongoDB Integration**: User records are stored in a MongoDB collection. The "record.mjs" module defines the API endpoints necessary for CRUD operations on user records, including creation, retrieval, updating, and deletion.
