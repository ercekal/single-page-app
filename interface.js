function ready(fn) {
  if(document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
  console.log("ready");
}

ready(function(){
  fillNote("Testing note");
  pressButton();
  console.log(document.getElementById('note'));
  assert.toEqual((document.getElementById('note').value), "Testing note");
  assert.toContain('Testing');
});

function fillNote(value){
  document.getElementById('note').value=value;
}

function pressButton(){
  document.getElementById('submit').onclick = function() {
    document.getElementById('list').innerHTML = document.getElementById('note').value;
    console.log('Am i working?');
  };
  document.getElementById('submit').click.preventDefault();
}
var assert = {
  toEqual: function(actual, expectation) {
    if(actual != expectation) {
      throw new Error("Expected " + actual + " to equal " + expectation);
    }
  },
  toContain: function(expectation) {
    if(!document.includes(expectation)) {
      throw new Error("Expected page to contain " + expectation + "but " + actual + "was found");
    }
  }
};
