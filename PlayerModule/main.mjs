import Player from "./player.mjs";
import GetPlayerInfo from "./functions.mjs";

const cr7 = new Player("Cristiano Ronaldo", 38, 7, "Forward");
const neymar = new Player("Neymar Jr", 28, 10, "Forward");
const emerson = new Player("Emerson Takahashi", 22, 8, "Forward");
const jose = new Player("Jose Ronaldo", 38, 7, "Forward");
const joao = new Player("João Ronaldo", 38, 7, "Forward");
const joao2 = new Player("João 2 Ronaldo", 38, 7, "Forward");

console.log(Player.getNumberOfPlayers);
console.log(GetPlayerInfo(cr7));
