// make document ready
// read index.html file and remove form entry
// instantiate Note with data from form

var dots = new ThreeDots(document)

dots.ready(function(){
  var list = new List();

  dots.findElement('create_note').onclick = function(){
    var text = dots.findElement('notes_input').value;
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
    ulist = dots.findElement("list");
    newItem = document.createElement("li");
    a = document.createElement("a");
    short = (list.notes.slice(-1)[0].abbreviated);
    index = ulist.children.length;
    a.textContent = short + "...";
    a.setAttribute('href', "#");
    dots.setAttributes(newItem, {'id': 'notes_list', 'target': index});
    newItem.appendChild(a);
    ulist.appendChild(newItem);
 }

 function storeFullNote() {
   var fullNote = list.notes[index].text;
   var paragraph = document.createElement("p");
   dots.setAttributes(paragraph, {'id': index, 'style': 'display: none'});
   var viewDiv = dots.findElement("single_view");
   paragraph.textContent = fullNote;
   viewDiv.appendChild(paragraph);
  }

 function showFullNote(newItem, index) {
   newItem.addEventListener('click', function(){
     dots.hide("listing");
     dots.show(index);
     dots.show('back_button');
   });
 }

function returnBack(index){
  dots.findElement('back_button').addEventListener('click', function(){
    dots.show("listing");
    dots.hide(index);
    dots.hide('back_button');
    });
  }
});
