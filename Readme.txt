To start this web service, first do git pull in your terminal.
Run, npm init, resulting in creation of node_modules folder containing the information and dependencies of the code.
Run command, node index.js to run the web service.
You can start playing the puzzles only after registration and login process.

Components Information:
Quiz.js component contain all the code related to puzzle.
Start.js is used to start the game.
Result.js component contain code of game results.

For Registration, register.js component is created.
Form Login, Login component folder is created.
About component contains the information regarding instructions of the game.

For logout, Go to Profile Section in Navbar and click on logout button.


for database connection and secret key used:
.env file
DB="mongodb+srv://bhavya:bhavyaverma12345@cluster0.w5ligv9.mongodb.net/?retryWrites=true&w=majority"
SECRET_KEY="ITSBHAVYAVERMA"
