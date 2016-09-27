var fs = require('fs');

var Note = function(text){
  this.text = text;
};

Note.prototype.save = function (note) {
  fs.writeFile('notes.json', this.text);
};
