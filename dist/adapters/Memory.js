'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Adapter2 = require('./Adapter');

var _Adapter3 = _interopRequireDefault(_Adapter2);

var _lodashObjectGet = require('lodash/object/get');

var _lodashObjectGet2 = _interopRequireDefault(_lodashObjectGet);

var _lodashObjectSet = require('lodash/object/set');

var _lodashObjectSet2 = _interopRequireDefault(_lodashObjectSet);

var defaultOptions = {
  data: {}
};

var Memory = (function (_Adapter) {
  _inherits(Memory, _Adapter);

  function Memory() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Memory);

    _get(Object.getPrototypeOf(Memory.prototype), 'constructor', this).call(this, _extends({}, defaultOptions, options));

    this._data = this._options.data || {};
  }

  _createClass(Memory, [{
    key: 'getData',
    value: function getData() {
      return _extends({}, this._data);
    }
  }, {
    key: 'getPath',
    value: function getPath(locale, namespace) {
      return namespace ? namespace + '.' + locale : locale;
    }
  }, {
    key: 'get',
    value: function get(locale, namespace, callback) {
      if (typeof namespace === 'function') {
        return this.get(locale, void 0, namespace);
      }

      if (!locale) {
        return callback(new Error('Locale is undefined'));
      }

      var path = this.getPath(locale, namespace);

      callback(null, (0, _lodashObjectGet2['default'])(this._data, path));
    }
  }, {
    key: 'set',
    value: function set(locale, value, namespace, callback) {
      if (typeof namespace === 'function') {
        return this.set(locale, value, void 0, namespace);
      }

      if (!locale) {
        return callback(new Error('Locale is undefined'));
      }

      var path = this.getPath(locale, namespace);

      (0, _lodashObjectSet2['default'])(this._data, path, value);

      callback(null);
    }
  }]);

  return Memory;
})(_Adapter3['default']);

exports['default'] = Memory;
module.exports = exports['default'];