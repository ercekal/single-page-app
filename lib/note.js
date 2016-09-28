var Note = function(text){
  this.text = text;
};

Note.prototype = {
  show: function(){
    return this;
  }
};
