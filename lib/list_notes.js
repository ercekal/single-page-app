// I want to be a JSON file, not a model
var List = function() {
  this.notes = [];
};

List.prototype.save = function (note) {
  if (note.text.length !== 0) {
    this.notes.push(note);
  } else {
    throw new Error('Please enter some real characters in your note');
  }
};
