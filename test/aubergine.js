var assert = {
 toEqual: function(actual, expectation) {
   if(actual != expectation) {
     throw new Error("Expected " + actual + " to equal " + expectation);
   } else {
     console.log(actual + " is equal to " + expectation);
   }
 }
};

module.exports = assert;
