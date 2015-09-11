// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  return getElementsHelper(className, document);
};


var getElementsHelper = function (className, element) {
  var matches = [];
  //Checks to see if the current element matches the className
  if (element.classList !== undefined && element.classList.contains(className)) {
    matches = matches.concat(element);
  }
  //Checks to see if current element has children
  if (element.childNodes.length !== 0) {
    var i;
    //Runs getElementsHelper on every child node
    for (i = 0; i < element.childNodes.length; i++) {
      matches = matches.concat(getElementsHelper(className, element.childNodes[i]));
    }
  }
  return matches;
};
