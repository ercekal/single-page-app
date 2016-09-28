var Note = function(text){
  this.text = text;
  this.abbreviated = text.slice(0, 19);
};

// Note.prototype.save = function (note) {
//   fs.writeFile('notes.json', this.text);
// };
