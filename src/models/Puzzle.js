import { Clue } from "./Clue";

export class Puzzle {
  constructor(id, name, clueQuantity) {
    this.id = id;
    this.name = name;

    this.clues = this.createClues(clueQuantity);
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getClues() {
    return this.clues;
  }

  createClues(quantity) {
    const clues = [];

    for (let i = 0; i < quantity; i++) {
      clues.push(new Clue(this.getId() * quantity + i, `${this.getName()}-${i + 1}`, this));
    }
    return clues;
  }

  toString() {
    return this.getName();
  }
}
