var ThreeDots = function ThreeDots(document) {
  this.document = document
};

ThreeDots.prototype = {
  ready: function(fn) {
    if(this.document.readyState != 'loading') {
      fn();
    } else {
      this.document.addEventListener('DOMContentLoaded', fn);
    }
  },

  findElement: function(element) {
    return this.document.getElementById(element);
  },

  show: function(element) {
    this.findElement(element).style.display = 'inline';
  },

  hide: function(element) {
    this.findElement(element).style.display = 'none';
  },

  setAttributes: function(element, attributes) {
    for(var key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  }
};
