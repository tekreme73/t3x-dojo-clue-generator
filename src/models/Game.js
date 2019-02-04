
export class Game {

  constructor(id, teams, puzzles, challenges) {
    this.id = id;

    this.teams = teams;
    this.puzzles = puzzles;
    this.challenges = challenges;
  }

  getId() {
    return this.id;
  }
  getChallenges() {
    return this.id;
  }
  getPuzzles() {
    return this.name;
  }
  getTeams() {
    return this.teams;
  }
}
