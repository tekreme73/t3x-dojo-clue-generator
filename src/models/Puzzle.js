
export class Puzzle {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }

  toString() {
    return this.getName();
  }
}
