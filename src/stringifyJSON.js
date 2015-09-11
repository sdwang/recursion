// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  // Doesn't stringify functions or undefined
  if (obj === null) {
    return "null";
  } else if (obj === undefined || typeof obj === "function") {
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
      //Remove last comma
      if (i === obj.length - 1) {
        arrStr = arrStr.substring(0, arrStr.length - 1);
      }
    }
    return arrStr + ']';
  } else if (Object.keys(obj).length === 0) {
    return '{}';
  } else {
    var objStr = '{';
    var k;
    for (k in obj) {
      //Check to see if there are undefined or function key values
      if(obj[k] !== undefined && typeof obj[k] !== "function") {
        objStr = objStr + '"' + k.toString() + '":' + stringifyJSON(obj[k]) + ',';
      }
    }
    //Remove last comma with substring if objStr is not empty
    if(objStr[objStr.length - 1] === ',') {
      return objStr.substring(0, objStr.length - 1) + '}';
    } else {
      return objStr + '}';
    }
  }
};
