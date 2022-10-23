# Snake Client Project

[Snake](https://en.wikipedia.org/wiki/Snake_(video_game_genre)) is a storied video game,  greatly popularized in the late 90s and early aughts when it came stock on Nokia cell phones. In Snake, the player maneuvers a dot (the head of the snake) and the snake grows by ‘eating’ pieces of food. The progreessively growing snake becomes an obstacle to itself as it seeks out and eats food. The goal of the game is to grow the snake to become as large as possible without bumping into the side walls (or itself), upon which it dies.

This is simply a networked, multiplayer take on the genre, where you compete with the other snakes for food, and they in turn become obstacles that can potentially kill you.

Before you can run this client, you will need to be running the server side which you can download and install from [here](https://github.com/lighthouse-labs/snek-multiplayer). 


## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command. 
- You can enter a name for your snake (up to three letters long) by entering it after the commands that launch the game.
  - For example: `node play.js Leo` will name your snake `Leo`.


## Control Surface

- The snake can be maneuvered using either the [Arrow keys](https://en.wikipedia.org/wiki/Arrow_keys) or wasd (where `w` is up, `a` is left, `s` is down and `d` is right).
- There is canned sass on hand: pressing either the `l`, `o`, `p` or `q` keys will send scripted messages to your snake.