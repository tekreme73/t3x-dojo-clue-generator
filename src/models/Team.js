
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
  getPuzzlePiece(pieceId) {
    const pieces = this.getPuzzle().getPieces();
    return pieces.length > pieceId && pieceId >= 0 ? pieces[pieceId] : null;
  }

  toString() {
    return this.getName();
  }
}
