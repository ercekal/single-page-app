

// describe("note", function(){
//
//
//   it("should contain note text", function(){
//     var note = new Note("test");
//     assert.toEqual(note.text,"test");
//   });
// });
console.log( new TestObject("actual"));
var note = new Note("test");
expect(note.text).toEqual("test");
