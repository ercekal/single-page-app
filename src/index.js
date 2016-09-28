// make document ready
// read index.html file and remove form entry
// instantiate Note with data from form

function ready(fn) {
  if(document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  // use JS to listen to form text input and submit
  var list = new List();

  document.getElementById('create_note').onclick = function(){
    var text = document.getElementById('notes_input').value;
    var note = new Note(text);
    list.save(note);
    listNotes();
  };

  function listNotes() {
      var ul = document.getElementById("list");
      var li = document.createElement("li");
      var textnode = document.createTextNode(list.notes.slice(-1)[0].text);
      li.appendChild(textnode);
      ul.appendChild(li);
  }
});
