
export class Team {
  constructor(id, name, puzzle) {
    this.id = id;
    this.name = name;
    this.puzzle = puzzle;
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getPuzzle() {
    return this.puzzle;
  }
  getClue(clueId) {
    const clues = this.getPuzzle().getClues();
    return clues.length > clueId && clueId >= 0 ? clues[clueId] : null;
  }

  toString() {
    return this.getName();
  }
}
