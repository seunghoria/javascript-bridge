const GameController = require("./GameController.js");

class App {
  constructor() {
    this.gameController = new GameController();
  }

  play() {
    this.gameController.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
