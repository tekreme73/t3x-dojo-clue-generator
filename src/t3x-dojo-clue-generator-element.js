import { LitElement, html } from 'lit-element';

export class T3XDojoClueGeneratorElement extends LitElement {
  /**
   * Define properties. Properties defined here will be automatically 
   * observed.
   */
  static get properties() {
    return {
      teams: {type: Number,},
      challenges: {type: Number,},
    };
  }

  /**
   * In the element constructor, assign default property values.
   */
  constructor() {
    super();

    this.teams = 0;
    this.challenges = 0;
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
    let _clues = [];

    for(let team = 0; team < this.teams; team++) {
      clues.push([]);
      for(let challenge = 0; challenge < this.challenges; challenge++) {
        _clues.push(team);
      }
    }

    _clues = shuffle(_clues);

    for(let team = 0; team < this.teams; team++) {
      for(let challenge = 0; challenge < this.challenges; challenge++) {
        let index = 0;
        let _team = _clues[index];
        while(_team === team) {
          _team = _clues[++index];
        }

        clues[team].push(this._createClue(_team, challenge));
        _clues.splice( index, 1 ); // Remove the item from the array

        if(index > _clues.length / 2) {
          _clues = shuffle(_clues);
        }
      }
    }

    this.dispatchEvent(new CustomEvent('clues-generated', {
      detail: { clues, },
      bubbles: true,
      composed: true,
    }));

    return clues;
  }

  _createClue(team, challenge) {
    return {
      team,
      challenge,
    };
  }
}

customElements.define('t3x-dojo-clue-generator-element', T3XDojoClueGeneratorElement);
