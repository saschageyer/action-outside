/*
 Version: 1.0.0
  Author: Sascha Geyer
 Website: http://saschageyer.com
    Docs: http://saschageyer.github.io/action-outside
    Repo: https://github.com/saschageyer/action-outside
*/

/*! action-outside v1.0.0 | (c) Sascha Geyer */
(function () {
  'use strict';

  if (!Node.prototype.contains) {
    Node.prototype.contains = function(node) {
      do {
        if (this === node) {
          return true;
        }
      } while (node = node && node.parentNode);
      return false;
    };
  }

  class ActionOutside {
    constructor(elements, callback) {
      this.elements = elements instanceof Array ? elements : [elements];
      this.callback = callback;
      this.evaluateAction = this.evaluateAction.bind(this);
    }

    listen(boolean) {
      if (boolean) {
        document.addEventListener('mouseup', this.evaluateAction);
        document.addEventListener('keyup', this.evaluateAction);
      } else {
        document.removeEventListener('mouseup', this.evaluateAction);
        document.removeEventListener('keyup', this.evaluateAction);
      }
    }

    evaluateAction(e) {
      const clickedElement = e.target;
      for (let i = 0; i < this.elements.length; i++) {
        const currentElement = this.elements[i];
        if (clickedElement === currentElement || currentElement.contains(clickedElement)) {
          return null;
        }
      }
      return this.callback();
    }
  }

  if (typeof module === 'object' && typeof exports === 'object') {
    module.exports = ActionOutside;
  }
  else if (typeof define === 'function' && define.amd) {
    define([], ActionOutside);
  }
  else if (typeof exports === 'object') {
    exports.ActionOutside = ActionOutside;
  }
  else {
    window.ActionOutside = ActionOutside;
  }
})();
