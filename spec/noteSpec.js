beforeEach(function(){
  note = new Note("test");
});

describe("Note class ", function(){
  it("should contain note text", function(){
    expect(note.text).toEqual("test");
  });
  it("should return the note if #show is called", function(){
    expect(note.show()).toEqual(note);
  });
});
