# CS3750 Portfolio
This contains the projects that I worked on during CS3750 at WSU. The included projects are:
* A tic-tac-toe game
* A connect four game that also includes highscore functionality
* An authentication app that salts and hashes users passwords
* The beginnings of a online speed card game using sockets

## Tic-Tac-Toe
This web application showcases a classic game of Tic-Tac-Toe, offering an interactive and engaging experience for players. Built using React, the app provides a user-friendly interface where two players can take turns placing their respective symbols ("X" and "O") on a 3x3 grid. The app includes intelligent game mechanics that automatically determine the winner based on the established game rules, as well as detect ties.

Each move updates the game status, indicating the current player's turn or announcing the winner when the game concludes. The implementation ensures that squares are clickable only if they are not already occupied and the game is ongoing.

Whether you're reliving the nostalgia of the traditional game or enjoying friendly competitions with friends and family, this Tic-Tac-Toe app offers an accessible and entertaining way to play.


# Connect Four Game

This project is a web-based implementation of the classic Connect Four game, built using the MERN (MongoDB, Express.js, React, and Node.js) stack. This builds upon the front-end worked on for the Tic-Tac-Toe app and adds the full MERN stack to include access to a DB to store records.

The Connect Four game project provides an interactive and engaging experience of the popular Connect Four game. Players take turns dropping colored discs into a vertically suspended grid. The goal is to form a line of four discs of the same color horizontally, vertically, or diagonally before the opponent does. The game's web-based interface allows players to make their moves by clicking on the desired column in the game grid. Here are the key features:

- **Game Logic**: Implementing the game logic to determine winners based on horizontal, vertical, and diagonal connections required careful consideration and testing. The game.js component efficiently manages the state and flow of the game.

- **Dynamic Styling**: Styling the game board to reflect player moves and provide visual feedback posed a challenge. The use of dynamic styling in the Square component was essential to achieve this.

- **Data Management**: Managing game records, including creating, fetching, updating, and deleting records, required setting up API routes and integrating them with the front end.



## User Registration and Password Salting Application

This app is a React-based web interface that allows users to create an account (for nothing in particular) to demonstrate salting and hashing while building upon the MongoDB used in the Connect Four app above. The application utilizes the MERN (MongoDB, Express.js, React, and Node.js) stack to provide a seamless user experience. Here are some key features about this app:

- **User Registration**: Administrators can create new user accounts by providing a username, password, confirming the password, and selecting an account type from the available options: admin, employee, or customer.

- **Password Complexity Check**: The application enforces password complexity rules to enhance security. A password complexity score is calculated based on criteria such as length, presence of lowercase and uppercase letters, numbers, and special characters. If a password doesn't meet the complexity requirements, administrators receive a clear alert detailing the specific deficiencies.

- **Password Salting and Hashing**: To enhance the security of user passwords, the application employs the bcrypt library to generate a random salt for each password. The password is then hashed along with the salt before being stored in the database. This adds an additional layer of protection against password breaches.

- **MongoDB Integration**: User records are stored in a MongoDB collection. The "record.mjs" module defines the API endpoints necessary for CRUD operations on user records, including creation, retrieval, updating, and deletion.
