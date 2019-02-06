
export class Answer {
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

  getFromClue() {
    return this.getFrom().getClue(this.getChallenge().getId());
  }
  getToClue() {
    return this.getTo().getClue(this.getChallenge().getId());
  }

  toString() {
    return this.getName();
  }
}
