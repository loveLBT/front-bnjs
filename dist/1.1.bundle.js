webpackJsonp([1],{

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(201);

	var _Auth = __webpack_require__(262);

	var _Auth2 = _interopRequireDefault(_Auth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Logout = _react2.default.createClass({
	  displayName: 'Logout',
	  componentDidMount: function componentDidMount() {
	    var location = this.props.location;

	    _Auth2.default.logout();
	    this.props.router.replace('/login');
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'p',
	      null,
	      'You are now logged out'
	    );
	  }
	});

	module.exports = (0, _reactRouter.withRouter)(Logout);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Logout.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }

});