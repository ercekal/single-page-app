function expect(actual){
  return new TestObject(actual);
}

var TestObject = function TestObject(actual){
  this.actual = actual;
};

TestObject.prototype =  {
  toEqual: function(expectation) {
    if(this.actual !== expectation) {
      throw new Error("Expected " + this.actual + " to equal " + expectation);
    } else {
      console.log("      Passed:" + this.actual + " is equal to " + expectation);
    }
  },
  toContain: function(expectation){
    if(this.actual.indexOf(expectation) !== -1) {
      throw new Error("Expected " + this.actual + " to include " + expectation);
    } else {
      console.log("      Passed:" + this.actual + " includes " + expectation);
    }
  }
};


function it(string, callback){
  console.log("  " + string);
  callback();
}
function describe(string, callback){
  console.log(string);
  callback();
}

// var beforeEach = function(callback){
//   this.callback = callback;
// };
//
// // beforeEach.prototype = {
// //   run: function(){
// //     return this.callback;
// //   }
// // };
