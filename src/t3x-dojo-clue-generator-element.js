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
    let clues = Array(this.teams).fill(Array(this.challenges).fill({}));

    this.dispatchEvent(new CustomEvent('clues-generated', {
      detail: { clues, },
    }));

    return clues;
  }
}

customElements.define('t3x-dojo-clue-generator-element', T3XDojoClueGeneratorElement);
