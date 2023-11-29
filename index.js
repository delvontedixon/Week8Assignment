/*
Coding Steps:
Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.
*/

/*My app is Avengers themed. Team Cap vs Team Tony. For this, I plan to have two players per team.*/

class Avenger {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  describe() {
    return `${this.name} uses ${this.weapon}.`;
  }
}

class Team {
  constructor(name) {
    this.name = name;
    this.players = [];
  }

  addPlayer(player) {
    if (player instanceof Player) {
      this.players.push(player);
    } else {
      throw new Error(
        `You can only add an instance of Player, Arguement isnt a player: ${player}`
      );
    }
  }

  describe() {
    return `${this.name} has ${this.players.length} players:`;
  }
}
