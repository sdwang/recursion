// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  // Doesn't stringify functions or undefined
  if (obj === null) {
    return "null";
  } else if (obj === undefined) {
    return undefined;
  } else if (typeof obj === "boolean" || typeof obj === "number") {
    return obj.toString();
  } else if (typeof obj === "string") {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    var arrStr = '[';
    var i;
    for (i = 0; i < obj.length; i++) {
      arrStr = arrStr + stringifyJSON(obj[i]) + ',';
    }
    //Remove last comma with substring
    return arrStr.substring(0, arrStr.length - 1) + ']';
  } else {
    var objStr = '{';
    var k;
    for (k in obj) {
      objStr = objStr + '"' + k.toString() + '":' + stringifyJSON(obj[k]) + ',';
    }
    //Remove last comma with substring
    return objStr.substring(0, objStr.length - 1) + '}';
  }
};
