// fuck IE
if (typeof(NodeList.prototype.forEach) !== typeof(alert)) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

import 'core-js/shim'; // for IE
// import 'classlist.js'; // for IE9-
// import 'selectivizr'; // for IE9-
// import './rAF'; // for IE9-
