import { LitElement, html } from 'lit-element';
import { Puzzle } from './models/Puzzle';
import { Team } from './models/Team';
import { Challenge } from './models/Challenge';
import { Game } from './models/Game';

export class T3XDojoClueGeneratorElement extends LitElement {
  /**
   * Define properties. Properties defined here will be automatically 
   * observed.
   */
  static get properties() {
    return {
      teamsCount: { type: Number, },
      puzzlesCount: { type: Number, },
      challengesCount: { type: Number, },
    };
  }

  /**
   * In the element constructor, assign default property values.
   */
  constructor() {
    super();

    this.teamsCount = 0;
    this.puzzlesCount = 0;
    this.challengesCount = 0;
  }

  render() {
    return html`
      <style>
        :host { display: none; }
      </style>
    `;
  }

  generate() {
    const puzzles = this.createPuzzles(this.puzzlesCount, this.challengesCount);
    const teams = this.createTeams(this.teamsCount, puzzles);
    const challenges = this.createChallenges(this.challengesCount, teams);

    const game = new Game((new Date()).getTime(), teams, puzzles, challenges);

    this.dispatchEvent(new CustomEvent('game-created', {
      detail: {
        "game": game,
      },
      bubbles: true,
      composed: true,
    }));

    return game;
  }
  createPuzzles(quantity, piecesQuantity) {
    return [...Array(quantity).keys()].map(i => {
      return new Puzzle(i, String.fromCharCode('A'.charCodeAt(0) + i), piecesQuantity);
    });
  }
  createTeams(quantity, puzzles) {
    let _puzzles = [];
    do {
      _puzzles = _puzzles.concat(puzzles);
    } while (_puzzles.length < quantity);
    _puzzles = shuffle(_puzzles.slice(0, quantity));

    const teamNames = [
    ];

    return [...Array(quantity).keys()].map(i => {
      const teamName = teamNames.length > i ? teamNames[i] : `T${i + 1}`;
      return new Team(i, teamName, _puzzles.pop());
    });
  }
  createChallenges(quantity, teams) {
    return [...Array(quantity).keys()].map(i => {
      return new Challenge(i, `C${i + 1}`, teams);
    });
  }
}

customElements.define('t3x-dojo-clue-generator-element', T3XDojoClueGeneratorElement);
