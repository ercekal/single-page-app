// I want to be a JSON file, not a model
var List = function() {
  this.notes = [];
};

List.prototype.save = function (note) {
  this.notes.push(note);
};
//
// List.prototype.showNote = function () {
//   for (i=0; i<notes.length; i++)
// {
// document.write(notes[i] + "<br >");
// }
//
// };
