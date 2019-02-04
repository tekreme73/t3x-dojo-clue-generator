
export class Clue {
  constructor(id, from, to, challenge) {
    this.id = id;
    this.from = from;
    this.to = to;
    this.challenge = challenge;
  }

  getId() {
    return this.id;
  }
  getName() {
    return `${this.getTo().getPuzzle()}-${this.getId()}`;
  }
  getFrom() {
    return this.from;
  }
  getTo() {
    return this.to;
  }
  getChallenge() {
    return this.challenge;
  }

  toString() {
    return this.getName();
  }
}
