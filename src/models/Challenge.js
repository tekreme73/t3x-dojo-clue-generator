import { Clue } from "./Clue";

export class Challenge {

  constructor(id, name, teams) {
    this.id = id;
    this.name = name;
    this.teams = teams;

    this.clues = this.createClues(shuffle(this.teams));
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
    return this.clues.sort((a, b) => a.getFrom().getName().localeCompare(b.getFrom().getName()));
  }

  createClues(teams) {
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
