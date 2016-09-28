function expect(actual){
  return new TestObject(actual);
}

var TestObject = function TestObject(actual){
  this.actual = actual;
};

TestObject.prototype =  {
  toEqual: function(expectation) {
    if(this.actual != expectation) {
      throw new Error("Expected " + this.actual + " to equal " + expectation);
    } else {
      console.log("passed:" + this.actual + " is equal to " + expectation);
    }
  }
};


function it(string, callback){
  console.log(string);
  callback();
}
function describe(string, callback){
  console.log(string);
  callback();
}
