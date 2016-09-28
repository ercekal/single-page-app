var Note = function(text){
  this.text = text;
  this.abbreviated = text.slice(0, 19);
};

Note.prototype = {
  show: function(){
    return this;
  }
};
