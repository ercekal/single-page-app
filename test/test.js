function ready(fn) {
  if(document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
  console.log("ready");
}

ready(function(){
  // fillNote("Testing note");
  // pressButton();
  // console.log(document.getElementById('note'));
  assert.toEqual(document.getElementById('notes_input').type, 'text');
});
