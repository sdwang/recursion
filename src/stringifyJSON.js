// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // Doesn't stringify functions or undefined
  if(obj === null) {
    return "null";
  } else if(obj === undefined){
    return undefined;
  } else if(typeof obj === "boolean" || typeof obj === "number") {
    return obj.toString();
  } else if(typeof obj === "string") {
    return '"' + obj + '"';
  } else if(Array.isArray(obj)) {
    if(obj[0] !== undefined) {
      return '[' + stringifyJSON(obj[0]) + ',' + stringifyJSON(obj.slice(1,obj.length)) + ']';
    }
  }
};
