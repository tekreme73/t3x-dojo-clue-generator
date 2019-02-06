
export class Clue {
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

  toString() {
    return this.getName();
  }
}
