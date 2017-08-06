(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Area;
function Area(props) {
  var text = props.text;
  return React.createElement(
    "div",
    { "class": "area" },
    text,
    React.createElement("br", null),
    React.createElement("textarea", { id: "area" + text, onChange: props.handleChange, maxLength: props.maxInp, value: props.val })
  );
}

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = forceShuffle;
function forceShuffle(props) {
  return React.createElement(
    "button",
    { onClick: props.handleClick },
    "Force Shuffle"
  );
}

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Area = require("./Area");

var _Area2 = _interopRequireDefault(_Area);

var _ForceShuffle = require("./ForceShuffle");

var _ForceShuffle2 = _interopRequireDefault(_ForceShuffle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React = React,
    Component = _React.Component;

var GUI = function (_Component) {
  _inherits(GUI, _Component);

  function GUI() {
    _classCallCheck(this, GUI);

    var _this = _possibleConstructorReturn(this, (GUI.__proto__ || Object.getPrototypeOf(GUI)).call(this));

    _this.state = {
      text: ""
    };
    return _this;
  }

  _createClass(GUI, [{
    key: "handleChange",
    value: function handleChange(value) {
      if (!value) return;
      this.setState({ text: GUI.wordShuffler(value) });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { id: "gui" },
        React.createElement(_Area2.default, { text: "Normal", handleChange: function handleChange(e) {
            return _this2.handleChange(e.target.value);
          } }),
        React.createElement(_Area2.default, { text: "Shuffled", maxInp: "0", val: this.state.text }),
        React.createElement(_ForceShuffle2.default, {
          handleClick: function handleClick() {
            return _this2.handleChange((document.getElementById("areaNormal") || {}).value);
          } })
      );
    }
  }], [{
    key: "wordShuffler",
    value: function wordShuffler(str) {
      if (!str) return "";
      var strArray = str.split(" ");
      var arr = [];
      while (strArray.length > 0) {
        arr.push(strArray.splice(Math.floor(Math.random() * strArray.length), 1)[0]);
      }
      return arr.join(" ");
    }
  }]);

  return GUI;
}(Component);

exports.default = GUI;

},{"./Area":1,"./ForceShuffle":2}],4:[function(require,module,exports){
"use strict";

var _GUI = require("./GUI");

var _GUI2 = _interopRequireDefault(_GUI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ReactDOM.render(React.createElement(_GUI2.default, null), document.getElementById("root"));

},{"./GUI":3}]},{},[4]);
