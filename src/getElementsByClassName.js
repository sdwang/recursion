// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var result = [];
  var i;
  var elements = document.body.childNodes;

  for (i = 0; i < elements.length; i++) {
    if (elements[i].classList !== undefined && elements[i].classList.contains(className)) {
      result.push(document.body.childNodes[i]);
    }
  }
  //parse through every element in document.body.childNodes
  //parse through every childNode in the children of <body>
  //return an array of elements that match className
  return result;
};



