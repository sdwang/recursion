// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName2 = function (className) {
  debugger
  var result = [];
  var i;
  var elements = document.body.childNodes;


  for (i = 0; i < elements.length; i++) {
    if (elements[i].classList !== undefined && elements[i].classList.contains(className)) {
      result.push(elements[i]);
    }
  }
  //parse through every element in document.body.childNodes
  //parse through every childNode in the children of <body>
  //return an array of elements that match className
  return result;
};


var getElementsHelper = function (className, element) {
  debugger
  var matches = [];
  if (element.classList !== undefined && element.classList.contains(className)) {
    matches = matches.concat(element);
  }
  if (element.childNodes.length !== 0) {
    var i;
    for (i = 0; i < element.childNodes.length; i++) {
      matches = matches.concat(getElementsHelper(className, element.childNodes[i]));
    }
  }
  return matches;
};

var getElementsByClassName = function (className) {




}
