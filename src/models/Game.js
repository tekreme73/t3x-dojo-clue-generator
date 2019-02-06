
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
  getTeams() {
    return this.teams;
  }
  getPuzzles() {
    return this.puzzles;
  }
  getChallenges() {
    return this.challenges;
  }
}
