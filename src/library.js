var Library = function Library(document) {
  this.document = document
};

Library.prototype = {
  ready: function(fn) {
    if(this.document.readyState != 'loading') {
      fn();
    } else {
      this.document.addEventListener('DOMContentLoaded', fn);
    }
  },

  findElement: function(element) {
    this.document.getElementById(element);
  },

  show: function(element) {
    findElement(element).style.display = 'inline';
  },

  hide: function(element) {
    findElement(element).style.display = 'none';
  }
};
