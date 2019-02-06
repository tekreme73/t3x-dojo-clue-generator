import { Answer } from "./Answer";

export class Challenge {

  constructor(id, name, teams) {
    this.id = id;
    this.name = name;
    this.teams = teams;

    this.answers = this.createAnswers(shuffle(this.teams));
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
  getAnswers() {
    return this.answers.sort((a, b) => a.getFrom().getName().localeCompare(b.getFrom().getName()));
  }

  createAnswers(teams) {
    let answers = [];
    for (let from = 0, to = 1; from < teams.length; from++ , to = ((to + 1) % teams.length)) {
      answers.push(new Answer(this.getId() * teams.length + from, teams[from], teams[to], this));
    }
    return answers;
  }

  toString() {
    return this.getName();
  }
}
