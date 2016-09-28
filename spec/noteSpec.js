describe("Note class ", function(){
  it("should contain note text", function(){
    var note = new Note("test");
    expect(note.text).toEqual("test");
  });
  it("should return the note if #show is called", function(){
    var note = new Note("test");
    expect(note.show()).toEqual(note);
  });
});
