import { Piece } from "./Piece";

export class Puzzle {
  constructor(id, name, piecesQuantity) {
    this.id = id;
    this.name = name;

    this.pieces = this.createPieces(piecesQuantity);
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getPieces() {
    return this.pieces;
  }

  createPieces(quantity) {
    const pieces = [];

    for (let i = 0; i < quantity; i++) {
      pieces.push(new Piece(this.getId() * quantity + i, `${this.getName()}-${i + 1}`, this));
    }
    return pieces;
  }

  toString() {
    return this.getName();
  }
}
