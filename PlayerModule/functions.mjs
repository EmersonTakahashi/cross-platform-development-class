import Player from "./player.mjs";

function GetPlayerInfo(player) {
  return `#${player.number} ${player.name}: ${player.position} (${player.age})`;
}

export default GetPlayerInfo;
