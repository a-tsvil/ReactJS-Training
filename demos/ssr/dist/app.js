/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactDom = __webpack_require__(1);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _AppRoutes = __webpack_require__(2);
	
	var _AppRoutes2 = _interopRequireDefault(_AppRoutes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_reactDom2.default.render(React.createElement(_AppRoutes2.default, null), document.querySelector('#root'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	var _routes = __webpack_require__(5);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AppRoutes = function (_React$Component) {
	  _inherits(AppRoutes, _React$Component);
	
	  function AppRoutes() {
	    _classCallCheck(this, AppRoutes);
	
	    return _possibleConstructorReturn(this, (AppRoutes.__proto__ || Object.getPrototypeOf(AppRoutes)).apply(this, arguments));
	  }
	
	  _createClass(AppRoutes, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: _routes2.default, onUpdate: function onUpdate() {
	          return window.scrollTo(0, 0);
	        } });
	    }
	  }]);
	
	  return AppRoutes;
	}(_react2.default.Component);
	
	exports.default = AppRoutes;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = ReactRouter;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	var _Application = __webpack_require__(6);
	
	var _Application2 = _interopRequireDefault(_Application);
	
	var _Component = __webpack_require__(7);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Component3 = __webpack_require__(8);
	
	var _Component4 = _interopRequireDefault(_Component3);
	
	var _Component5 = __webpack_require__(9);
	
	var _Component6 = _interopRequireDefault(_Component5);
	
	var _SubComponent = __webpack_require__(10);
	
	var _SubComponent2 = _interopRequireDefault(_SubComponent);
	
	var _ComponentNotFound = __webpack_require__(11);
	
	var _ComponentNotFound2 = _interopRequireDefault(_ComponentNotFound);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var routes = _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _Application2.default },
	    _react2.default.createElement(_reactRouter.Route, { path: 'comp1', component: _Component2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: 'comp2', component: _Component4.default }),
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: 'comp3', component: _Component6.default },
	        _react2.default.createElement(_reactRouter.Route, { path: '/subcomp/:someId', component: _SubComponent2.default })
	    ),
	    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _ComponentNotFound2.default })
	);
	
	exports.default = routes;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Component1 = function (_Component) {
	    _inherits(Component1, _Component);
	
	    function Component1() {
	        _classCallCheck(this, Component1);
	
	        return _possibleConstructorReturn(this, (Component1.__proto__ || Object.getPrototypeOf(Component1)).apply(this, arguments));
	    }
	
	    _createClass(Component1, [{
	        key: 'render',
	        value: function render() {
	            var routes = _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Application Root Component'
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    _react2.default.createElement(
	                        _reactRouter.Link,
	                        { to: '/comp1' },
	                        'Comp 1'
	                    )
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    _react2.default.createElement(
	                        _reactRouter.Link,
	                        { to: '/comp2' },
	                        'Comp 2'
	                    )
	                ),
	                _react2.default.createElement(
	                    'p',
	                    null,
	                    _react2.default.createElement(
	                        _reactRouter.Link,
	                        { to: '/comp3' },
	                        'Comp 3'
	                    )
	                )
	            );
	
	            return _react2.default.createElement(
	                'div',
	                null,
	                this.props.children ? this.props.children : routes
	            );
	        }
	    }]);
	
	    return Component1;
	}(_react.Component);
	
	exports.default = Component1;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Component1 = function (_Component) {
	    _inherits(Component1, _Component);
	
	    function Component1() {
	        _classCallCheck(this, Component1);
	
	        return _possibleConstructorReturn(this, (Component1.__proto__ || Object.getPrototypeOf(Component1)).apply(this, arguments));
	    }
	
	    _createClass(Component1, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'h2',
	                null,
	                'Component 1'
	            );
	        }
	    }]);
	
	    return Component1;
	}(_react.Component);
	
	exports.default = Component1;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Component2 = function (_Component) {
	    _inherits(Component2, _Component);
	
	    function Component2() {
	        _classCallCheck(this, Component2);
	
	        return _possibleConstructorReturn(this, (Component2.__proto__ || Object.getPrototypeOf(Component2)).apply(this, arguments));
	    }
	
	    _createClass(Component2, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'h2',
	                null,
	                'Component 2'
	            );
	        }
	    }]);
	
	    return Component2;
	}(_react.Component);
	
	exports.default = Component2;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Component3 = function (_Component) {
	    _inherits(Component3, _Component);
	
	    function Component3() {
	        _classCallCheck(this, Component3);
	
	        var _this = _possibleConstructorReturn(this, (Component3.__proto__ || Object.getPrototypeOf(Component3)).call(this));
	
	        _this.state = { someId: '' };
	        _this.handleSomeIdChange = _this.handleSomeIdChange.bind(_this);
	        return _this;
	    }
	
	    _createClass(Component3, [{
	        key: 'handleSomeIdChange',
	        value: function handleSomeIdChange(evt) {
	            this.setState({ someId: evt.target.value });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h2',
	                    null,
	                    'Component 3'
	                ),
	                _react2.default.createElement('input', { value: this.state.someId, onChange: this.handleSomeIdChange }),
	                this.state.someId != '' ? _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/subcomp/' + this.state.someId },
	                    'Sub Component'
	                ) : null,
	                this.props.children
	            );
	        }
	    }]);
	
	    return Component3;
	}(_react.Component);
	
	exports.default = Component3;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SubComponent = function (_Component) {
	    _inherits(SubComponent, _Component);
	
	    function SubComponent() {
	        _classCallCheck(this, SubComponent);
	
	        return _possibleConstructorReturn(this, (SubComponent.__proto__ || Object.getPrototypeOf(SubComponent)).apply(this, arguments));
	    }
	
	    _createClass(SubComponent, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h3',
	                    null,
	                    'Sub Component'
	                ),
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    'Id is: ',
	                    this.props.params.someId
	                ),
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/' },
	                    'To Root'
	                )
	            );
	        }
	    }]);
	
	    return SubComponent;
	}(_react.Component);
	
	exports.default = SubComponent;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ComponentNotFound = function (_Component) {
	    _inherits(ComponentNotFound, _Component);
	
	    function ComponentNotFound() {
	        _classCallCheck(this, ComponentNotFound);
	
	        return _possibleConstructorReturn(this, (ComponentNotFound.__proto__ || Object.getPrototypeOf(ComponentNotFound)).apply(this, arguments));
	    }
	
	    _createClass(ComponentNotFound, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'h2',
	                null,
	                'NOT FOUND! 404'
	            );
	        }
	    }]);
	
	    return ComponentNotFound;
	}(_react.Component);
	
	exports.default = ComponentNotFound;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjFlZTQ2NjI0Y2FjMmM2MTNhNWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0FwcFJvdXRlcy5qc3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFJvdXRlclwiIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMuanN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0FwcGxpY2F0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db21wb25lbnQxLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db21wb25lbnQyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db21wb25lbnQzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TdWJDb21wb25lbnQvU3ViQ29tcG9uZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db21wb25lbnROb3RGb3VuZC5qc3giXSwibmFtZXMiOlsicmVuZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiQXBwUm91dGVzIiwid2luZG93Iiwic2Nyb2xsVG8iLCJDb21wb25lbnQiLCJyb3V0ZXMiLCJDb21wb25lbnQxIiwicHJvcHMiLCJjaGlsZHJlbiIsIkNvbXBvbmVudDIiLCJDb21wb25lbnQzIiwic3RhdGUiLCJzb21lSWQiLCJoYW5kbGVTb21lSWRDaGFuZ2UiLCJiaW5kIiwiZXZ0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlN1YkNvbXBvbmVudCIsInBhcmFtcyIsIkNvbXBvbmVudE5vdEZvdW5kIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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O0FBQUEsa0JBREo7QUFFSSwwREFBTyxPQUFPLEtBQUtQLEtBQUwsQ0FBV0MsTUFBekIsRUFBaUMsVUFBVSxLQUFLQyxrQkFBaEQsR0FGSjtBQUlRLHNCQUFLRixLQUFMLENBQVdDLE1BQVgsSUFBcUIsRUFBckIsR0FDTTtBQUFBO0FBQUEsdUJBQU0sa0JBQWdCLEtBQUtELEtBQUwsQ0FBV0MsTUFBakM7QUFBQTtBQUFBLGtCQUROLEdBRU0sSUFOZDtBQVFLLHNCQUFLTCxLQUFMLENBQVdDO0FBUmhCLGNBREo7QUFZSDs7Ozs7O21CQXhCZ0JFLFU7Ozs7Ozs7Ozs7Ozs7O0FDSHJCOzs7O0FBQ0E7Ozs7Ozs7Ozs7S0FFcUJTLFk7Ozs7Ozs7Ozs7O2tDQUNSO0FBQ0wsb0JBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQWMsMEJBQUtaLEtBQUwsQ0FBV2EsTUFBWCxDQUFrQlI7QUFBaEMsa0JBRko7QUFHSTtBQUFBO0FBQUEsdUJBQU0sSUFBSSxHQUFWO0FBQUE7QUFBQTtBQUhKLGNBREo7QUFPSDs7Ozs7O21CQVRnQk8sWTs7Ozs7Ozs7Ozs7Ozs7QUNIckI7Ozs7Ozs7Ozs7OztLQUVxQkUsaUI7Ozs7Ozs7Ozs7O2tDQUNSO0FBQ0wsb0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBR0g7Ozs7OzttQkFMZ0JBLGlCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYjFlZTQ2NjI0Y2FjMmM2MTNhNWFcbiAqKi8iLCJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IEFwcFJvdXRlcyBmcm9tICcuL0NvbXBvbmVudHMvQXBwUm91dGVzJztcclxuXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwUm91dGVzIC8+LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3RET01cIlxuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlciwgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4uL3JvdXRlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBSb3V0ZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9IHJvdXRlcz17cm91dGVzfSBvblVwZGF0ZT17KCkgPT4gd2luZG93LnNjcm9sbFRvKDAsIDApfS8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9Db21wb25lbnRzL0FwcFJvdXRlcy5qc3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJSZWFjdFwiXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdFJvdXRlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiUmVhY3RSb3V0ZXJcIlxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmltcG9ydCBBcHBsaWNhdGlvbiBmcm9tICcuL0NvbXBvbmVudHMvQXBwbGljYXRpb24nO1xyXG5pbXBvcnQgQ29tcG9uZW50MSBmcm9tICcuL0NvbXBvbmVudHMvQ29tcG9uZW50MSc7XHJcbmltcG9ydCBDb21wb25lbnQyIGZyb20gJy4vQ29tcG9uZW50cy9Db21wb25lbnQyJztcclxuaW1wb3J0IENvbXBvbmVudDMgZnJvbSAnLi9Db21wb25lbnRzL0NvbXBvbmVudDMnO1xyXG5pbXBvcnQgU3ViQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50cy9TdWJDb21wb25lbnQvU3ViQ29tcG9uZW50JztcclxuaW1wb3J0IENvbXBvbmVudE5vdEZvdW5kIGZyb20gJy4vQ29tcG9uZW50cy9Db21wb25lbnROb3RGb3VuZCc7XHJcblxyXG5jb25zdCByb3V0ZXMgPSAoXHJcbiAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcGxpY2F0aW9ufT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cImNvbXAxXCIgY29tcG9uZW50PXtDb21wb25lbnQxfSAvPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiY29tcDJcIiBjb21wb25lbnQ9e0NvbXBvbmVudDJ9IC8+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCJjb21wM1wiIGNvbXBvbmVudD17Q29tcG9uZW50M30+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3N1YmNvbXAvOnNvbWVJZFwiIGNvbXBvbmVudD17U3ViQ29tcG9uZW50fSAvPlxyXG4gICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgY29tcG9uZW50PXtDb21wb25lbnROb3RGb3VuZH0gLz5cclxuICAgIDwvUm91dGU+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvdXRlcy5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudDEgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciByb3V0ZXMgPSAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5BcHBsaWNhdGlvbiBSb290IENvbXBvbmVudDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cD48TGluayB0bz17Jy9jb21wMSd9PkNvbXAgMTwvTGluaz48L3A+XHJcbiAgICAgICAgICAgICAgICA8cD48TGluayB0bz17Jy9jb21wMid9PkNvbXAgMjwvTGluaz48L3A+XHJcbiAgICAgICAgICAgICAgICA8cD48TGluayB0bz17Jy9jb21wMyd9PkNvbXAgMzwvTGluaz48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuIFxyXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5jaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgICAgIDogcm91dGVzfSBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvQ29tcG9uZW50cy9BcHBsaWNhdGlvbi5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50MSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGgyPkNvbXBvbmVudCAxPC9oMj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9Db21wb25lbnRzL0NvbXBvbmVudDEuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudDIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxoMj5Db21wb25lbnQgMjwvaDI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvQ29tcG9uZW50cy9Db21wb25lbnQyLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50MyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgc29tZUlkOiAnJyB9O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU29tZUlkQ2hhbmdlID0gdGhpcy5oYW5kbGVTb21lSWRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTb21lSWRDaGFuZ2UoZXZ0KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNvbWVJZDogZXZ0LnRhcmdldC52YWx1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMj5Db21wb25lbnQgMzwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUuc29tZUlkfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVTb21lSWRDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zb21lSWQgIT0gJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8TGluayB0bz17YC9zdWJjb21wLyR7dGhpcy5zdGF0ZS5zb21lSWR9YH0+U3ViIENvbXBvbmVudDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvQ29tcG9uZW50cy9Db21wb25lbnQzLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzPlN1YiBDb21wb25lbnQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+SWQgaXM6IHt0aGlzLnByb3BzLnBhcmFtcy5zb21lSWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89eycvJ30+VG8gUm9vdDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvQ29tcG9uZW50cy9TdWJDb21wb25lbnQvU3ViQ29tcG9uZW50LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnROb3RGb3VuZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGgyPk5PVCBGT1VORCEgNDA0PC9oMj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0NvbXBvbmVudHMvQ29tcG9uZW50Tm90Rm91bmQuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==