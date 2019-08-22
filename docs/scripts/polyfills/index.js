import 'core-js/es6';

// fuck IE
if (typeof NodeList.prototype.forEach !== typeof alert) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// for IE9-
import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';
import './rAF';
