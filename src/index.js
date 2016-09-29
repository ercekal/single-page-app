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

   function getAttr(att) {
     att.getAttribute(target);
     console.log(target);
   }

  function listNotes() {
     var ulist = document.getElementById("list");
     var newItem = document.createElement("li");
     var a = document.createElement("a");
     var short = (list.notes.slice(-1)[0].abbreviated);
     var index = ulist.children.length;
     var backButton = document.getElementById("back_button");
     console.log(backButton);
     a.textContent = short + "...";
     a.setAttribute('href', "#");
     newItem.setAttribute('id', 'notes_list');
     newItem.setAttribute('target', index);
     newItem.appendChild(a);
     ulist.appendChild(newItem);
     var fullNote = list.notes[index].text;
     var paragraph = document.createElement("p");
     paragraph.setAttribute('id', index);
     paragraph.setAttribute('style', 'display: none');
     var viewDiv = document.getElementById("single_view");
     paragraph.textContent = fullNote;
     viewDiv.appendChild(paragraph);
     addLiListener(newItem, index);
     returnBack(index);
 }

 function addLiListener(newItem, index) {
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

 }
);
