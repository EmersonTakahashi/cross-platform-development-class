import Person from "./person.mjs";

class Player extends Person {
  static numberOfPlayers = 0;
  constructor(name, age, number, position) {
    super(name, age);
    this.number = number;
    this.position = position;
    Player.numberOfPlayers++;
  }

  get getNumberOfPlayers() {
    return this.numberOfPlayers;
  }
}

export default Player;
