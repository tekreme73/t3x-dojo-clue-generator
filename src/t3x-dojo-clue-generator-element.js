import { LitElement, html } from 'lit-element';

export class T3XDojoClueGeneratorElement extends LitElement {
  /**
   * Define properties. Properties defined here will be automatically 
   * observed.
   */
  static get properties() {
    return {
      teams: { type: Number, },
      challenges: { type: Number, },

      clues: { type: Array, },
    };
  }

  /**
   * In the element constructor, assign default property values.
   */
  constructor() {
    super();

    this.teams = 0;
    this.challenges = 0;
    this.clues = [];
  }

  render() {
    return html`
      <style>
        :host { display: none; }
      </style>
    `;
  }

  generate() {
    let clues = [];
    let _teams = [...Array(this.teams).keys()];

    for (let challenge = 0; challenge < this.challenges; challenge++) {
      clues[challenge] = [];
      _teams = shuffle(_teams);
      for (let from = 0, to = 1; from < _teams.length; from++ , to = ((to + 1) % _teams.length)) {
        clues[challenge].push(this._createTeamClue(_teams[from], _teams[to]));
      }
    }

    this.clues = clues;

    this.dispatchEvent(new CustomEvent('clues-generated', {
      detail: {
        "clues": this.getClues(),
        "givenClues": this.getGivenClues(),
        "receivedClues": this.getReceivedClues(),
      },
      bubbles: true,
      composed: true,
    }));

    return clues;
  }

  getClues() {
    return this.clues;
  }
  getGivenClues() {
    const givenClues = [];
    const clues = this.getClues();

    for (let team = 0; team < this.teams; team++) {
      givenClues[team] = [];
    }

    for (let challenge = 0; challenge < clues.length; challenge++) {
      const teamClues = clues[challenge];
      teamClues.map(({from, to}) => {
        givenClues[from][challenge] = this._createChallengeClue(to, challenge);
      })
    }

    return givenClues;
  }
  getReceivedClues() {
    const receivedClues = [];
    const clues = this.getClues();

    for (let team = 0; team < this.teams; team++) {
      receivedClues[team] = [];
    }

    for (let challenge = 0; challenge < clues.length; challenge++) {
      const teamClues = clues[challenge];
      teamClues.map(({from, to}) => {
        receivedClues[to][challenge] = this._createChallengeClue(from, challenge);
      })
    }

    return receivedClues;
  }

  _createTeamClue(from, to) {
    return {
      from,
      to,
    };
  }
  _createChallengeClue(team, challenge) {
    return {
      team,
      challenge,
    };
  }
}

customElements.define('t3x-dojo-clue-generator-element', T3XDojoClueGeneratorElement);
