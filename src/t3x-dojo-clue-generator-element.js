import { LitElement, html } from 'lit-element';

export class T3XDojoClueGeneratorElement extends LitElement {
  /**
   * Define properties. Properties defined here will be automatically 
   * observed.
   */
  static get properties() {
    return {};
  }

  /**
   * In the element constructor, assign default property values.
   */
  constructor() {
    super();
  }

  render() {
    return html`
      <style>
        :host { display: none; }
      </style>
    `;
  }
}

customElements.define('t3x-dojo-clue-generator-element', T3XDojoClueGeneratorElement);
