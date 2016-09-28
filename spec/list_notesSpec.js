// beforeEach(function(){
//   var list = new List();
// });

describe('Testing list class', function(){
  it('should be empty initially', function(){
    var list = new List();
    expect(list.notes.length).toEqual(0);
  });
  it('#save should add note to list', function(){
    var list = new List();
    var note = new Note("text");
    list.save(note);
    expect(list.notes[0]).toEqual(note);
  });
});
