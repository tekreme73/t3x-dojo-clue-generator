
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

  getFromPuzzlePiece() {
    return this.getFrom().getPuzzlePiece(this.getChallenge().getId());
  }
  getToPuzzlePiece() {
    return this.getTo().getPuzzlePiece(this.getChallenge().getId());
  }

  toString() {
    return this.getName();
  }
}
