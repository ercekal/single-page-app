// make document ready
// read index.html file and remove form entry
// instantiate Note with data from form

function ready(fn) {
  if(document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
  console.log("ready");
}

ready(function(){
  // use JS to listen to form text input and submit
  var list = new List();

  document.getElementById('create_note').onclick = function(){
    var text = document.getElementById('notes_input').value;
    var note = new Note(text);
    list.save(note);
    console.log(list);
    listNotes();
    // document.getElementById("listing").innerHTML = list.notes[0].text;
  };



  function listNotes() {
      for (i=0; i<(list.notes.length); i++)
      var t = list.notes[i].text;
    {
      document.getElementById("listing").innerHTML = t;
      console.log(list.notes);
    }
  }
});
