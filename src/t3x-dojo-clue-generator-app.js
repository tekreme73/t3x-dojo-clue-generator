import { LitElement, html } from 'lit-element';

export class T3XDojoClueGeneratorApp extends LitElement {
  /**
   * Define properties. Properties defined here will be automatically 
   * observed.
   */
  static get properties() {
    return {
      message: { type: String },
    };
  }

  /**
   * In the element constructor, assign default property values.
   */
  constructor() {
    // Must call superconstructor first.
    super();

    this.message = 'Hello World from LitElement';
  }

  /**
   * Define a template for the new element by implementing LitElement's
   * `render` function. `render` must return a lit-html TemplateResult.
   */
  render() {
    return html`
      <style>
        :host { display: block; }
        :host([hidden]) { display: none; }
      </style>

      <h1>Start DOJO clue generator!</h1>
      <p>${this.message}</p>
    `;
  }
}

customElements.define('t3x-dojo-clue-generator-app', T3XDojoClueGeneratorApp);
