define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.property$1 = _exports.property = property;
  _exports.removeNodesFromTemplate = removeNodesFromTemplate;
  _exports.insertNodeIntoTemplate = insertNodeIntoTemplate;
  _exports.templateFactory$1 = _exports.templateFactory = templateFactory;
  _exports.markerRegex = _exports.nodeMarker = _exports.marker = _exports.TemplateInstance$1 = _exports.TemplateInstance = _exports.templateCaches$1 = _exports.templateCaches = _exports.render$1 = _exports.render$2 = _exports.render = _exports.parts$1 = _exports.parts = _exports.EventPart$1 = _exports.EventPart = _exports.PropertyPart$1 = _exports.PropertyPart = _exports.PropertyCommitter$1 = _exports.PropertyCommitter = _exports.BooleanAttributePart$1 = _exports.BooleanAttributePart = _exports.NodePart$1 = _exports.NodePart = _exports.AttributePart$1 = _exports.AttributePart = _exports.AttributeCommitter$1 = _exports.AttributeCommitter = _exports.isPrimitive$1 = _exports.isPrimitive = _exports.nothing$1 = _exports.nothing = _exports.noChange$1 = _exports.noChange = _exports.removeNodes$1 = _exports.removeNodes = _exports.reparentNodes$1 = _exports.reparentNodes = _exports.isCEPolyfill = _exports.isDirective$1 = _exports.isDirective = _exports.directive$1 = _exports.directive = _exports.defaultTemplateProcessor$1 = _exports.defaultTemplateProcessor = _exports.DefaultTemplateProcessor$1 = _exports.DefaultTemplateProcessor = _exports.LitElement = _exports.SVGTemplateResult$2 = _exports.SVGTemplateResult$1 = _exports.SVGTemplateResult = _exports.TemplateResult$3 = _exports.TemplateResult$2 = _exports.TemplateResult$1 = _exports.TemplateResult = _exports.svg$2 = _exports.svg$1 = _exports.svg = _exports.html$2 = _exports.html$1 = _exports.html = _exports.UpdatingElement$1 = _exports.UpdatingElement = _exports.notEqual$1 = _exports.notEqual = _exports.defaultConverter$1 = _exports.defaultConverter = _exports.eventOptions$1 = _exports.eventOptions = _exports.queryAll$1 = _exports.queryAll = _exports.query$1 = _exports.query = _exports.customElement$1 = _exports.customElement = _exports.css$1 = _exports.css = _exports.unsafeCss$1 = _exports.unsafeCss = _exports.CSSResult$1 = _exports.CSSResult = _exports.supportsAdoptingStyleSheets$1 = _exports.supportsAdoptingStyleSheets = _exports.$t3xDojoClueGeneratorElement = _exports.$t3xDojoClueGeneratorApp = _exports.$litHtml = _exports.$template = _exports.$templateResult = _exports.$templateInstance = _exports.$templateFactory = _exports.$shadyRender = _exports.$render = _exports.$parts = _exports.$part = _exports.$modifyTemplate = _exports.$dom = _exports.$directive = _exports.$defaultTemplateProcessor = _exports.$litElement = _exports.$updatingElement = _exports.$decorators = _exports.$cssTag = void 0;
  _exports.T3XDojoClueGeneratorElement = _exports.T3XDojoClueGeneratorApp = _exports.lastAttributeNameRegex = _exports.createMarker$1 = _exports.createMarker = _exports.isTemplatePartActive$1 = _exports.isTemplatePartActive = _exports.Template$1 = _exports.Template = _exports.boundAttributeSuffix = void 0;

  function _templateObject8_75f4202027e811e98441efc9cfed962d() {
    var data = babelHelpers.taggedTemplateLiteral(["\n                    <li class=\"clue\" id=\"clue-", "-", "\">\n                      <span class=\"challenge\">Indice ", "</span>\n                      par\n                      <span class=\"team\">\xC9quipe ", "</span>\n                    </li>\n                  "]);

    _templateObject8_75f4202027e811e98441efc9cfed962d = function _templateObject8_75f4202027e811e98441efc9cfed962d() {
      return data;
    };

    return data;
  }

  function _templateObject7_75f4202027e811e98441efc9cfed962d() {
    var data = babelHelpers.taggedTemplateLiteral(["\n            <li class=\"team\" id=\"team-", "\">\n              <h3>\xC9quipe ", "</h3>\n              <ul class=\"clues\">\n                ", "\n              </ul>\n            </li>\n          "]);

    _templateObject7_75f4202027e811e98441efc9cfed962d = function _templateObject7_75f4202027e811e98441efc9cfed962d() {
      return data;
    };

    return data;
  }

  function _templateObject6_75f4202027e811e98441efc9cfed962d() {
    var data = babelHelpers.taggedTemplateLiteral(["\n                    <li class=\"clue\" id=\"clue-", "-", "\">\n                      <span class=\"challenge\">Indice ", "</span>\n                      pour\n                      <span class=\"team\">\xC9quipe ", "</span>\n                    </li>\n                  "]);

    _templateObject6_75f4202027e811e98441efc9cfed962d = function _templateObject6_75f4202027e811e98441efc9cfed962d() {
      return data;
    };

    return data;
  }

  function _templateObject5_75f4202027e811e98441efc9cfed962d() {
    var data = babelHelpers.taggedTemplateLiteral(["\n            <li class=\"team\" id=\"team-", "\">\n              <h3>\xC9quipe ", "</h3>\n              <ul class=\"clues\">\n                ", "\n              </ul>\n            </li>\n          "]);

    _templateObject5_75f4202027e811e98441efc9cfed962d = function _templateObject5_75f4202027e811e98441efc9cfed962d() {
      return data;
    };

    return data;
  }

  function _templateObject4_75f4202027e811e98441efc9cfed962d() {
    var data = babelHelpers.taggedTemplateLiteral(["\n                    <li class=\"clue\" id=\"clue-", "-", "\">\n                      <span class=\"from\">\xC9quipe ", "</span>\n                      =>\n                      <span class=\"to\">\xC9quipe ", "</span>\n                    </li>\n                  "]);

    _templateObject4_75f4202027e811e98441efc9cfed962d = function _templateObject4_75f4202027e811e98441efc9cfed962d() {
      return data;
    };

    return data;
  }

  function _templateObject3_75f4202027e811e98441efc9cfed962d() {
    var data = babelHelpers.taggedTemplateLiteral(["\n            <li class=\"challenge\" id=\"challenge-", "\">\n              <h3>Indice ", "</h3>\n              <ul class=\"teams\">\n                ", "\n              </ul>\n            </li>\n          "]);

    _templateObject3_75f4202027e811e98441efc9cfed962d = function _templateObject3_75f4202027e811e98441efc9cfed962d() {
      return data;
    };

    return data;
  }

  function _templateObject2_75f4202027e811e98441efc9cfed962d() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host { display: block; }\n        h2 + .challenges, h2 + .teams { display: flex; flex-wrap: wrap; }\n        h2 + .challenges .challenge, h2 + .teams .team { width: 100%; min-width: 180px; max-width: 300px; }\n        .input-wrapper { margin: 0.2em 0; }\n        .input-wrapper label { display: inline-block; min-width: 150px; }\n      </style>\n\n      <h1>Start DOJO clue generator!</h1>\n      <t3x-dojo-clue-generator-element id=\"generator\" teams=\"", "\" challenges=\"", "\"></t3x-dojo-clue-generator-element>\n\n      <div class=\"input-wrapper\">\n        <label>Nombre d'\xE9quipes</label>\n        <input type=\"number\" min=\"2\" .value=\"", "\" placeholder=\"Nombre d'\xE9quipes\" @input=\"", "\"/>\n      </div>\n      \n      <div class=\"input-wrapper\">\n        <label>Nombre de d\xE9fis</label>\n        <input type=\"number\" min=\"1\" .value=\"", "\" placeholder=\"Nombre de d\xE9fis\" @input=\"", "\"/>\n      </div>\n\n      <button @click=\"", "\">GENERATE</button>\n\n      <h2>Organisation par d\xE9fi</h2>\n      <ul class=\"challenges\">\n        ", "\n      </ul>\n\n      <h2>Organisation par \xE9quipe (\xE0 quelle \xE9quipe doit \xEAtre donn\xE9 l'indice)</h2>\n      <ul class=\"teams\">\n        ", "\n      </ul>\n\n      <h2>Organisation par \xE9quipe (quelle \xE9quipe doit envoyer l'indice)</h2>\n      <ul class=\"teams\">\n        ", "\n      </ul>\n    "]);

    _templateObject2_75f4202027e811e98441efc9cfed962d = function _templateObject2_75f4202027e811e98441efc9cfed962d() {
      return data;
    };

    return data;
  }

  function _templateObject_75f4202027e811e98441efc9cfed962d() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host { display: none; }\n      </style>\n    "]);

    _templateObject_75f4202027e811e98441efc9cfed962d = function _templateObject_75f4202027e811e98441efc9cfed962d() {
      return data;
    };

    return data;
  }

  /**
  @license
  Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
  var supportsAdoptingStyleSheets = 'adoptedStyleSheets' in Document.prototype;
  _exports.supportsAdoptingStyleSheets$1 = _exports.supportsAdoptingStyleSheets = supportsAdoptingStyleSheets;
  var constructionToken = Symbol();

  var CSSResult =
  /*#__PURE__*/
  function () {
    function CSSResult(cssText, safeToken) {
      babelHelpers.classCallCheck(this, CSSResult);

      if (safeToken !== constructionToken) {
        throw new Error('CSSResult is not constructable. Use `unsafeCss` or `css` instead.');
      }

      this.cssText = cssText;
    } // Note, this is a getter so that it's lazy. In practice, this means
    // stylesheets are not created until the first element instance is made.


    babelHelpers.createClass(CSSResult, [{
      key: "styleSheet",
      get: function get() {
        if (this._styleSheet === undefined) {
          // Note, if `adoptedStyleSheets` is supported then we assume CSSStyleSheet
          // is constructable.
          if (supportsAdoptingStyleSheets) {
            this._styleSheet = new CSSStyleSheet();

            this._styleSheet.replaceSync(this.cssText);
          } else {
            this._styleSheet = null;
          }
        }

        return this._styleSheet;
      }
    }]);
    return CSSResult;
  }();
  /**
   * Wrap a value for interpolation in a css tagged template literal.
   *
   * This is unsafe because untrusted CSS text can be used to phone home
   * or exfiltrate data to an attacker controlled site. Take care to only use
   * this with trusted input.
   */


  _exports.CSSResult$1 = _exports.CSSResult = CSSResult;

  var unsafeCss = function unsafeCss(value) {
    return new CSSResult(String(value), constructionToken);
  };

  _exports.unsafeCss$1 = _exports.unsafeCss = unsafeCss;

  var textFromCSSResult = function textFromCSSResult(value) {
    if (babelHelpers.instanceof(value, CSSResult)) {
      return value.cssText;
    } else {
      throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(value, ". Use 'unsafeCss' to pass non-literal values, but\n            take care to ensure page security."));
    }
  };
  /**
   * Template tag which which can be used with LitElement's `style` property to
   * set element styles. For security reasons, only literal string values may be
   * used. To incorporate non-literal values `unsafeCss` may be used inside a
   * template string part.
   */


  var css = function css(strings) {
    for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }

    var cssText = values.reduce(function (acc, v, idx) {
      return acc + textFromCSSResult(v) + strings[idx + 1];
    }, strings[0]);
    return new CSSResult(cssText, constructionToken);
  };

  _exports.css$1 = _exports.css = css;
  var cssTag = {
    supportsAdoptingStyleSheets: supportsAdoptingStyleSheets,
    CSSResult: CSSResult,
    unsafeCss: unsafeCss,
    css: css
  };
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  _exports.$cssTag = cssTag;

  var legacyCustomElement = function legacyCustomElement(tagName, clazz) {
    window.customElements.define(tagName, clazz); // Cast as any because TS doesn't recognize the return type as being a
    // subtype of the decorated class when clazz is typed as
    // `Constructor<HTMLElement>` for some reason.
    // `Constructor<HTMLElement>` is helpful to make sure the decorator is
    // applied to elements however.

    return clazz;
  };

  var standardCustomElement = function standardCustomElement(tagName, descriptor) {
    var kind = descriptor.kind,
        elements = descriptor.elements;
    return {
      kind: kind,
      elements: elements,
      // This callback is called once the class is otherwise fully defined
      finisher: function finisher(clazz) {
        window.customElements.define(tagName, clazz);
      }
    };
  };
  /**
   * Class decorator factory that defines the decorated class as a custom element.
   *
   * @param tagName the name of the custom element to define
   *
   * In TypeScript, the `tagName` passed to `customElement` should be a key of the
   * `HTMLElementTagNameMap` interface. To add your element to the interface,
   * declare the interface in this module:
   *
   *     @customElement('my-element')
   *     export class MyElement extends LitElement {}
   *
   *     declare global {
   *       interface HTMLElementTagNameMap {
   *         'my-element': MyElement;
   *       }
   *     }
   *
   */


  var customElement = function customElement(tagName) {
    return function (classOrDescriptor) {
      return typeof classOrDescriptor === 'function' ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);
    };
  };

  _exports.customElement$1 = _exports.customElement = customElement;

  var standardProperty = function standardProperty(options, element) {
    // When decorating an accessor, pass it through and add property metadata.
    // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
    // stomp over the user's accessor.
    if (element.kind === 'method' && element.descriptor && !('value' in element.descriptor)) {
      return Object.assign({}, element, {
        finisher: function finisher(clazz) {
          clazz.createProperty(element.key, options);
        }
      });
    } else {
      // createProperty() takes care of defining the property, but we still
      // must return some kind of descriptor, so return a descriptor for an
      // unused prototype field. The finisher calls createProperty().
      return {
        kind: 'field',
        key: Symbol(),
        placement: 'own',
        descriptor: {},
        // When @babel/plugin-proposal-decorators implements initializers,
        // do this instead of the initializer below. See:
        // https://github.com/babel/babel/issues/9260 extras: [
        //   {
        //     kind: 'initializer',
        //     placement: 'own',
        //     initializer: descriptor.initializer,
        //   }
        // ],
        initializer: function initializer() {
          if (typeof element.initializer === 'function') {
            this[element.key] = element.initializer.call(this);
          }
        },
        finisher: function finisher(clazz) {
          clazz.createProperty(element.key, options);
        }
      };
    }
  };

  var legacyProperty = function legacyProperty(options, proto, name) {
    proto.constructor.createProperty(name, options);
  };
  /**
   * A property decorator which creates a LitElement property which reflects a
   * corresponding attribute value. A `PropertyDeclaration` may optionally be
   * supplied to configure property features.
   *
   * @ExportDecoratedItems
   */


  function property(options) {
    return function (protoOrDescriptor, name) {
      return name !== undefined ? legacyProperty(options, protoOrDescriptor, name) : standardProperty(options, protoOrDescriptor);
    };
  }
  /**
   * A property decorator that converts a class property into a getter that
   * executes a querySelector on the element's renderRoot.
   */


  var query = _query(function (target, selector) {
    return target.querySelector(selector);
  });
  /**
          * A property decorator that converts a class property into a getter
          * that executes a querySelectorAll on the element's renderRoot.
          */


  _exports.query$1 = _exports.query = query;

  var queryAll = _query(function (target, selector) {
    return target.querySelectorAll(selector);
  });

  _exports.queryAll$1 = _exports.queryAll = queryAll;

  var legacyQuery = function legacyQuery(descriptor, proto, name) {
    Object.defineProperty(proto, name, descriptor);
  };

  var standardQuery = function standardQuery(descriptor, element) {
    return {
      kind: 'method',
      placement: 'prototype',
      key: element.key,
      descriptor: descriptor
    };
  };
  /**
   * Base-implementation of `@query` and `@queryAll` decorators.
   *
   * @param queryFn exectute a `selector` (ie, querySelector or querySelectorAll)
   * against `target`.
   * @suppress {visibility} The descriptor accesses an internal field on the
   * element.
   */


  function _query(queryFn) {
    return function (selector) {
      return function (protoOrDescriptor, name) {
        var descriptor = {
          get: function get() {
            return queryFn(this.renderRoot, selector);
          },
          enumerable: true,
          configurable: true
        };
        return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
      };
    };
  }

  var standardEventOptions = function standardEventOptions(options, element) {
    return Object.assign({}, element, {
      finisher: function finisher(clazz) {
        Object.assign(clazz.prototype[element.key], options);
      }
    });
  };

  var legacyEventOptions = function legacyEventOptions(options, proto, name) {
    Object.assign(proto[name], options);
  };
  /**
   * Adds event listener options to a method used as an event listener in a
   * lit-html template.
   *
   * @param options An object that specifis event listener options as accepted by
   * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
   *
   * Current browsers support the `capture`, `passive`, and `once` options. See:
   * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
   *
   * @example
   *
   *     class MyElement {
   *
   *       clicked = false;
   *
   *       render() {
   *         return html`<div @click=${this._onClick}`><button></button></div>`;
   *       }
   *
   *       @eventOptions({capture: true})
   *       _onClick(e) {
   *         this.clicked = true;
   *       }
   *     }
   */


  var eventOptions = function eventOptions(options) {
    return (// Return value typed as any to prevent TypeScript from complaining that
      // standard decorator function signature does not match TypeScript decorator
      // signature
      // TODO(kschaaf): unclear why it was only failing on this decorator and not
      // the others
      function (protoOrDescriptor, name) {
        return name !== undefined ? legacyEventOptions(options, protoOrDescriptor, name) : standardEventOptions(options, protoOrDescriptor);
      }
    );
  };

  _exports.eventOptions$1 = _exports.eventOptions = eventOptions;
  var decorators = {
    customElement: customElement,
    property: property,
    query: query,
    queryAll: queryAll,
    eventOptions: eventOptions
  };
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  /**
   * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
   * replaced at compile time by the munged name for object[property]. We cannot
   * alias this function, so we have to use a small shim that has the same
   * behavior when not compiling.
   */

  _exports.$decorators = decorators;

  window.JSCompiler_renameProperty = function (prop, _obj) {
    return prop;
  };

  var defaultConverter = {
    toAttribute: function toAttribute(value, type) {
      switch (type) {
        case Boolean:
          return value ? '' : null;

        case Object:
        case Array:
          // if the value is `null` or `undefined` pass this through
          // to allow removing/no change behavior.
          return value == null ? value : JSON.stringify(value);
      }

      return value;
    },
    fromAttribute: function fromAttribute(value, type) {
      switch (type) {
        case Boolean:
          return value !== null;

        case Number:
          return value === null ? null : Number(value);

        case Object:
        case Array:
          return JSON.parse(value);
      }

      return value;
    }
  };
  /**
   * Change function that returns true if `value` is different from `oldValue`.
   * This method is used as the default for a property's `hasChanged` function.
   */

  _exports.defaultConverter$1 = _exports.defaultConverter = defaultConverter;

  var notEqual = function notEqual(value, old) {
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
  };

  _exports.notEqual$1 = _exports.notEqual = notEqual;
  var defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual
  };
  var microtaskPromise = Promise.resolve(true);
  var STATE_HAS_UPDATED = 1;
  var STATE_UPDATE_REQUESTED = 1 << 2;
  var STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
  var STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
  var STATE_HAS_CONNECTED = 1 << 5;
  /**
   * Base element class which manages element properties and attributes. When
   * properties change, the `update` method is asynchronously called. This method
   * should be supplied by subclassers to render updates as desired.
   */

  var UpdatingElement =
  /*#__PURE__*/
  function (_HTMLElement) {
    babelHelpers.inherits(UpdatingElement, _HTMLElement);

    function UpdatingElement() {
      var _this;

      babelHelpers.classCallCheck(this, UpdatingElement);
      _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(UpdatingElement).call(this));
      _this._updateState = 0;
      _this._instanceProperties = undefined;
      _this._updatePromise = microtaskPromise;
      _this._hasConnectedResolver = undefined;
      /**
       * Map with keys for any properties that have changed since the last
       * update cycle with previous values.
       */

      _this._changedProperties = new Map();
      /**
       * Map with keys of properties that should be reflected when updated.
       */

      _this._reflectingProperties = undefined;

      _this.initialize();

      return _this;
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     */


    babelHelpers.createClass(UpdatingElement, [{
      key: "initialize",

      /**
       * Performs element initialization. By default captures any pre-set values for
       * registered properties.
       */
      value: function initialize() {
        this._saveInstanceProperties();
      }
      /**
       * Fixes any properties set on the instance before upgrade time.
       * Otherwise these would shadow the accessor and break these properties.
       * The properties are stored in a Map which is played back after the
       * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
       * (<=41), properties created for native platform properties like (`id` or
       * `name`) may not have default values set in the element constructor. On
       * these browsers native properties appear on instances and therefore their
       * default value will overwrite any element default (e.g. if the element sets
       * this.id = 'id' in the constructor, the 'id' will become '' since this is
       * the native platform default).
       */

    }, {
      key: "_saveInstanceProperties",
      value: function _saveInstanceProperties() {
        var _this2 = this;

        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.constructor._classProperties.forEach(function (_v, p) {
          if (_this2.hasOwnProperty(p)) {
            var value = _this2[p];
            delete _this2[p];

            if (!_this2._instanceProperties) {
              _this2._instanceProperties = new Map();
            }

            _this2._instanceProperties.set(p, value);
          }
        });
      }
      /**
       * Applies previously saved instance properties.
       */

    }, {
      key: "_applyInstanceProperties",
      value: function _applyInstanceProperties() {
        var _this3 = this;

        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this._instanceProperties.forEach(function (v, p) {
          return _this3[p] = v;
        });

        this._instanceProperties = undefined;
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        this._updateState = this._updateState | STATE_HAS_CONNECTED; // Ensure connection triggers an update. Updates cannot complete before
        // connection and if one is pending connection the `_hasConnectionResolver`
        // will exist. If so, resolve it to complete the update, otherwise
        // requestUpdate.

        if (this._hasConnectedResolver) {
          this._hasConnectedResolver();

          this._hasConnectedResolver = undefined;
        } else {
          this.requestUpdate();
        }
      }
      /**
       * Allows for `super.disconnectedCallback()` in extensions while
       * reserving the possibility of making non-breaking feature additions
       * when disconnecting at some point in the future.
       */

    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {}
      /**
       * Synchronizes property values when attributes change.
       */

    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, old, value) {
        if (old !== value) {
          this._attributeToProperty(name, value);
        }
      }
    }, {
      key: "_propertyToAttribute",
      value: function _propertyToAttribute(name, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPropertyDeclaration;
        var ctor = this.constructor;

        var attr = ctor._attributeNameForProperty(name, options);

        if (attr !== undefined) {
          var attrValue = ctor._propertyValueToAttribute(value, options); // an undefined value does not change the attribute.


          if (attrValue === undefined) {
            return;
          } // Track if the property is being reflected to avoid
          // setting the property again via `attributeChangedCallback`. Note:
          // 1. this takes advantage of the fact that the callback is synchronous.
          // 2. will behave incorrectly if multiple attributes are in the reaction
          // stack at time of calling. However, since we process attributes
          // in `update` this should not be possible (or an extreme corner case
          // that we'd like to discover).
          // mark state reflecting


          this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;

          if (attrValue == null) {
            this.removeAttribute(attr);
          } else {
            this.setAttribute(attr, attrValue);
          } // mark state not reflecting


          this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
        }
      }
    }, {
      key: "_attributeToProperty",
      value: function _attributeToProperty(name, value) {
        // Use tracking info to avoid deserializing attribute value if it was
        // just set from a property setter.
        if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
          return;
        }

        var ctor = this.constructor;

        var propName = ctor._attributeToPropertyMap.get(name);

        if (propName !== undefined) {
          var options = ctor._classProperties.get(propName) || defaultPropertyDeclaration; // mark state reflecting

          this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
          this[propName] = ctor._propertyValueFromAttribute(value, options); // mark state not reflecting

          this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
        }
      }
      /**
       * Requests an update which is processed asynchronously. This should
       * be called when an element should update based on some state not triggered
       * by setting a property. In this case, pass no arguments. It should also be
       * called when manually implementing a property setter. In this case, pass the
       * property `name` and `oldValue` to ensure that any configured property
       * options are honored. Returns the `updateComplete` Promise which is resolved
       * when the update completes.
       *
       * @param name {PropertyKey} (optional) name of requesting property
       * @param oldValue {any} (optional) old value of requesting property
       * @returns {Promise} A Promise that is resolved when the update completes.
       */

    }, {
      key: "requestUpdate",
      value: function requestUpdate(name, oldValue) {
        var shouldRequestUpdate = true; // if we have a property key, perform property update steps.

        if (name !== undefined && !this._changedProperties.has(name)) {
          var ctor = this.constructor;
          var options = ctor._classProperties.get(name) || defaultPropertyDeclaration;

          if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
            // track old value when changing.
            this._changedProperties.set(name, oldValue); // add to reflecting properties set


            if (options.reflect === true && !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
              if (this._reflectingProperties === undefined) {
                this._reflectingProperties = new Map();
              }

              this._reflectingProperties.set(name, options);
            } // abort the request if the property should not be considered changed.

          } else {
            shouldRequestUpdate = false;
          }
        }

        if (!this._hasRequestedUpdate && shouldRequestUpdate) {
          this._enqueueUpdate();
        }

        return this.updateComplete;
      }
      /**
       * Sets up the element to asynchronously update.
       */

    }, {
      key: "_enqueueUpdate",
      value: function () {
        var _enqueueUpdate2 = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var _this4 = this;

          var resolve, previousUpdatePromise, result;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // Mark state updating...
                  this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
                  previousUpdatePromise = this._updatePromise;
                  this._updatePromise = new Promise(function (res) {
                    return resolve = res;
                  }); // Ensure any previous update has resolved before updating.
                  // This `await` also ensures that property changes are batched.

                  _context.next = 5;
                  return previousUpdatePromise;

                case 5:
                  if (this._hasConnected) {
                    _context.next = 8;
                    break;
                  }

                  _context.next = 8;
                  return new Promise(function (res) {
                    return _this4._hasConnectedResolver = res;
                  });

                case 8:
                  // Allow `performUpdate` to be asynchronous to enable scheduling of updates.
                  result = this.performUpdate(); // Note, this is to avoid delaying an additional microtask unless we need
                  // to.

                  if (!(result != null && typeof result.then === 'function')) {
                    _context.next = 12;
                    break;
                  }

                  _context.next = 12;
                  return result;

                case 12:
                  resolve(!this._hasRequestedUpdate);

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _enqueueUpdate() {
          return _enqueueUpdate2.apply(this, arguments);
        }

        return _enqueueUpdate;
      }()
    }, {
      key: "performUpdate",

      /**
       * Performs an element update.
       *
       * You can override this method to change the timing of updates. For instance,
       * to schedule updates to occur just before the next frame:
       *
       * ```
       * protected async performUpdate(): Promise<unknown> {
       *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
       *   super.performUpdate();
       * }
       * ```
       */
      value: function performUpdate() {
        // Mixin instance properties once, if they exist.
        if (this._instanceProperties) {
          this._applyInstanceProperties();
        }

        if (this.shouldUpdate(this._changedProperties)) {
          var changedProperties = this._changedProperties;
          this.update(changedProperties);

          this._markUpdated();

          if (!(this._updateState & STATE_HAS_UPDATED)) {
            this._updateState = this._updateState | STATE_HAS_UPDATED;
            this.firstUpdated(changedProperties);
          }

          this.updated(changedProperties);
        } else {
          this._markUpdated();
        }
      }
    }, {
      key: "_markUpdated",
      value: function _markUpdated() {
        this._changedProperties = new Map();
        this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
      }
      /**
       * Returns a Promise that resolves when the element has completed updating.
       * The Promise value is a boolean that is `true` if the element completed the
       * update without triggering another update. The Promise result is `false` if
       * a property was set inside `updated()`. This getter can be implemented to
       * await additional state. For example, it is sometimes useful to await a
       * rendered element before fulfilling this Promise. To do this, first await
       * `super.updateComplete` then any subsequent state.
       *
       * @returns {Promise} The Promise returns a boolean that indicates if the
       * update resolved without triggering another update.
       */

    }, {
      key: "shouldUpdate",

      /**
       * Controls whether or not `update` should be called when the element requests
       * an update. By default, this method always returns `true`, but this can be
       * customized to control when to update.
       *
       * * @param _changedProperties Map of changed properties with old values
       */
      value: function shouldUpdate(_changedProperties) {
        return true;
      }
      /**
       * Updates the element. This method reflects property values to attributes.
       * It can be overridden to render and keep updated element DOM.
       * Setting properties inside this method will *not* trigger
       * another update.
       *
       * * @param _changedProperties Map of changed properties with old values
       */

    }, {
      key: "update",
      value: function update(_changedProperties) {
        var _this5 = this;

        if (this._reflectingProperties !== undefined && this._reflectingProperties.size > 0) {
          // Use forEach so this works even if for/of loops are compiled to for
          // loops expecting arrays
          this._reflectingProperties.forEach(function (v, k) {
            return _this5._propertyToAttribute(k, _this5[k], v);
          });

          this._reflectingProperties = undefined;
        }
      }
      /**
       * Invoked whenever the element is updated. Implement to perform
       * post-updating tasks via DOM APIs, for example, focusing an element.
       *
       * Setting properties inside this method will trigger the element to update
       * again after this update cycle completes.
       *
       * * @param _changedProperties Map of changed properties with old values
       */

    }, {
      key: "updated",
      value: function updated(_changedProperties) {}
      /**
       * Invoked when the element is first updated. Implement to perform one time
       * work on the element after update.
       *
       * Setting properties inside this method will trigger the element to update
       * again after this update cycle completes.
       *
       * * @param _changedProperties Map of changed properties with old values
       */

    }, {
      key: "firstUpdated",
      value: function firstUpdated(_changedProperties) {}
    }, {
      key: "_hasConnected",
      get: function get() {
        return this._updateState & STATE_HAS_CONNECTED;
      }
    }, {
      key: "_hasRequestedUpdate",
      get: function get() {
        return this._updateState & STATE_UPDATE_REQUESTED;
      }
    }, {
      key: "hasUpdated",
      get: function get() {
        return this._updateState & STATE_HAS_UPDATED;
      }
    }, {
      key: "updateComplete",
      get: function get() {
        return this._updatePromise;
      }
    }], [{
      key: "_ensureClassProperties",

      /**
       * Ensures the private `_classProperties` property metadata is created.
       * In addition to `finalize` this is also called in `createProperty` to
       * ensure the `@property` decorator can add property metadata.
       */

      /** @nocollapse */
      value: function _ensureClassProperties() {
        var _this6 = this;

        // ensure private storage for property declarations.
        if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
          this._classProperties = new Map(); // NOTE: Workaround IE11 not supporting Map constructor argument.

          var superProperties = Object.getPrototypeOf(this)._classProperties;

          if (superProperties !== undefined) {
            superProperties.forEach(function (v, k) {
              return _this6._classProperties.set(k, v);
            });
          }
        }
      }
      /**
       * Creates a property accessor on the element prototype if one does not exist.
       * The property setter calls the property's `hasChanged` property option
       * or uses a strict identity check to determine whether or not to request
       * an update.
       * @nocollapse
       */

    }, {
      key: "createProperty",
      value: function createProperty(name) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPropertyDeclaration;

        // Note, since this can be called by the `@property` decorator which
        // is called before `finalize`, we ensure storage exists for property
        // metadata.
        this._ensureClassProperties();

        this._classProperties.set(name, options); // Do not generate an accessor if the prototype already has one, since
        // it would be lost otherwise and that would never be the user's intention;
        // Instead, we expect users to call `requestUpdate` themselves from
        // user-defined accessors. Note that if the super has an accessor we will
        // still overwrite it


        if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
          return;
        }

        var key = babelHelpers.typeof(name) === 'symbol' ? Symbol() : "__".concat(name);
        Object.defineProperty(this.prototype, name, {
          get: function get() {
            return this[key];
          },
          set: function set(value) {
            var oldValue = this[name];
            this[key] = value;
            this.requestUpdate(name, oldValue);
          },
          configurable: true,
          enumerable: true
        });
      }
      /**
       * Creates property accessors for registered properties and ensures
       * any superclasses are also finalized.
       * @nocollapse
       */

    }, {
      key: "finalize",
      value: function finalize() {
        if (this.hasOwnProperty(JSCompiler_renameProperty('finalized', this)) && this.finalized) {
          return;
        } // finalize any superclasses


        var superCtor = Object.getPrototypeOf(this);

        if (typeof superCtor.finalize === 'function') {
          superCtor.finalize();
        }

        this.finalized = true;

        this._ensureClassProperties(); // initialize Map populated in observedAttributes


        this._attributeToPropertyMap = new Map(); // make any properties
        // Note, only process "own" properties since this element will inherit
        // any properties defined on the superClass, and finalization ensures
        // the entire prototype chain is finalized.

        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
          var props = this.properties; // support symbols in properties (IE11 does not support this)

          var propKeys = [].concat(babelHelpers.toConsumableArray(Object.getOwnPropertyNames(props)), babelHelpers.toConsumableArray(typeof Object.getOwnPropertySymbols === 'function' ? Object.getOwnPropertySymbols(props) : [])); // This for/of is ok because propKeys is an array

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = propKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var p = _step.value;
              // note, use of `any` is due to TypeSript lack of support for symbol in
              // index types
              this.createProperty(p, props[p]);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }
      /**
       * Returns the property name for the given attribute `name`.
       * @nocollapse
       */

    }, {
      key: "_attributeNameForProperty",
      value: function _attributeNameForProperty(name, options) {
        var attribute = options.attribute;
        return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
      }
      /**
       * Returns true if a property should request an update.
       * Called when a property value is set and uses the `hasChanged`
       * option for the property if present or a strict identity check.
       * @nocollapse
       */

    }, {
      key: "_valueHasChanged",
      value: function _valueHasChanged(value, old) {
        var hasChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : notEqual;
        return hasChanged(value, old);
      }
      /**
       * Returns the property value for the given attribute value.
       * Called via the `attributeChangedCallback` and uses the property's
       * `converter` or `converter.fromAttribute` property option.
       * @nocollapse
       */

    }, {
      key: "_propertyValueFromAttribute",
      value: function _propertyValueFromAttribute(value, options) {
        var type = options.type;
        var converter = options.converter || defaultConverter;
        var fromAttribute = typeof converter === 'function' ? converter : converter.fromAttribute;
        return fromAttribute ? fromAttribute(value, type) : value;
      }
      /**
       * Returns the attribute value for the given property value. If this
       * returns undefined, the property will *not* be reflected to an attribute.
       * If this returns null, the attribute will be removed, otherwise the
       * attribute will be set to the value.
       * This uses the property's `reflect` and `type.toAttribute` property options.
       * @nocollapse
       */

    }, {
      key: "_propertyValueToAttribute",
      value: function _propertyValueToAttribute(value, options) {
        if (options.reflect === undefined) {
          return;
        }

        var type = options.type;
        var converter = options.converter;
        var toAttribute = converter && converter.toAttribute || defaultConverter.toAttribute;
        return toAttribute(value, type);
      }
    }, {
      key: "observedAttributes",
      get: function get() {
        var _this7 = this;

        // note: piggy backing on this to ensure we're finalized.
        this.finalize();
        var attributes = []; // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays

        this._classProperties.forEach(function (v, p) {
          var attr = _this7._attributeNameForProperty(p, v);

          if (attr !== undefined) {
            _this7._attributeToPropertyMap.set(attr, p);

            attributes.push(attr);
          }
        });

        return attributes;
      }
    }]);
    return UpdatingElement;
  }(babelHelpers.wrapNativeSuper(HTMLElement));
  /**
   * Marks class as having finished creating properties.
   */


  _exports.UpdatingElement$1 = _exports.UpdatingElement = UpdatingElement;
  UpdatingElement.finalized = true;
  var updatingElement = {
    defaultConverter: defaultConverter,
    notEqual: notEqual,
    UpdatingElement: UpdatingElement
  };
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  _exports.$updatingElement = updatingElement;
  var directives = new WeakMap();
  /**
   * Brands a function as a directive so that lit-html will call the function
   * during template rendering, rather than passing as a value.
   *
   * @param f The directive factory function. Must be a function that returns a
   * function of the signature `(part: Part) => void`. The returned function will
   * be called with the part object
   *
   * @example
   *
   * ```
   * import {directive, html} from 'lit-html';
   *
   * const immutable = directive((v) => (part) => {
   *   if (part.value !== v) {
   *     part.setValue(v)
   *   }
   * });
   * ```
   */

  var directive = function directive(f) {
    return function () {
      var d = f.apply(void 0, arguments);
      directives.set(d, true);
      return d;
    };
  };

  _exports.directive$1 = _exports.directive = directive;

  var isDirective = function isDirective(o) {
    return typeof o === 'function' && directives.has(o);
  };

  _exports.isDirective$1 = _exports.isDirective = isDirective;
  var directive$1 = {
    directive: directive,
    isDirective: isDirective
  };
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  /**
   * @module lit-html
   */

  /**
   * True if the custom elements polyfill is in use.
   */

  _exports.$directive = directive$1;
  var isCEPolyfill = window.customElements !== undefined && window.customElements.polyfillWrapFlushCallback !== undefined;
  /**
          * Reparents nodes, starting from `startNode` (inclusive) to `endNode`
          * (exclusive), into another container (could be the same container), before
          * `beforeNode`. If `beforeNode` is null, it appends the nodes to the
          * container.
          */

  _exports.isCEPolyfill = isCEPolyfill;

  var reparentNodes = function reparentNodes(container, start) {
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var node = start;

    while (node !== end) {
      var n = node.nextSibling;
      container.insertBefore(node, before);
      node = n;
    }
  };
  /**
   * Removes nodes, starting from `startNode` (inclusive) to `endNode`
   * (exclusive), from `container`.
   */


  _exports.reparentNodes$1 = _exports.reparentNodes = reparentNodes;

  var removeNodes = function removeNodes(container, startNode) {
    var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var node = startNode;

    while (node !== endNode) {
      var n = node.nextSibling;
      container.removeChild(node);
      node = n;
    }
  };

  _exports.removeNodes$1 = _exports.removeNodes = removeNodes;
  var dom = {
    isCEPolyfill: isCEPolyfill,
    reparentNodes: reparentNodes,
    removeNodes: removeNodes
  };
  /**
   * @license
   * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  /**
   * A sentinel value that signals that a value was handled by a directive and
   * should not be written to the DOM.
   */

  _exports.$dom = dom;
  var noChange = {};
  /**
          * A sentinel value that signals a NodePart to fully clear its content.
          */

  _exports.noChange$1 = _exports.noChange = noChange;
  var nothing = {};
  _exports.nothing$1 = _exports.nothing = nothing;
  var part = {
    noChange: noChange,
    nothing: nothing
  };
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  /**
   * An expression marker with embedded unique key to avoid collision with
   * possible text in templates.
   */

  _exports.$part = part;
  var marker = "{{lit-".concat(String(Math.random()).slice(2), "}}");
  /**
          * An expression marker used text-positions, multi-binding attributes, and
          * attributes with markup-like text values.
          */

  _exports.marker = marker;
  var nodeMarker = "<!--".concat(marker, "-->");
  _exports.nodeMarker = nodeMarker;
  var markerRegex = new RegExp("".concat(marker, "|").concat(nodeMarker));
  /**
          * Suffix appended to all bound attribute names.
          */

  _exports.markerRegex = markerRegex;
  var boundAttributeSuffix = '$lit$';
  /**
          * An updateable Template that tracks the location of dynamic parts.
          */

  _exports.boundAttributeSuffix = boundAttributeSuffix;

  var Template = function Template(result, element) {
    var _this8 = this;

    babelHelpers.classCallCheck(this, Template);
    this.parts = [];
    this.element = element;
    var index = -1;
    var partIndex = 0;
    var nodesToRemove = [];

    var _prepareTemplate = function _prepareTemplate(template) {
      var content = template.content; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
      // null

      var walker = document.createTreeWalker(content, 133
      /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
      , null, false); // Keeps track of the last index associated with a part. We try to delete
      // unnecessary nodes, but we never want to associate two different parts
      // to the same index. They must have a constant node between.

      var lastPartIndex = 0;

      while (walker.nextNode()) {
        index++;
        var node = walker.currentNode;

        if (node.nodeType === 1
        /* Node.ELEMENT_NODE */
        ) {
            if (node.hasAttributes()) {
              var attributes = node.attributes; // Per
              // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
              // attributes are not guaranteed to be returned in document order.
              // In particular, Edge/IE can return them out of order, so we cannot
              // assume a correspondance between part index and attribute index.

              var count = 0;

              for (var i = 0; i < attributes.length; i++) {
                if (attributes[i].value.indexOf(marker) >= 0) {
                  count++;
                }
              }

              while (count-- > 0) {
                // Get the template literal section leading up to the first
                // expression in this attribute
                var stringForPart = result.strings[partIndex]; // Find the attribute name

                var name = lastAttributeNameRegex.exec(stringForPart)[2]; // Find the corresponding attribute
                // All bound attributes have had a suffix added in
                // TemplateResult#getHTML to opt out of special attribute
                // handling. To look up the attribute value we also need to add
                // the suffix.

                var attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                var attributeValue = node.getAttribute(attributeLookupName);
                var strings = attributeValue.split(markerRegex);

                _this8.parts.push({
                  type: 'attribute',
                  index: index,
                  name: name,
                  strings: strings
                });

                node.removeAttribute(attributeLookupName);
                partIndex += strings.length - 1;
              }
            }

            if (node.tagName === 'TEMPLATE') {
              _prepareTemplate(node);
            }
          } else if (node.nodeType === 3
        /* Node.TEXT_NODE */
        ) {
            var data = node.data;

            if (data.indexOf(marker) >= 0) {
              var parent = node.parentNode;

              var _strings = data.split(markerRegex);

              var lastIndex = _strings.length - 1; // Generate a new text node for each literal section
              // These nodes are also used as the markers for node parts

              for (var _i = 0; _i < lastIndex; _i++) {
                parent.insertBefore(_strings[_i] === '' ? createMarker() : document.createTextNode(_strings[_i]), node);

                _this8.parts.push({
                  type: 'node',
                  index: ++index
                });
              } // If there's no text, we must insert a comment to mark our place.
              // Else, we can trust it will stick around after cloning.


              if (_strings[lastIndex] === '') {
                parent.insertBefore(createMarker(), node);
                nodesToRemove.push(node);
              } else {
                node.data = _strings[lastIndex];
              } // We have a part for each match found


              partIndex += lastIndex;
            }
          } else if (node.nodeType === 8
        /* Node.COMMENT_NODE */
        ) {
            if (node.data === marker) {
              var _parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of
              // the following are true:
              //  * We don't have a previousSibling
              //  * The previousSibling is already the start of a previous part

              if (node.previousSibling === null || index === lastPartIndex) {
                index++;

                _parent.insertBefore(createMarker(), node);
              }

              lastPartIndex = index;

              _this8.parts.push({
                type: 'node',
                index: index
              }); // If we don't have a nextSibling, keep this node so we have an end.
              // Else, we can remove it to save future costs.


              if (node.nextSibling === null) {
                node.data = '';
              } else {
                nodesToRemove.push(node);
                index--;
              }

              partIndex++;
            } else {
              var _i2 = -1;

              while ((_i2 = node.data.indexOf(marker, _i2 + 1)) !== -1) {
                // Comment node has a binding marker inside, make an inactive part
                // The binding won't work, but subsequent bindings will
                // TODO (justinfagnani): consider whether it's even worth it to
                // make bindings in comments work
                _this8.parts.push({
                  type: 'node',
                  index: -1
                });
              }
            }
          }
      }
    };

    _prepareTemplate(element); // Remove text binding nodes after the walk to not disturb the TreeWalker


    for (var _i3 = 0; _i3 < nodesToRemove.length; _i3++) {
      var n = nodesToRemove[_i3];
      n.parentNode.removeChild(n);
    }
  };

  _exports.Template$1 = _exports.Template = Template;

  var isTemplatePartActive = function isTemplatePartActive(part) {
    return part.index !== -1;
  }; // Allows `document.createComment('')` to be renamed for a
  // small manual size-savings.


  _exports.isTemplatePartActive$1 = _exports.isTemplatePartActive = isTemplatePartActive;

  var createMarker = function createMarker() {
    return document.createComment('');
  };
  /**
          * This regex extracts the attribute name preceding an attribute-position
          * expression. It does this by matching the syntax allowed for attributes
          * against the string literal directly preceding the expression, assuming that
          * the expression is in an attribute-value position.
          *
          * See attributes in the HTML spec:
          * https://www.w3.org/TR/html5/syntax.html#attributes-0
          *
          * "\0-\x1F\x7F-\x9F" are Unicode control characters
          *
          * " \x09\x0a\x0c\x0d" are HTML space characters:
          * https://www.w3.org/TR/html5/infrastructure.html#space-character
          *
          * So an attribute is:
          *  * The name: any character except a control character, space character, ('),
          *    ("), ">", "=", or "/"
          *  * Followed by zero or more space characters
          *  * Followed by "="
          *  * Followed by zero or more space characters
          *  * Followed by:
          *    * Any character except space, ('), ("), "<", ">", "=", (`), or
          *    * (") then any non-("), or
          *    * (') then any non-(')
          */


  _exports.createMarker$1 = _exports.createMarker = createMarker;
  var lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
  _exports.lastAttributeNameRegex = lastAttributeNameRegex;
  var template = {
    marker: marker,
    nodeMarker: nodeMarker,
    markerRegex: markerRegex,
    boundAttributeSuffix: boundAttributeSuffix,
    Template: Template,
    isTemplatePartActive: isTemplatePartActive,
    createMarker: createMarker,
    lastAttributeNameRegex: lastAttributeNameRegex
  };
  _exports.$template = template;

  var TemplateInstance =
  /*#__PURE__*/
  function () {
    function TemplateInstance(template, processor, options) {
      babelHelpers.classCallCheck(this, TemplateInstance);
      this._parts = [];
      this.template = template;
      this.processor = processor;
      this.options = options;
    }

    babelHelpers.createClass(TemplateInstance, [{
      key: "update",
      value: function update(values) {
        var i = 0;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this._parts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _part = _step2.value;

            if (_part !== undefined) {
              _part.setValue(values[i]);
            }

            i++;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this._parts[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _part2 = _step3.value;

            if (_part2 !== undefined) {
              _part2.commit();
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    }, {
      key: "_clone",
      value: function _clone() {
        var _this9 = this;

        // When using the Custom Elements polyfill, clone the node, rather than
        // importing it, to keep the fragment in the template's document. This
        // leaves the fragment inert so custom elements won't upgrade and
        // potentially modify their contents by creating a polyfilled ShadowRoot
        // while we traverse the tree.
        var fragment = isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
        var parts = this.template.parts;
        var partIndex = 0;
        var nodeIndex = 0;

        var _prepareInstance = function _prepareInstance(fragment) {
          // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
          // null
          var walker = document.createTreeWalker(fragment, 133
          /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
          , null, false);
          var node = walker.nextNode(); // Loop through all the nodes and parts of a template

          while (partIndex < parts.length && node !== null) {
            var _part3 = parts[partIndex]; // Consecutive Parts may have the same node index, in the case of
            // multiple bound attributes on an element. So each iteration we either
            // increment the nodeIndex, if we aren't on a node with a part, or the
            // partIndex if we are. By not incrementing the nodeIndex when we find a
            // part, we allow for the next part to be associated with the current
            // node if neccessasry.

            if (!isTemplatePartActive(_part3)) {
              _this9._parts.push(undefined);

              partIndex++;
            } else if (nodeIndex === _part3.index) {
              if (_part3.type === 'node') {
                var _part4 = _this9.processor.handleTextExpression(_this9.options);

                _part4.insertAfterNode(node.previousSibling);

                _this9._parts.push(_part4);
              } else {
                var _this9$_parts;

                (_this9$_parts = _this9._parts).push.apply(_this9$_parts, babelHelpers.toConsumableArray(_this9.processor.handleAttributeExpressions(node, _part3.name, _part3.strings, _this9.options)));
              }

              partIndex++;
            } else {
              nodeIndex++;

              if (node.nodeName === 'TEMPLATE') {
                _prepareInstance(node.content);
              }

              node = walker.nextNode();
            }
          }
        };

        _prepareInstance(fragment);

        if (isCEPolyfill) {
          document.adoptNode(fragment);
          customElements.upgrade(fragment);
        }

        return fragment;
      }
    }]);
    return TemplateInstance;
  }();

  _exports.TemplateInstance$1 = _exports.TemplateInstance = TemplateInstance;
  var templateInstance = {
    TemplateInstance: TemplateInstance
  };
  _exports.$templateInstance = templateInstance;

  var TemplateResult =
  /*#__PURE__*/
  function () {
    function TemplateResult(strings, values, type, processor) {
      babelHelpers.classCallCheck(this, TemplateResult);
      this.strings = strings;
      this.values = values;
      this.type = type;
      this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */


    babelHelpers.createClass(TemplateResult, [{
      key: "getHTML",
      value: function getHTML() {
        var endIndex = this.strings.length - 1;
        var html = '';

        for (var i = 0; i < endIndex; i++) {
          var s = this.strings[i]; // This exec() call does two things:
          // 1) Appends a suffix to the bound attribute name to opt out of special
          // attribute value parsing that IE11 and Edge do, like for style and
          // many SVG attributes. The Template class also appends the same suffix
          // when looking up attributes to create Parts.
          // 2) Adds an unquoted-attribute-safe marker for the first expression in
          // an attribute. Subsequent attribute expressions will use node markers,
          // and this is safe since attributes with multiple expressions are
          // guaranteed to be quoted.

          var match = lastAttributeNameRegex.exec(s);

          if (match) {
            // We're starting a new bound attribute.
            // Add the safe attribute suffix, and use unquoted-attribute-safe
            // marker.
            html += s.substr(0, match.index) + match[1] + match[2] + boundAttributeSuffix + match[3] + marker;
          } else {
            // We're either in a bound node, or trailing bound attribute.
            // Either way, nodeMarker is safe to use.
            html += s + nodeMarker;
          }
        }

        return html + this.strings[endIndex];
      }
    }, {
      key: "getTemplateElement",
      value: function getTemplateElement() {
        var template = document.createElement('template');
        template.innerHTML = this.getHTML();
        return template;
      }
    }]);
    return TemplateResult;
  }();
  /**
   * A TemplateResult for SVG fragments.
   *
   * This class wraps HTMl in an `<svg>` tag in order to parse its contents in the
   * SVG namespace, then modifies the template to remove the `<svg>` tag so that
   * clones only container the original fragment.
   */


  _exports.TemplateResult$3 = _exports.TemplateResult$2 = _exports.TemplateResult$1 = _exports.TemplateResult = TemplateResult;

  var SVGTemplateResult =
  /*#__PURE__*/
  function (_TemplateResult) {
    babelHelpers.inherits(SVGTemplateResult, _TemplateResult);

    function SVGTemplateResult() {
      babelHelpers.classCallCheck(this, SVGTemplateResult);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(SVGTemplateResult).apply(this, arguments));
    }

    babelHelpers.createClass(SVGTemplateResult, [{
      key: "getHTML",
      value: function getHTML() {
        return "<svg>".concat(babelHelpers.get(babelHelpers.getPrototypeOf(SVGTemplateResult.prototype), "getHTML", this).call(this), "</svg>");
      }
    }, {
      key: "getTemplateElement",
      value: function getTemplateElement() {
        var template = babelHelpers.get(babelHelpers.getPrototypeOf(SVGTemplateResult.prototype), "getTemplateElement", this).call(this);
        var content = template.content;
        var svgElement = content.firstChild;
        content.removeChild(svgElement);
        reparentNodes(content, svgElement.firstChild);
        return template;
      }
    }]);
    return SVGTemplateResult;
  }(TemplateResult);

  _exports.SVGTemplateResult$2 = _exports.SVGTemplateResult$1 = _exports.SVGTemplateResult = SVGTemplateResult;
  var templateResult = {
    TemplateResult: TemplateResult,
    SVGTemplateResult: SVGTemplateResult
  };
  _exports.$templateResult = templateResult;

  var isPrimitive = function isPrimitive(value) {
    return value === null || !(babelHelpers.typeof(value) === 'object' || typeof value === 'function');
  };
  /**
          * Sets attribute values for AttributeParts, so that the value is only set once
          * even if there are multiple parts for an attribute.
          */


  _exports.isPrimitive$1 = _exports.isPrimitive = isPrimitive;

  var AttributeCommitter =
  /*#__PURE__*/
  function () {
    function AttributeCommitter(element, name, strings) {
      babelHelpers.classCallCheck(this, AttributeCommitter);
      this.dirty = true;
      this.element = element;
      this.name = name;
      this.strings = strings;
      this.parts = [];

      for (var i = 0; i < strings.length - 1; i++) {
        this.parts[i] = this._createPart();
      }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */


    babelHelpers.createClass(AttributeCommitter, [{
      key: "_createPart",
      value: function _createPart() {
        return new AttributePart(this);
      }
    }, {
      key: "_getValue",
      value: function _getValue() {
        var strings = this.strings;
        var l = strings.length - 1;
        var text = '';

        for (var i = 0; i < l; i++) {
          text += strings[i];
          var _part5 = this.parts[i];

          if (_part5 !== undefined) {
            var v = _part5.value;

            if (v != null && (Array.isArray(v) || typeof v !== 'string' && v[Symbol.iterator])) {
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                for (var _iterator4 = v[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var t = _step4.value;
                  text += typeof t === 'string' ? t : String(t);
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                    _iterator4.return();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }
            } else {
              text += typeof v === 'string' ? v : String(v);
            }
          }
        }

        text += strings[l];
        return text;
      }
    }, {
      key: "commit",
      value: function commit() {
        if (this.dirty) {
          this.dirty = false;
          this.element.setAttribute(this.name, this._getValue());
        }
      }
    }]);
    return AttributeCommitter;
  }();

  _exports.AttributeCommitter$1 = _exports.AttributeCommitter = AttributeCommitter;

  var AttributePart =
  /*#__PURE__*/
  function () {
    function AttributePart(comitter) {
      babelHelpers.classCallCheck(this, AttributePart);
      this.value = undefined;
      this.committer = comitter;
    }

    babelHelpers.createClass(AttributePart, [{
      key: "setValue",
      value: function setValue(value) {
        if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
          this.value = value; // If the value is a not a directive, dirty the committer so that it'll
          // call setAttribute. If the value is a directive, it'll dirty the
          // committer if it calls setValue().

          if (!isDirective(value)) {
            this.committer.dirty = true;
          }
        }
      }
    }, {
      key: "commit",
      value: function commit() {
        while (isDirective(this.value)) {
          var directive$$1 = this.value;
          this.value = noChange;
          directive$$1(this);
        }

        if (this.value === noChange) {
          return;
        }

        this.committer.commit();
      }
    }]);
    return AttributePart;
  }();

  _exports.AttributePart$1 = _exports.AttributePart = AttributePart;

  var NodePart =
  /*#__PURE__*/
  function () {
    function NodePart(options) {
      babelHelpers.classCallCheck(this, NodePart);
      this.value = undefined;
      this._pendingValue = undefined;
      this.options = options;
    }
    /**
     * Inserts this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */


    babelHelpers.createClass(NodePart, [{
      key: "appendInto",
      value: function appendInto(container) {
        this.startNode = container.appendChild(createMarker());
        this.endNode = container.appendChild(createMarker());
      }
      /**
       * Inserts this part between `ref` and `ref`'s next sibling. Both `ref` and
       * its next sibling must be static, unchanging nodes such as those that appear
       * in a literal section of a template.
       *
       * This part must be empty, as its contents are not automatically moved.
       */

    }, {
      key: "insertAfterNode",
      value: function insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
      }
      /**
       * Appends this part into a parent part.
       *
       * This part must be empty, as its contents are not automatically moved.
       */

    }, {
      key: "appendIntoPart",
      value: function appendIntoPart(part) {
        part._insert(this.startNode = createMarker());

        part._insert(this.endNode = createMarker());
      }
      /**
       * Appends this part after `ref`
       *
       * This part must be empty, as its contents are not automatically moved.
       */

    }, {
      key: "insertAfterPart",
      value: function insertAfterPart(ref) {
        ref._insert(this.startNode = createMarker());

        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
      }
    }, {
      key: "setValue",
      value: function setValue(value) {
        this._pendingValue = value;
      }
    }, {
      key: "commit",
      value: function commit() {
        while (isDirective(this._pendingValue)) {
          var directive$$1 = this._pendingValue;
          this._pendingValue = noChange;
          directive$$1(this);
        }

        var value = this._pendingValue;

        if (value === noChange) {
          return;
        }

        if (isPrimitive(value)) {
          if (value !== this.value) {
            this._commitText(value);
          }
        } else if (babelHelpers.instanceof(value, TemplateResult)) {
          this._commitTemplateResult(value);
        } else if (babelHelpers.instanceof(value, Node)) {
          this._commitNode(value);
        } else if (Array.isArray(value) || value[Symbol.iterator]) {
          this._commitIterable(value);
        } else if (value === nothing) {
          this.value = nothing;
          this.clear();
        } else {
          // Fallback, will render the string representation
          this._commitText(value);
        }
      }
    }, {
      key: "_insert",
      value: function _insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
      }
    }, {
      key: "_commitNode",
      value: function _commitNode(value) {
        if (this.value === value) {
          return;
        }

        this.clear();

        this._insert(value);

        this.value = value;
      }
    }, {
      key: "_commitText",
      value: function _commitText(value) {
        var node = this.startNode.nextSibling;
        value = value == null ? '' : value;

        if (node === this.endNode.previousSibling && node.nodeType === 3
        /* Node.TEXT_NODE */
        ) {
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            // TODO(justinfagnani): Can we just check if this.value is primitive?
            node.data = value;
          } else {
          this._commitNode(document.createTextNode(typeof value === 'string' ? value : String(value)));
        }

        this.value = value;
      }
    }, {
      key: "_commitTemplateResult",
      value: function _commitTemplateResult(value) {
        var template = this.options.templateFactory(value);

        if (this.value && this.value.template === template) {
          this.value.update(value.values);
        } else {
          // Make sure we propagate the template processor from the TemplateResult
          // so that we use its syntax extension, etc. The template factory comes
          // from the render function options so that it can control template
          // caching and preprocessing.
          var instance = new TemplateInstance(template, value.processor, this.options);

          var fragment = instance._clone();

          instance.update(value.values);

          this._commitNode(fragment);

          this.value = instance;
        }
      }
    }, {
      key: "_commitIterable",
      value: function _commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
          this.value = [];
          this.clear();
        } // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render


        var itemParts = this.value;
        var partIndex = 0;
        var itemPart;
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = value[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var item = _step5.value;
            // Try to reuse an existing part
            itemPart = itemParts[partIndex]; // If no existing part, create a new one

            if (itemPart === undefined) {
              itemPart = new NodePart(this.options);
              itemParts.push(itemPart);

              if (partIndex === 0) {
                itemPart.appendIntoPart(this);
              } else {
                itemPart.insertAfterPart(itemParts[partIndex - 1]);
              }
            }

            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        if (partIndex < itemParts.length) {
          // Truncate the parts array so _value reflects the current state
          itemParts.length = partIndex;
          this.clear(itemPart && itemPart.endNode);
        }
      }
    }, {
      key: "clear",
      value: function clear() {
        var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
        removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
      }
    }]);
    return NodePart;
  }();
  /**
   * Implements a boolean attribute, roughly as defined in the HTML
   * specification.
   *
   * If the value is truthy, then the attribute is present with a value of
   * ''. If the value is falsey, the attribute is removed.
   */


  _exports.NodePart$1 = _exports.NodePart = NodePart;

  var BooleanAttributePart =
  /*#__PURE__*/
  function () {
    function BooleanAttributePart(element, name, strings) {
      babelHelpers.classCallCheck(this, BooleanAttributePart);
      this.value = undefined;
      this._pendingValue = undefined;

      if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
        throw new Error('Boolean attributes can only contain a single expression');
      }

      this.element = element;
      this.name = name;
      this.strings = strings;
    }

    babelHelpers.createClass(BooleanAttributePart, [{
      key: "setValue",
      value: function setValue(value) {
        this._pendingValue = value;
      }
    }, {
      key: "commit",
      value: function commit() {
        while (isDirective(this._pendingValue)) {
          var directive$$1 = this._pendingValue;
          this._pendingValue = noChange;
          directive$$1(this);
        }

        if (this._pendingValue === noChange) {
          return;
        }

        var value = !!this._pendingValue;

        if (this.value !== value) {
          if (value) {
            this.element.setAttribute(this.name, '');
          } else {
            this.element.removeAttribute(this.name);
          }
        }

        this.value = value;
        this._pendingValue = noChange;
      }
    }]);
    return BooleanAttributePart;
  }();
  /**
   * Sets attribute values for PropertyParts, so that the value is only set once
   * even if there are multiple parts for a property.
   *
   * If an expression controls the whole property value, then the value is simply
   * assigned to the property under control. If there are string literals or
   * multiple expressions, then the strings are expressions are interpolated into
   * a string first.
   */


  _exports.BooleanAttributePart$1 = _exports.BooleanAttributePart = BooleanAttributePart;

  var PropertyCommitter =
  /*#__PURE__*/
  function (_AttributeCommitter) {
    babelHelpers.inherits(PropertyCommitter, _AttributeCommitter);

    function PropertyCommitter(element, name, strings) {
      var _this10;

      babelHelpers.classCallCheck(this, PropertyCommitter);
      _this10 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PropertyCommitter).call(this, element, name, strings));
      _this10.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
      return _this10;
    }

    babelHelpers.createClass(PropertyCommitter, [{
      key: "_createPart",
      value: function _createPart() {
        return new PropertyPart(this);
      }
    }, {
      key: "_getValue",
      value: function _getValue() {
        if (this.single) {
          return this.parts[0].value;
        }

        return babelHelpers.get(babelHelpers.getPrototypeOf(PropertyCommitter.prototype), "_getValue", this).call(this);
      }
    }, {
      key: "commit",
      value: function commit() {
        if (this.dirty) {
          this.dirty = false;
          this.element[this.name] = this._getValue();
        }
      }
    }]);
    return PropertyCommitter;
  }(AttributeCommitter);

  _exports.PropertyCommitter$1 = _exports.PropertyCommitter = PropertyCommitter;

  var PropertyPart =
  /*#__PURE__*/
  function (_AttributePart) {
    babelHelpers.inherits(PropertyPart, _AttributePart);

    function PropertyPart() {
      babelHelpers.classCallCheck(this, PropertyPart);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PropertyPart).apply(this, arguments));
    }

    return PropertyPart;
  }(AttributePart); // Detect event listener options support. If the `capture` property is read
  // from the options object, then options are supported. If not, then the thrid
  // argument to add/removeEventListener is interpreted as the boolean capture
  // value so we should only pass the `capture` property.


  _exports.PropertyPart$1 = _exports.PropertyPart = PropertyPart;
  var eventOptionsSupported = false;

  try {
    var options = {
      get capture() {
        eventOptionsSupported = true;
        return false;
      }

    };
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, options);
  } catch (_e) {}

  var EventPart =
  /*#__PURE__*/
  function () {
    function EventPart(element, eventName, eventContext) {
      var _this11 = this;

      babelHelpers.classCallCheck(this, EventPart);
      this.value = undefined;
      this._pendingValue = undefined;
      this.element = element;
      this.eventName = eventName;
      this.eventContext = eventContext;

      this._boundHandleEvent = function (e) {
        return _this11.handleEvent(e);
      };
    }

    babelHelpers.createClass(EventPart, [{
      key: "setValue",
      value: function setValue(value) {
        this._pendingValue = value;
      }
    }, {
      key: "commit",
      value: function commit() {
        while (isDirective(this._pendingValue)) {
          var directive$$1 = this._pendingValue;
          this._pendingValue = noChange;
          directive$$1(this);
        }

        if (this._pendingValue === noChange) {
          return;
        }

        var newListener = this._pendingValue;
        var oldListener = this.value;
        var shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
        var shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);

        if (shouldRemoveListener) {
          this.element.removeEventListener(this.eventName, this._boundHandleEvent, this._options);
        }

        if (shouldAddListener) {
          this._options = getOptions(newListener);
          this.element.addEventListener(this.eventName, this._boundHandleEvent, this._options);
        }

        this.value = newListener;
        this._pendingValue = noChange;
      }
    }, {
      key: "handleEvent",
      value: function handleEvent(event) {
        if (typeof this.value === 'function') {
          this.value.call(this.eventContext || this.element, event);
        } else {
          this.value.handleEvent(event);
        }
      }
    }]);
    return EventPart;
  }(); // We copy options because of the inconsistent behavior of browsers when reading
  // the third argument of add/removeEventListener. IE11 doesn't support options
  // at all. Chrome 41 only reads `capture` if the argument is an object.


  _exports.EventPart$1 = _exports.EventPart = EventPart;

  var getOptions = function getOptions(o) {
    return o && (eventOptionsSupported ? {
      capture: o.capture,
      passive: o.passive,
      once: o.once
    } : o.capture);
  };

  var parts = {
    isPrimitive: isPrimitive,
    AttributeCommitter: AttributeCommitter,
    AttributePart: AttributePart,
    NodePart: NodePart,
    BooleanAttributePart: BooleanAttributePart,
    PropertyCommitter: PropertyCommitter,
    PropertyPart: PropertyPart,
    EventPart: EventPart
  };
  _exports.$parts = parts;

  var DefaultTemplateProcessor =
  /*#__PURE__*/
  function () {
    function DefaultTemplateProcessor() {
      babelHelpers.classCallCheck(this, DefaultTemplateProcessor);
    }

    babelHelpers.createClass(DefaultTemplateProcessor, [{
      key: "handleAttributeExpressions",

      /**
       * Create parts for an attribute-position binding, given the event, attribute
       * name, and string literals.
       *
       * @param element The element containing the binding
       * @param name  The attribute name
       * @param strings The string literals. There are always at least two strings,
       *   event for fully-controlled bindings with a single expression.
       */
      value: function handleAttributeExpressions(element, name, strings, options) {
        var prefix = name[0];

        if (prefix === '.') {
          var _comitter = new PropertyCommitter(element, name.slice(1), strings);

          return _comitter.parts;
        }

        if (prefix === '@') {
          return [new EventPart(element, name.slice(1), options.eventContext)];
        }

        if (prefix === '?') {
          return [new BooleanAttributePart(element, name.slice(1), strings)];
        }

        var comitter = new AttributeCommitter(element, name, strings);
        return comitter.parts;
      }
      /**
       * Create parts for a text-position binding.
       * @param templateFactory
       */

    }, {
      key: "handleTextExpression",
      value: function handleTextExpression(options) {
        return new NodePart(options);
      }
    }]);
    return DefaultTemplateProcessor;
  }();

  _exports.DefaultTemplateProcessor$1 = _exports.DefaultTemplateProcessor = DefaultTemplateProcessor;
  var defaultTemplateProcessor = new DefaultTemplateProcessor();
  _exports.defaultTemplateProcessor$1 = _exports.defaultTemplateProcessor = defaultTemplateProcessor;
  var defaultTemplateProcessor$1 = {
    DefaultTemplateProcessor: DefaultTemplateProcessor,
    defaultTemplateProcessor: defaultTemplateProcessor
  };
  _exports.$defaultTemplateProcessor = defaultTemplateProcessor$1;

  function templateFactory(result) {
    var templateCache = templateCaches.get(result.type);

    if (templateCache === undefined) {
      templateCache = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      };
      templateCaches.set(result.type, templateCache);
    }

    var template = templateCache.stringsArray.get(result.strings);

    if (template !== undefined) {
      return template;
    } // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content


    var key = result.strings.join(marker); // Check if we already have a Template for this key

    template = templateCache.keyString.get(key);

    if (template === undefined) {
      // If we have not seen this key before, create a new Template
      template = new Template(result, result.getTemplateElement()); // Cache the Template for this key

      templateCache.keyString.set(key, template);
    } // Cache all future queries for this TemplateStringsArray


    templateCache.stringsArray.set(result.strings, template);
    return template;
  }

  var templateCaches = new Map();
  _exports.templateCaches$1 = _exports.templateCaches = templateCaches;
  var templateFactory$1 = {
    templateFactory: templateFactory,
    templateCaches: templateCaches
  };
  _exports.$templateFactory = templateFactory$1;
  var parts$1 = new WeakMap();
  /**
        * Renders a template to a container.
        *
        * To update a container with new values, reevaluate the template literal and
        * call `render` with the new result.
        *
        * @param result a TemplateResult created by evaluating a template tag like
        *     `html` or `svg`.
        * @param container A DOM parent to render to. The entire contents are either
        *     replaced, or efficiently updated if the same result type was previous
        *     rendered there.
        * @param options RenderOptions for the entire render tree rendered to this
        *     container. Render options must *not* change between renders to the same
        *     container, as those changes will not effect previously rendered DOM.
        */

  _exports.parts$1 = _exports.parts = parts$1;

  var render = function render(result, container, options) {
    var part = parts$1.get(container);

    if (part === undefined) {
      removeNodes(container, container.firstChild);
      parts$1.set(container, part = new NodePart(Object.assign({
        templateFactory: templateFactory
      }, options)));
      part.appendInto(container);
    }

    part.setValue(result);
    part.commit();
  };

  _exports.render$2 = _exports.render = render;
  var render$1 = {
    parts: parts$1,
    render: render
  };
  _exports.$render = render$1;

  var html = function html(strings) {
    for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      values[_key2 - 1] = arguments[_key2];
    }

    return new TemplateResult(strings, values, 'html', defaultTemplateProcessor);
  };
  /**
          * Interprets a template literal as an SVG template that can efficiently
          * render to and update a container.
          */


  _exports.html$2 = _exports.html$1 = _exports.html = html;

  var svg = function svg(strings) {
    for (var _len3 = arguments.length, values = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      values[_key3 - 1] = arguments[_key3];
    }

    return new SVGTemplateResult(strings, values, 'svg', defaultTemplateProcessor);
  };

  _exports.svg$2 = _exports.svg$1 = _exports.svg = svg;
  var litHtml = {
    html: html,
    svg: svg,
    DefaultTemplateProcessor: DefaultTemplateProcessor,
    defaultTemplateProcessor: defaultTemplateProcessor,
    directive: directive,
    isDirective: isDirective,
    removeNodes: removeNodes,
    reparentNodes: reparentNodes,
    noChange: noChange,
    nothing: nothing,
    AttributeCommitter: AttributeCommitter,
    AttributePart: AttributePart,
    BooleanAttributePart: BooleanAttributePart,
    EventPart: EventPart,
    isPrimitive: isPrimitive,
    NodePart: NodePart,
    PropertyCommitter: PropertyCommitter,
    PropertyPart: PropertyPart,
    parts: parts$1,
    render: render,
    templateCaches: templateCaches,
    templateFactory: templateFactory,
    TemplateInstance: TemplateInstance,
    SVGTemplateResult: SVGTemplateResult,
    TemplateResult: TemplateResult,
    createMarker: createMarker,
    isTemplatePartActive: isTemplatePartActive,
    Template: Template
  };
  _exports.$litHtml = litHtml;
  var walkerNodeFilter = 133
  /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
  ;
  /**
   * Removes the list of nodes from a Template safely. In addition to removing
   * nodes from the Template, the Template part indices are updated to match
   * the mutated Template DOM.
   *
   * As the template is walked the removal state is tracked and
   * part indices are adjusted as needed.
   *
   * div
   *   div#1 (remove) <-- start removing (removing node is div#1)
   *     div
   *       div#2 (remove)  <-- continue removing (removing node is still div#1)
   *         div
   * div <-- stop removing since previous sibling is the removing node (div#1,
   * removed 4 nodes)
   */

  function removeNodesFromTemplate(template, nodesToRemove) {
    var content = template.element.content,
        parts = template.parts;
    var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    var partIndex = nextActiveIndexInTemplateParts(parts);
    var part = parts[partIndex];
    var nodeIndex = -1;
    var removeCount = 0;
    var nodesToRemoveInTemplate = [];
    var currentRemovingNode = null;

    while (walker.nextNode()) {
      nodeIndex++;
      var node = walker.currentNode; // End removal if stepped past the removing node

      if (node.previousSibling === currentRemovingNode) {
        currentRemovingNode = null;
      } // A node to remove was found in the template


      if (nodesToRemove.has(node)) {
        nodesToRemoveInTemplate.push(node); // Track node we're removing

        if (currentRemovingNode === null) {
          currentRemovingNode = node;
        }
      } // When removing, increment count by which to adjust subsequent part indices


      if (currentRemovingNode !== null) {
        removeCount++;
      }

      while (part !== undefined && part.index === nodeIndex) {
        // If part is in a removed node deactivate it by setting index to -1 or
        // adjust the index as needed.
        part.index = currentRemovingNode !== null ? -1 : part.index - removeCount; // go to the next active part.

        partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        part = parts[partIndex];
      }
    }

    nodesToRemoveInTemplate.forEach(function (n) {
      return n.parentNode.removeChild(n);
    });
  }

  var countNodes = function countNodes(node) {
    var count = node.nodeType === 11
    /* Node.DOCUMENT_FRAGMENT_NODE */
    ? 0 : 1;
    var walker = document.createTreeWalker(node, walkerNodeFilter, null, false);

    while (walker.nextNode()) {
      count++;
    }

    return count;
  };

  var nextActiveIndexInTemplateParts = function nextActiveIndexInTemplateParts(parts) {
    var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    for (var i = startIndex + 1; i < parts.length; i++) {
      var _part6 = parts[i];

      if (isTemplatePartActive(_part6)) {
        return i;
      }
    }

    return -1;
  };
  /**
   * Inserts the given node into the Template, optionally before the given
   * refNode. In addition to inserting the node into the Template, the Template
   * part indices are updated to match the mutated Template DOM.
   */


  function insertNodeIntoTemplate(template, node) {
    var refNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var content = template.element.content,
        parts = template.parts; // If there's no refNode, then put node at end of template.
    // No part indices need to be shifted in this case.

    if (refNode === null || refNode === undefined) {
      content.appendChild(node);
      return;
    }

    var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    var partIndex = nextActiveIndexInTemplateParts(parts);
    var insertCount = 0;
    var walkerIndex = -1;

    while (walker.nextNode()) {
      walkerIndex++;
      var walkerNode = walker.currentNode;

      if (walkerNode === refNode) {
        insertCount = countNodes(node);
        refNode.parentNode.insertBefore(node, refNode);
      }

      while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
        // If we've inserted the node, simply adjust all subsequent parts
        if (insertCount > 0) {
          while (partIndex !== -1) {
            parts[partIndex].index += insertCount;
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
          }

          return;
        }

        partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
      }
    }
  }

  var modifyTemplate = {
    removeNodesFromTemplate: removeNodesFromTemplate,
    insertNodeIntoTemplate: insertNodeIntoTemplate
  };
  _exports.$modifyTemplate = modifyTemplate;

  var getTemplateCacheKey = function getTemplateCacheKey(type, scopeName) {
    return "".concat(type, "--").concat(scopeName);
  };

  var compatibleShadyCSSVersion = true;

  if (typeof window.ShadyCSS === 'undefined') {
    compatibleShadyCSSVersion = false;
  } else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
    console.warn("Incompatible ShadyCSS version detected." + "Please update to at least @webcomponents/webcomponentsjs@2.0.2 and" + "@webcomponents/shadycss@1.3.1.");
    compatibleShadyCSSVersion = false;
  }
  /**
   * Template factory which scopes template DOM using ShadyCSS.
   * @param scopeName {string}
   */


  var shadyTemplateFactory = function shadyTemplateFactory(scopeName) {
    return function (result) {
      var cacheKey = getTemplateCacheKey(result.type, scopeName);
      var templateCache = templateCaches.get(cacheKey);

      if (templateCache === undefined) {
        templateCache = {
          stringsArray: new WeakMap(),
          keyString: new Map()
        };
        templateCaches.set(cacheKey, templateCache);
      }

      var template = templateCache.stringsArray.get(result.strings);

      if (template !== undefined) {
        return template;
      }

      var key = result.strings.join(marker);
      template = templateCache.keyString.get(key);

      if (template === undefined) {
        var element = result.getTemplateElement();

        if (compatibleShadyCSSVersion) {
          window.ShadyCSS.prepareTemplateDom(element, scopeName);
        }

        template = new Template(result, element);
        templateCache.keyString.set(key, template);
      }

      templateCache.stringsArray.set(result.strings, template);
      return template;
    };
  };

  var TEMPLATE_TYPES = ['html', 'svg'];
  /**
   * Removes all style elements from Templates for the given scopeName.
   */

  var removeStylesFromLitTemplates = function removeStylesFromLitTemplates(scopeName) {
    TEMPLATE_TYPES.forEach(function (type) {
      var templates = templateCaches.get(getTemplateCacheKey(type, scopeName));

      if (templates !== undefined) {
        templates.keyString.forEach(function (template) {
          var content = template.element.content; // IE 11 doesn't support the iterable param Set constructor

          var styles = new Set();
          Array.from(content.querySelectorAll('style')).forEach(function (s) {
            styles.add(s);
          });
          removeNodesFromTemplate(template, styles);
        });
      }
    });
  };

  var shadyRenderSet = new Set();
  /**
   * For the given scope name, ensures that ShadyCSS style scoping is performed.
   * This is done just once per scope name so the fragment and template cannot
   * be modified.
   * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
   * to be scoped and appended to the document
   * (2) removes style elements from all lit-html Templates for this scope name.
   *
   * Note, <style> elements can only be placed into templates for the
   * initial rendering of the scope. If <style> elements are included in templates
   * dynamically rendered to the scope (after the first scope render), they will
   * not be scoped and the <style> will be left in the template and rendered
   * output.
   */

  var prepareTemplateStyles = function prepareTemplateStyles(renderedDOM, template, scopeName) {
    shadyRenderSet.add(scopeName); // Move styles out of rendered DOM and store.

    var styles = renderedDOM.querySelectorAll('style'); // If there are no styles, skip unnecessary work

    if (styles.length === 0) {
      // Ensure prepareTemplateStyles is called to support adding
      // styles via `prepareAdoptedCssText` since that requires that
      // `prepareTemplateStyles` is called.
      window.ShadyCSS.prepareTemplateStyles(template.element, scopeName);
      return;
    }

    var condensedStyle = document.createElement('style'); // Collect styles into a single style. This helps us make sure ShadyCSS
    // manipulations will not prevent us from being able to fix up template
    // part indices.
    // NOTE: collecting styles is inefficient for browsers but ShadyCSS
    // currently does this anyway. When it does not, this should be changed.

    for (var i = 0; i < styles.length; i++) {
      var style = styles[i];
      style.parentNode.removeChild(style);
      condensedStyle.textContent += style.textContent;
    } // Remove styles from nested templates in this scope.


    removeStylesFromLitTemplates(scopeName); // And then put the condensed style into the "root" template passed in as
    // `template`.

    insertNodeIntoTemplate(template, condensedStyle, template.element.content.firstChild); // Note, it's important that ShadyCSS gets the template that `lit-html`
    // will actually render so that it can update the style inside when
    // needed (e.g. @apply native Shadow DOM case).

    window.ShadyCSS.prepareTemplateStyles(template.element, scopeName);

    if (window.ShadyCSS.nativeShadow) {
      // When in native Shadow DOM, re-add styling to rendered content using
      // the style ShadyCSS produced.
      var _style = template.element.content.querySelector('style');

      renderedDOM.insertBefore(_style.cloneNode(true), renderedDOM.firstChild);
    } else {
      // When not in native Shadow DOM, at this point ShadyCSS will have
      // removed the style from the lit template and parts will be broken as a
      // result. To fix this, we put back the style node ShadyCSS removed
      // and then tell lit to remove that node from the template.
      // NOTE, ShadyCSS creates its own style so we can safely add/remove
      // `condensedStyle` here.
      template.element.content.insertBefore(condensedStyle, template.element.content.firstChild);
      var removes = new Set();
      removes.add(condensedStyle);
      removeNodesFromTemplate(template, removes);
    }
  };
  /**
   * Extension to the standard `render` method which supports rendering
   * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
   * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
   * or when the webcomponentsjs
   * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
   *
   * Adds a `scopeName` option which is used to scope element DOM and stylesheets
   * when native ShadowDOM is unavailable. The `scopeName` will be added to
   * the class attribute of all rendered DOM. In addition, any style elements will
   * be automatically re-written with this `scopeName` selector and moved out
   * of the rendered DOM and into the document `<head>`.
   *
   * It is common to use this render method in conjunction with a custom element
   * which renders a shadowRoot. When this is done, typically the element's
   * `localName` should be used as the `scopeName`.
   *
   * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
   * custom properties (needed only on older browsers like IE11) and a shim for
   * a deprecated feature called `@apply` that supports applying a set of css
   * custom properties to a given location.
   *
   * Usage considerations:
   *
   * * Part values in `<style>` elements are only applied the first time a given
   * `scopeName` renders. Subsequent changes to parts in style elements will have
   * no effect. Because of this, parts in style elements should only be used for
   * values that will never change, for example parts that set scope-wide theme
   * values or parts which render shared style elements.
   *
   * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
   * custom element's `constructor` is not supported. Instead rendering should
   * either done asynchronously, for example at microtask timing (for example
   * `Promise.resolve()`), or be deferred until the first time the element's
   * `connectedCallback` runs.
   *
   * Usage considerations when using shimmed custom properties or `@apply`:
   *
   * * Whenever any dynamic changes are made which affect
   * css custom properties, `ShadyCSS.styleElement(element)` must be called
   * to update the element. There are two cases when this is needed:
   * (1) the element is connected to a new parent, (2) a class is added to the
   * element that causes it to match different custom properties.
   * To address the first case when rendering a custom element, `styleElement`
   * should be called in the element's `connectedCallback`.
   *
   * * Shimmed custom properties may only be defined either for an entire
   * shadowRoot (for example, in a `:host` rule) or via a rule that directly
   * matches an element with a shadowRoot. In other words, instead of flowing from
   * parent to child as do native css custom properties, shimmed custom properties
   * flow only from shadowRoots to nested shadowRoots.
   *
   * * When using `@apply` mixing css shorthand property names with
   * non-shorthand names (for example `border` and `border-width`) is not
   * supported.
   */


  var render$2 = function render$2(result, container, options) {
    var scopeName = options.scopeName;
    var hasRendered = parts$1.has(container);
    var needsScoping = babelHelpers.instanceof(container, ShadowRoot) && compatibleShadyCSSVersion && babelHelpers.instanceof(result, TemplateResult); // Handle first render to a scope specially...

    var firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName); // On first scope render, render into a fragment; this cannot be a single
    // fragment that is reused since nested renders can occur synchronously.

    var renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
    render(result, renderContainer, Object.assign({
      templateFactory: shadyTemplateFactory(scopeName)
    }, options)); // When performing first scope render,
    // (1) We've rendered into a fragment so that there's a chance to
    // `prepareTemplateStyles` before sub-elements hit the DOM
    // (which might cause them to render based on a common pattern of
    // rendering in a custom element's `connectedCallback`);
    // (2) Scope the template with ShadyCSS one time only for this scope.
    // (3) Render the fragment into the container and make sure the
    // container knows its `part` is the one we just rendered. This ensures
    // DOM will be re-used on subsequent renders.

    if (firstScopeRender) {
      var _part7 = parts$1.get(renderContainer);

      parts$1.delete(renderContainer);

      if (babelHelpers.instanceof(_part7.value, TemplateInstance)) {
        prepareTemplateStyles(renderContainer, _part7.value.template, scopeName);
      }

      removeNodes(container, container.firstChild);
      container.appendChild(renderContainer);
      parts$1.set(container, _part7);
    } // After elements have hit the DOM, update styling if this is the
    // initial render to this container.
    // This is needed whenever dynamic changes are made so it would be
    // safest to do every render; however, this would regress performance
    // so we leave it up to the user to call `ShadyCSSS.styleElement`
    // for dynamic changes.


    if (!hasRendered && needsScoping) {
      window.ShadyCSS.styleElement(container.host);
    }
  };

  _exports.render$1 = render$2;
  var shadyRender = {
    render: render$2,
    html: html,
    svg: svg,
    TemplateResult: TemplateResult
  };
  /**
   * Minimal implementation of Array.prototype.flat
   * @param arr the array to flatten
   * @param result the accumlated result
   */

  _exports.$shadyRender = shadyRender;

  function arrayFlat(styles) {
    var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    for (var i = 0, length = styles.length; i < length; i++) {
      var value = styles[i];

      if (Array.isArray(value)) {
        arrayFlat(value, result);
      } else {
        result.push(value);
      }
    }

    return result;
  }
  /** Deeply flattens styles array. Uses native flat if available. */


  var flattenStyles = function flattenStyles(styles) {
    return styles.flat ? styles.flat(Infinity) : arrayFlat(styles);
  };

  var LitElement =
  /*#__PURE__*/
  function (_UpdatingElement) {
    babelHelpers.inherits(LitElement, _UpdatingElement);

    function LitElement() {
      babelHelpers.classCallCheck(this, LitElement);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(LitElement).apply(this, arguments));
    }

    babelHelpers.createClass(LitElement, [{
      key: "initialize",

      /**
       * Performs element initialization. By default this calls `createRenderRoot`
       * to create the element `renderRoot` node and captures any pre-set values for
       * registered properties.
       */
      value: function initialize() {
        babelHelpers.get(babelHelpers.getPrototypeOf(LitElement.prototype), "initialize", this).call(this);
        this.renderRoot = this.createRenderRoot(); // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
        // element's getRootNode(). While this could be done, we're choosing not to
        // support this now since it would require different logic around de-duping.

        if (window.ShadowRoot && babelHelpers.instanceof(this.renderRoot, window.ShadowRoot)) {
          this.adoptStyles();
        }
      }
      /**
       * Returns the node into which the element should render and by default
       * creates and returns an open shadowRoot. Implement to customize where the
       * element's DOM is rendered. For example, to render into the element's
       * childNodes, return `this`.
       * @returns {Element|DocumentFragment} Returns a node into which to render.
       */

    }, {
      key: "createRenderRoot",
      value: function createRenderRoot() {
        return this.attachShadow({
          mode: 'open'
        });
      }
      /**
       * Applies styling to the element shadowRoot using the `static get styles`
       * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
       * available and will fallback otherwise. When Shadow DOM is polyfilled,
       * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
       * is available but `adoptedStyleSheets` is not, styles are appended to the
       * end of the `shadowRoot` to [mimic spec
       * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
       */

    }, {
      key: "adoptStyles",
      value: function adoptStyles() {
        var styles = this.constructor._styles;

        if (styles.length === 0) {
          return;
        } // There are three separate cases here based on Shadow DOM support.
        // (1) shadowRoot polyfilled: use ShadyCSS
        // (2) shadowRoot.adoptedStyleSheets available: use it.
        // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
        // rendering


        if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
          window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(function (s) {
            return s.cssText;
          }), this.localName);
        } else if (supportsAdoptingStyleSheets) {
          this.renderRoot.adoptedStyleSheets = styles.map(function (s) {
            return s.styleSheet;
          });
        } else {
          // This must be done after rendering so the actual style insertion is done
          // in `update`.
          this._needsShimAdoptedStyleSheets = true;
        }
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        babelHelpers.get(babelHelpers.getPrototypeOf(LitElement.prototype), "connectedCallback", this).call(this); // Note, first update/render handles styleElement so we only call this if
        // connected after first update.

        if (this.hasUpdated && window.ShadyCSS !== undefined) {
          window.ShadyCSS.styleElement(this);
        }
      }
      /**
       * Updates the element. This method reflects property values to attributes
       * and calls `render` to render DOM via lit-html. Setting properties inside
       * this method will *not* trigger another update.
       * * @param _changedProperties Map of changed properties with old values
       */

    }, {
      key: "update",
      value: function update(changedProperties) {
        var _this12 = this;

        babelHelpers.get(babelHelpers.getPrototypeOf(LitElement.prototype), "update", this).call(this, changedProperties);
        var templateResult = this.render();

        if (babelHelpers.instanceof(templateResult, TemplateResult)) {
          this.constructor.render(templateResult, this.renderRoot, {
            scopeName: this.localName,
            eventContext: this
          });
        } // When native Shadow DOM is used but adoptedStyles are not supported,
        // insert styling after rendering to ensure adoptedStyles have highest
        // priority.


        if (this._needsShimAdoptedStyleSheets) {
          this._needsShimAdoptedStyleSheets = false;

          this.constructor._styles.forEach(function (s) {
            var style = document.createElement('style');
            style.textContent = s.cssText;

            _this12.renderRoot.appendChild(style);
          });
        }
      }
      /**
       * Invoked on each update to perform rendering tasks. This method must return
       * a lit-html TemplateResult. Setting properties inside this method will *not*
       * trigger the element to update.
       */

    }, {
      key: "render",
      value: function render() {}
    }], [{
      key: "finalize",

      /** @nocollapse */
      value: function finalize() {
        babelHelpers.get(babelHelpers.getPrototypeOf(LitElement), "finalize", this).call(this); // Prepare styling that is stamped at first render time. Styling
        // is built from user provided `styles` or is inherited from the superclass.

        this._styles = this.hasOwnProperty(JSCompiler_renameProperty('styles', this)) ? this._getUniqueStyles() : this._styles || [];
      }
      /** @nocollapse */

    }, {
      key: "_getUniqueStyles",
      value: function _getUniqueStyles() {
        // Take care not to call `this.styles` multiple times since this generates
        // new CSSResults each time.
        // TODO(sorvell): Since we do not cache CSSResults by input, any
        // shared styles will generate new stylesheet objects, which is wasteful.
        // This should be addressed when a browser ships constructable
        // stylesheets.
        var userStyles = this.styles;
        var styles = [];

        if (Array.isArray(userStyles)) {
          var flatStyles = flattenStyles(userStyles); // As a performance optimization to avoid duplicated styling that can
          // occur especially when composing via subclassing, de-duplicate styles
          // preserving the last item in the list. The last item is kept to
          // try to preserve cascade order with the assumption that it's most
          // important that last added styles override previous styles.

          var styleSet = flatStyles.reduceRight(function (set, s) {
            set.add(s); // on IE set.add does not return the set.

            return set;
          }, new Set()); // Array.from does not work on Set in IE

          styleSet.forEach(function (v) {
            return styles.unshift(v);
          });
        } else if (userStyles) {
          styles.push(userStyles);
        }

        return styles;
      }
    }]);
    return LitElement;
  }(UpdatingElement);
  /**
   * Ensure this class is marked as `finalized` as an optimization ensuring
   * it will not needlessly try to `finalize`.
   */


  _exports.LitElement = LitElement;
  LitElement.finalized = true;
  /**
   * Render method used to render the lit-html TemplateResult to the element's
   * DOM.
   * @param {TemplateResult} Template to render.
   * @param {Element|DocumentFragment} Node into which to render.
   * @param {String} Element name.
   * @nocollapse
   */

  LitElement.render = render$2;
  var litElement = {
    LitElement: LitElement,
    defaultConverter: defaultConverter,
    notEqual: notEqual,
    UpdatingElement: UpdatingElement,
    customElement: customElement,
    property: property,
    query: query,
    queryAll: queryAll,
    eventOptions: eventOptions,
    html: html,
    svg: svg,
    TemplateResult: TemplateResult,
    SVGTemplateResult: SVGTemplateResult,
    supportsAdoptingStyleSheets: supportsAdoptingStyleSheets,
    CSSResult: CSSResult,
    unsafeCss: unsafeCss,
    css: css
  };
  _exports.$litElement = litElement;

  var T3XDojoClueGeneratorElement =
  /*#__PURE__*/
  function (_LitElement) {
    babelHelpers.inherits(T3XDojoClueGeneratorElement, _LitElement);
    babelHelpers.createClass(T3XDojoClueGeneratorElement, null, [{
      key: "properties",

      /**
       * Define properties. Properties defined here will be automatically 
       * observed.
       */
      get: function get() {
        return {
          teams: {
            type: Number
          },
          challenges: {
            type: Number
          },
          clues: {
            type: Array
          }
        };
      }
      /**
       * In the element constructor, assign default property values.
       */

    }]);

    function T3XDojoClueGeneratorElement() {
      var _this13;

      babelHelpers.classCallCheck(this, T3XDojoClueGeneratorElement);
      _this13 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(T3XDojoClueGeneratorElement).call(this));
      _this13.teams = 0;
      _this13.challenges = 0;
      _this13.clues = [];
      return _this13;
    }

    babelHelpers.createClass(T3XDojoClueGeneratorElement, [{
      key: "render",
      value: function render() {
        return html(_templateObject_75f4202027e811e98441efc9cfed962d());
      }
    }, {
      key: "generate",
      value: function generate() {
        var clues = [];

        var _teams = babelHelpers.toConsumableArray(Array(this.teams).keys());

        for (var challenge = 0; challenge < this.challenges; challenge++) {
          clues[challenge] = [];
          _teams = shuffle(_teams);

          for (var from = 0, to = 1; from < _teams.length; from++, to = (to + 1) % _teams.length) {
            clues[challenge].push(this._createTeamClue(_teams[from], _teams[to]));
          }
        }

        this.clues = clues;
        this.dispatchEvent(new CustomEvent('clues-generated', {
          detail: {
            "clues": this.getClues(),
            "givenClues": this.getGivenClues(),
            "receivedClues": this.getReceivedClues()
          },
          bubbles: true,
          composed: true
        }));
        return clues;
      }
    }, {
      key: "getClues",
      value: function getClues() {
        return this.clues;
      }
    }, {
      key: "getGivenClues",
      value: function getGivenClues() {
        var _this14 = this;

        var givenClues = [];
        var clues = this.getClues();

        for (var team = 0; team < this.teams; team++) {
          givenClues[team] = [];
        }

        var _loop = function _loop(challenge) {
          var teamClues = clues[challenge];
          teamClues.map(function (_ref) {
            var from = _ref.from,
                to = _ref.to;
            givenClues[from][challenge] = _this14._createChallengeClue(to, challenge);
          });
        };

        for (var challenge = 0; challenge < clues.length; challenge++) {
          _loop(challenge);
        }

        return givenClues;
      }
    }, {
      key: "getReceivedClues",
      value: function getReceivedClues() {
        var _this15 = this;

        var receivedClues = [];
        var clues = this.getClues();

        for (var team = 0; team < this.teams; team++) {
          receivedClues[team] = [];
        }

        var _loop2 = function _loop2(challenge) {
          var teamClues = clues[challenge];
          teamClues.map(function (_ref2) {
            var from = _ref2.from,
                to = _ref2.to;
            receivedClues[to][challenge] = _this15._createChallengeClue(from, challenge);
          });
        };

        for (var challenge = 0; challenge < clues.length; challenge++) {
          _loop2(challenge);
        }

        return receivedClues;
      }
    }, {
      key: "_createTeamClue",
      value: function _createTeamClue(from, to) {
        return {
          from: from,
          to: to
        };
      }
    }, {
      key: "_createChallengeClue",
      value: function _createChallengeClue(team, challenge) {
        return {
          team: team,
          challenge: challenge
        };
      }
    }]);
    return T3XDojoClueGeneratorElement;
  }(LitElement);

  _exports.T3XDojoClueGeneratorElement = T3XDojoClueGeneratorElement;
  customElements.define('t3x-dojo-clue-generator-element', T3XDojoClueGeneratorElement);
  var t3xDojoClueGeneratorElement = {
    T3XDojoClueGeneratorElement: T3XDojoClueGeneratorElement
  };
  _exports.$t3xDojoClueGeneratorElement = t3xDojoClueGeneratorElement;

  var T3XDojoClueGeneratorApp =
  /*#__PURE__*/
  function (_LitElement2) {
    babelHelpers.inherits(T3XDojoClueGeneratorApp, _LitElement2);
    babelHelpers.createClass(T3XDojoClueGeneratorApp, null, [{
      key: "properties",

      /**
       * Define properties. Properties defined here will be automatically 
       * observed.
       */
      get: function get() {
        return {
          teamsCount: {
            type: Number
          },
          challengesCount: {
            type: Number
          },
          clues: {
            type: Array
          },
          givenClues: {
            type: Array
          },
          receivedClues: {
            type: Array
          }
        };
      }
      /**
       * In the element constructor, assign default property values.
       */

    }]);

    function T3XDojoClueGeneratorApp() {
      var _this16;

      babelHelpers.classCallCheck(this, T3XDojoClueGeneratorApp);
      // Must call superconstructor first.
      _this16 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(T3XDojoClueGeneratorApp).call(this));
      _this16.teamsCount = 10;
      _this16.challengesCount = 6;
      _this16.clues = [];
      _this16.givenClues = [];
      _this16.receivedClues = [];

      _this16.addEventListener('clues-generated',
      /*#__PURE__*/
      function () {
        var _ref3 = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(e) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _this16.clues = e.detail.clues;
                  _this16.givenClues = e.detail.givenClues;
                  _this16.receivedClues = e.detail.receivedClues;

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }());

      return _this16;
    }
    /**
     * Define a template for the new element by implementing LitElement's
     * `render` function. `render` must return a lit-html TemplateResult.
     */


    babelHelpers.createClass(T3XDojoClueGeneratorApp, [{
      key: "render",
      value: function render() {
        return html(_templateObject2_75f4202027e811e98441efc9cfed962d(), this.teamsCount, this.challengesCount, this.teamsCount, this.handleTeamsInput, this.challengesCount, this.handleChallengesInput, this.generate, this.clues.map(function (teamClues, challengeId) {
          return html(_templateObject3_75f4202027e811e98441efc9cfed962d(), challengeId, challengeId + 1, teamClues.sort(function (a, b) {
            return a.from - b.from;
          }).map(function (_ref4) {
            var from = _ref4.from,
                to = _ref4.to;
            return html(_templateObject4_75f4202027e811e98441efc9cfed962d(), from, to, from + 1, to + 1);
          }));
        }), this.givenClues.map(function (challengeClues, teamId) {
          return html(_templateObject5_75f4202027e811e98441efc9cfed962d(), teamId, teamId + 1, challengeClues.map(function (_ref5, challengeId) {
            var team = _ref5.team,
                challenge = _ref5.challenge;
            return html(_templateObject6_75f4202027e811e98441efc9cfed962d(), teamId, challengeId, challenge + 1, team + 1);
          }));
        }), this.receivedClues.map(function (challengeClues, teamId) {
          return html(_templateObject7_75f4202027e811e98441efc9cfed962d(), teamId, teamId + 1, challengeClues.map(function (_ref6, challengeId) {
            var team = _ref6.team,
                challenge = _ref6.challenge;
            return html(_templateObject8_75f4202027e811e98441efc9cfed962d(), teamId, challengeId, challenge + 1, team + 1);
          }));
        }));
      }
    }, {
      key: "generate",
      value: function generate() {
        this.shadowRoot.getElementById('generator').generate();
      }
    }, {
      key: "handleTeamsInput",
      value: function handleTeamsInput(e) {
        this.teamsCount = e.target.value;
      }
    }, {
      key: "handleChallengesInput",
      value: function handleChallengesInput(e) {
        this.challengesCount = e.target.value;
      }
    }]);
    return T3XDojoClueGeneratorApp;
  }(LitElement);

  _exports.T3XDojoClueGeneratorApp = T3XDojoClueGeneratorApp;
  customElements.define('t3x-dojo-clue-generator-app', T3XDojoClueGeneratorApp);
  var t3xDojoClueGeneratorApp = {
    T3XDojoClueGeneratorApp: T3XDojoClueGeneratorApp
  };
  _exports.$t3xDojoClueGeneratorApp = t3xDojoClueGeneratorApp;
});