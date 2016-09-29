// make document ready
// read index.html file and remove form entry
// instantiate Note with data from form

var library = new Library(document)

library.ready(function(){
  // use JS to listen to form text input and submit
  var list = new List();

  document.getElementById('create_note').onclick = function(){
    var text = document.getElementById('notes_input').value;
    var note = new Note(text);
    list.save(note);
    displayNote();
  };

  function displayNote() {
    createAbbreviatedNoteView();
    storeFullNote();
    showFullNote(newItem, index);
    returnBack(index);
 }

 function createAbbreviatedNoteView() {
   ulist = document.getElementById("list");
   newItem = document.createElement("li");
   a = document.createElement("a");
   short = (list.notes.slice(-1)[0].abbreviated);
   index = ulist.children.length;
   a.textContent = short + "...";
   a.setAttribute('href', "#");
   newItem.setAttribute('id', 'notes_list');
   newItem.setAttribute('target', index);
   newItem.appendChild(a);
   ulist.appendChild(newItem);
 }

 function storeFullNote() {
   var fullNote = list.notes[index].text;
   var paragraph = document.createElement("p");
   paragraph.setAttribute('id', index);
   paragraph.setAttribute('style', 'display: none');
   var viewDiv = document.getElementById("single_view");
   paragraph.textContent = fullNote;
   viewDiv.appendChild(paragraph);
  }

 function showFullNote(newItem, index) {
   newItem.addEventListener('click', function(){
     document.getElementById("listing").style.display = 'none';
     document.getElementById(index).style.display = 'inline';
     document.getElementById('back_button').style.display = 'inline';
   });
 }

function returnBack(index){
  document.getElementById('back_button').addEventListener('click', function(){
    document.getElementById("listing").style.display = 'inline';
    document.getElementById(index).style.display = 'none';
    document.getElementById('back_button').style.display = 'none';
    });
  }
});
