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
      teams: {type: Array,},
      puzzles: {type: Array,},
      challenges: {type: Array,},
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
    this.teams = [];
    this.puzzles = [];
    this.challenges = [];

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
        h2 + .challenges .challenge, h2 + .teams .team { width: 100%; min-width: 180px; max-width: 500px; margin: 0.5em 0em 0.5em 2em; }
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
        <label>Team quantity</label>
        <input type="number" min="2" .value="${this.teamsCount}" placeholder="Team quantity" @input="${this.handleTeamsInput}"/>
      </div>

      <div class="input-wrapper">
        <label>Puzzle quantity</label>
        <input type="number" min="2" .value="${this.puzzlesCount}" placeholder="Puzzle quantity" @input="${this.handlePuzzlesInput}"/>
      </div>

      <div class="input-wrapper">
        <label>Challenge quantity</label>
        <input type="number" min="1" .value="${this.challengesCount}" placeholder="Challenge quantity" @input="${this.handleChallengesInput}"/>
      </div>

      <button @click="${this.generate}">GENERATE</button>

      ${this.challenges.length ? html`
        <h2>Challenge view</h2>
        <ul class="challenges">
          ${this.challenges.map(challenge => {
            return html`
              <li class="challenge" id="challenge-${challenge.getId()}">
                <h3>Challenge ${challenge}</h3>
                <ul class="teams">
                  ${challenge.getAnswers()
                  .map((answer) => {
                    return html`
                      <li class="answer" id="answer-${answer.getId()}">
                        <span class="from">Team "${answer.getFrom()}"</span>
                        offer
                        <span class="clue">${answer.getToClue()}</span>
                        to
                        <span class="to">Team "${answer.getTo()}"</span>
                      </li>
                    `;
                  })}
                </ul>
              </li>
            `;
          })}
        </ul>
      ` : ''}
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
  set game(value) {
    if(value instanceof Game) {
      this.teams = value.getTeams();
      this.puzzles = value.getPuzzles();
      this.challenges = value.getChallenges();
    } 
  }
}

customElements.define('t3x-dojo-clue-generator-app', T3XDojoClueGeneratorApp);
