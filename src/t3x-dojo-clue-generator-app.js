import { LitElement, html } from 'lit-element';

import './t3x-dojo-clue-generator-element';
import { Game } from './models/Game';

export class T3XDojoClueGeneratorApp extends LitElement {
  /**
   * Define properties. Properties defined here will be automatically 
   * observed.
   */
  static get properties() {
    return {
      teamsCount: {type: Number,},
      puzzlesCount: {type: Number,},
      challengesCount: {type: Number,},

      game: {type: Game,},
    };
  }

  /**
   * In the element constructor, assign default property values.
   */
  constructor() {
    // Must call superconstructor first.
    super();

    this.teamsCount = 10;
    this.puzzlesCount = 12;
    this.challengesCount = 6;

    this.game = null;

    this.addEventListener('game-created', (e) => {
      this.game = e.detail.game;
    });
  }

  /**
   * Define a template for the new element by implementing LitElement's
   * `render` function. `render` must return a lit-html TemplateResult.
   */
  render() {
    return html`
      <style>
        :host { display: block; }
        h2 + .challenges, h2 + .teams { display: flex; flex-wrap: wrap; }
        h2 + .challenges .challenge, h2 + .teams .team { width: 100%; min-width: 180px; max-width: 300px; }
        .input-wrapper { margin: 0.2em 0; }
        .input-wrapper label { display: inline-block; min-width: 150px; }
      </style>

      <h1>Start DOJO clue generator!</h1>
      <t3x-dojo-clue-generator-element
        id="generator"
        teamsCount="${this.teamsCount}"
        puzzlesCount="${this.puzzlesCount}"
        challengesCount="${this.challengesCount}"
      ></t3x-dojo-clue-generator-element>

      <div class="input-wrapper">
        <label>Nombre d'équipes</label>
        <input type="number" min="2" .value="${this.teamsCount}" placeholder="Nombre d'équipes" @input="${this.handleTeamsInput}"/>
      </div>
      
      <div class="input-wrapper">
        <label>Nombre de puzzles</label>
        <input type="number" min="2" .value="${this.puzzlesCount}" placeholder="Nombre de puzzles" @input="${this.handlePuzzlesInput}"/>
      </div>
      
      <div class="input-wrapper">
        <label>Nombre de défis</label>
        <input type="number" min="1" .value="${this.challengesCount}" placeholder="Nombre de défis" @input="${this.handleChallengesInput}"/>
      </div>

      <button @click="${this.generate}">GENERATE</button>

      <h2>Organisation par défi</h2>
      <ul class="challenges">
        ${this.clues.map((teamClues, challengeName) => {
          return html`
            <li class="challenge" id="challenge-${challengeName}">
              <h3>Challenge ${challengeName}</h3>
              <ul class="teams">
                ${teamClues.sort((a, b) => a.from - b.from)
                .map(({from, to}) => {
                  return html`
                    <li class="clue" id="clue-${from}-${to}">
                      <span class="from">Équipe ${from+1}</span>
                      =>
                      <span class="to">Équipe ${to+1}</span>
                    </li>
                  `;
                })}
              </ul>
            </li>
          `;
        })}
      </ul>
    `;
  }
  generate() {
    this.shadowRoot.getElementById('generator').generate();
  }
  handleTeamsInput(e) {
    this.teamsCount = e.target.value;
  }
  handlePuzzlesInput(e) {
    this.puzzlesCount = e.target.value;
  }
  handleChallengesInput(e) {
    this.challengesCount = e.target.value;
  }
}

customElements.define('t3x-dojo-clue-generator-app', T3XDojoClueGeneratorApp);
