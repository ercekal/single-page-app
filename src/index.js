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
    // document.getElementById("listing").innerHTML = list.notes[0].text;
  };



  function listNotes() {
      var ulist = document.getElementById("list");
      var newItem = document.createElement("li");
      var length = ulist.children.length + 1;
      var a = document.createElement("a");
      var short = (list.notes.slice(-1)[0].abbreviated);
      a.textContent = short + "...";
      newItem.setAttribute('id', 'element'+length);
      a.setAttribute('href', "#");
      newItem.appendChild(a);
      ulist.appendChild(newItem);
  }
});
