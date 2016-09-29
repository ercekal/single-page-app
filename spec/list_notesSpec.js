beforeEach(function(){
  list = new List();
});

describe('Testing list class', function(){
  it('should be empty initially', function(){
    expect(list.notes.length).toEqual(0);
  });
  it('#save should add note to list', function(){
    var note = new Note("text");
    list.save(note);
    expect(list.notes[0]).toEqual(note);
  });
});
