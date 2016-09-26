// var assert = {
//   isTrue: function(assertionToCheck) {
//     if (!assertionToCheck) {
//       throw new Error("Assertion failed: " + assertionToCheck + "is not truthy");
//     }
//   };
// };

function test(then, expected) {
       results.total++;
       var result = prettyDate("2008-01-28T22:25:00Z", then);
       if (result !== expected) {
           results.bad++;
           console.log("Expected " + expected + ", but was " + result);
       }
   }
   var results = {
       total: 0,
       bad: 0
   };

function toEqual(fn, expected) {
  results.total++;
  var result = fn();
  if( result !== expected) {
    results.bad++;
    console.log("Expected " + expected + ", but was " + result);
  }
}

var results = {
    total: 0,
    bad: 0
};

console.log("Of " + results.total + " tests, " + results.bad + " failed, " + (results.total - results.bad) + " passed.");
