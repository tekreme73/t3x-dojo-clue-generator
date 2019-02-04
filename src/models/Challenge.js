import { Clue } from "./Clue";

export class Challenge {

  constructor(id, name, teams) {
    this.id = id;
    this.name = name;
    this.teams = teams;

    this.clues = [];
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getTeams() {
    return this.teams;
  }
  getClues() {
    if(this.clues == null || this.clues.length <= this.teams.length) {
      this.clues = this.createClues(shuffle(this.teams));
    }
    return this.clues;
  }

  createClues(teams = this.teams) {
    let clues = [];
    for (let from = 0, to = 1; from < teams.length; from++ , to = ((to + 1) % teams.length)) {
      clues.push(new Clue(this.getId() * teams.length + from, teams[from], teams[to], this));
    }
    return clues;
  }

  toString() {
    return this.getName();
  }
}
