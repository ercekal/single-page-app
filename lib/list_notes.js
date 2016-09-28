// I want to be a JSON file, not a model
var List = function() {
  this.notes = [];
};

List.prototype.save = function (note) {
  this.notes.push(note);
};
