(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
  'use strict';
  
  var _react = require('react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = require('react-dom');
  
  var _reactDom2 = _interopRequireDefault(_reactDom);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // Write code here:
  _reactDom2.default.render(_react2.default.createElement(
    'h1',
    null,
    'Render me!'
  ), document.getElementById("app"));
  
  },{"react":undefined,"react-dom":undefined}]},{},[1]);
  