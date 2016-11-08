webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(172);

	var _store = __webpack_require__(195);

	var _store2 = _interopRequireDefault(_store);

	var _routes = __webpack_require__(200);

	var _routes2 = _interopRequireDefault(_routes);

	__webpack_require__(361);

	__webpack_require__(363);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _store2.default)();
	var rootElement = document.getElementById('app');

	_reactDom2.default.render(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_routes2.default
	), rootElement);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "main.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _redux = __webpack_require__(179);

	var _reduxThunk = __webpack_require__(196);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reducers = __webpack_require__(197);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var composedCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default))(_redux.createStore);

	function configureStore() {
		var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		var store = composedCreateStore(_reducers2.default, initialState);

		return store;
	}

	exports.default = configureStore;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 196:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	function createThunkMiddleware(extraArgument) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch;
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        if (typeof action === 'function') {
	          return action(dispatch, getState, extraArgument);
	        }

	        return next(action);
	      };
	    };
	  };
	}

	var thunk = createThunkMiddleware();
	thunk.withExtraArgument = createThunkMiddleware;

	exports['default'] = thunk;

/***/ },

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _redux = __webpack_require__(179);

	var _posts = __webpack_require__(198);

	var _posts2 = _interopRequireDefault(_posts);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reducers = {
		posts: _posts2.default
	};

	var rootReducer = (0, _redux.combineReducers)(_extends({}, reducers));

	exports.default = rootReducer;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _ActionTypes = __webpack_require__(199);

	var types = _interopRequireWildcard(_ActionTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var initialState = {
		isFetching: false
	};

	var posts = function posts() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
		var action = arguments[1];

		switch (action.type) {
			case types.REQUEST_POSTS:
				return _extends({}, state, {
					isFetching: true
				});
			case types.RECEIVE_POSTS:
				return _extends({}, state, _defineProperty({
					isFetching: false
				}, action.postsTitle, action.posts));
			default:
				return state;
		}
	};
	exports.default = posts;
	module.exports = exports["default"];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "posts.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var REQUEST_POSTS = exports.REQUEST_POSTS = 'REQUEST_POSTS';
	var RECEIVE_POSTS = exports.RECEIVE_POSTS = 'RECEIVE_POSTS';

	var INCREMENT = exports.INCREMENT = 'INCREMENT';
	var DECREMENT = exports.DECREMENT = 'DECREMENT';

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ActionTypes.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
			value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(201);

	var _Auth = __webpack_require__(262);

	var _Auth2 = _interopRequireDefault(_Auth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function redirectToLogin(nextState, replace) {
			if (!_Auth2.default.loggedIn()) {
					replace({
							pathname: '/login',
							state: { nextPathname: nextState.location.pathname }
					});
			}
	}

	function redirectToDashboard(nextState, replace) {
			if (_Auth2.default.loggedIn()) {
					replace('/');
			}
	}

	var rootRoute = {
			component: __webpack_require__(267),
			childRoutes: [{ path: '/logout',
					getComponent: function getComponent(nextState, cb) {
							__webpack_require__.e/* nsure */(1, function (require) {
									cb(null, __webpack_require__(269));
							});
					}
			}, { /*onEnter: redirectToDashboard,*/
					childRoutes: [{ path: '/login',
							getComponent: function getComponent(nextState, cb) {
									__webpack_require__.e/* nsure */(2, function (require) {
											cb(null, __webpack_require__(270));
									});
							}
					}]
			}, { /*onEnter: redirectToDashboard,*/
					childRoutes: [{ path: '/register',
							getComponent: function getComponent(nextState, cb) {
									__webpack_require__.e/* nsure */(3, function (require) {
											cb(null, __webpack_require__(338));
									});
							}
					}]
			}, { onEnter: redirectToLogin,
					childRoutes: [{ path: '/myaddress',
							getComponent: function getComponent(nextState, cb) {
									__webpack_require__.e/* nsure */(4, function (require) {
											cb(null, __webpack_require__(340));
									});
							}
					}]
			}, { onEnter: redirectToLogin,
					childRoutes: [{ path: '/realname',
							getComponent: function getComponent(nextState, cb) {
									__webpack_require__.e/* nsure */(5, function (require) {
											cb(null, __webpack_require__(341));
									});
							}
					}]
			}, { onEnter: redirectToLogin,
					childRoutes: [{ path: '/editpwd',
							getComponent: function getComponent(nextState, cb) {
									__webpack_require__.e/* nsure */(6, function (require) {
											cb(null, __webpack_require__(342));
									});
							}
					}]
			}, { onEnter: redirectToLogin,
					childRoutes: [{ path: '/empower',
							getComponent: function getComponent(nextState, cb) {
									__webpack_require__.e/* nsure */(7, function (require) {
											cb(null, __webpack_require__(343));
									});
							}
					}]
			}, { onEnter: redirectToLogin,
					path: '/',
					getComponent: function getComponent(nextState, cb) {
							return __webpack_require__.e/* nsure */(8, function (require) {
									cb(null, __webpack_require__(344));
							});
					},
					indexRoute: {
							getComponent: function getComponent(nextState, cb) {
									return __webpack_require__.e/* nsure */(9, function (require) {
											cb(null, __webpack_require__(345));
									});
							}
					},
					childRoutes: [{ onEnter: redirectToLogin,
							childRoutes: [{ path: '/myorder',
									getComponent: function getComponent(nextState, cb) {
											__webpack_require__.e/* nsure */(10, function (require) {
													cb(null, __webpack_require__(346));
											});
									}
							}, { path: '/userorder',
									getComponent: function getComponent(nextState, cb) {
											__webpack_require__.e/* nsure */(11, function (require) {
													cb(null, __webpack_require__(347));
											});
									}
							}, { path: '/buyproduct',
									getComponent: function getComponent(nextState, cb) {
											__webpack_require__.e/* nsure */(12, function (require) {
													cb(null, __webpack_require__(348));
											});
									}
							}, { path: '/myorder/:id',
									getComponent: function getComponent(nextState, cb) {
											__webpack_require__.e/* nsure */(13, function (require) {
													cb(null, __webpack_require__(349));
											});
									}
							}, { path: '/userorder/:id',
									getComponent: function getComponent(nextState, cb) {
											__webpack_require__.e/* nsure */(14, function (require) {
													cb(null, __webpack_require__(350));
											});
									}
							}, { path: '/personal',
									getComponent: function getComponent(nextState, cb) {
											__webpack_require__.e/* nsure */(15, function (require) {
													cb(null, __webpack_require__(351));
											});
									}
							}, { path: '/apply',
									getComponent: function getComponent(nextState, cb) {
											__webpack_require__.e/* nsure */(16, function (require) {
													cb(null, __webpack_require__(352));
											});
									}
							}, { path: '/apply/:id',
									getComponent: function getComponent(nextState, cb) {
											__webpack_require__.e/* nsure */(17, function (require) {
													cb(null, __webpack_require__(353));
											});
									}
							}, { path: '/upapply/:id',
									getComponent: function getComponent(nextState, cb) {
											__webpack_require__.e/* nsure */(18, function (require) {
													cb(null, __webpack_require__(354));
											});
									}
							}, { path: '/myaddress',
									getComponent: function getComponent(nextState, cb) {
											__webpack_require__.e/* nsure */(4/* duplicate */, function (require) {
													cb(null, __webpack_require__(340));
											});
									}
							}, { path: '/myretail',
									getComponent: function getComponent(nextState, cb) {
											__webpack_require__.e/* nsure */(19, function (require) {
													cb(null, __webpack_require__(355));
											});
									}
							}, { path: '/upgrade',
									getComponent: function getComponent(nextState, cb) {
											__webpack_require__.e/* nsure */(20, function (require) {
													cb(null, __webpack_require__(356));
											});
									}
							}, { path: '/myaccount',
									getComponent: function getComponent(nextState, cb) {
											__webpack_require__.e/* nsure */(21, function (require) {
													cb(null, __webpack_require__(357));
											});
									}
							}, { path: '/mytea',
									getComponent: function getComponent(nextState, cb) {
											__webpack_require__.e/* nsure */(22, function (require) {
													cb(null, __webpack_require__(358));
											});
									}
							}, { path: '/retailproduct',
									getComponent: function getComponent(nextState, cb) {
											__webpack_require__.e/* nsure */(23, function (require) {
													cb(null, __webpack_require__(359));
											});
									}
							}, { path: '/backproduct',
									getComponent: function getComponent(nextState, cb) {
											__webpack_require__.e/* nsure */(24, function (require) {
													cb(null, __webpack_require__(360));
											});
									}
							}]
					}]
			}]
	};

	var routes = _react2.default.createElement(_reactRouter.Router, {
			history: _reactRouter.browserHistory,
			routes: rootRoute
	});

	exports.default = routes;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _es6Promise = __webpack_require__(263);

	var _isomorphicFetch = __webpack_require__(265);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  login: function login(loginUrl, cb) {
	    var _this = this;

	    cb = arguments[arguments.length - 1];
	    if (sessionStorage.token) {
	      if (cb) cb({ loggedIn: true });
	      this.onChange(true);
	      return;
	    }
	    pretendRequest(loginUrl, function (res) {
	      if (res.authenticated) {
	        sessionStorage.token = res.token;
	        sessionStorage.setItem("userData", JSON.stringify(res.userData));
	        if (cb) cb({ loggedIn: true });
	        _this.onChange(true);
	      } else {
	        if (cb) cb({ loggedIn: false, errormsg: res.errormsg });
	        _this.onChange(false);
	      }
	    });
	  },


	  getToken: function getToken() {
	    return sessionStorage.token;
	  },

	  getUserData: function getUserData() {
	    return JSON.parse(sessionStorage.getItem("userData"));
	  },

	  logout: function logout(cb) {
	    delete sessionStorage.token;
	    delete sessionStorage.userData;
	    if (cb) cb();
	    this.onChange(false);
	  },

	  loggedIn: function loggedIn() {
	    return !!sessionStorage.token;
	  },

	  onChange: function onChange() {}
	};

	function pretendRequest(loginUrl, cb) {
	  setTimeout(function () {
	    (0, _isomorphicFetch2.default)(loginUrl).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.result.status === "success") {
	        cb({
	          authenticated: true,
	          token: Math.random().toString(36).substring(7),
	          userData: json.result.result
	        });
	      } else {
	        cb({ authenticated: false, errormsg: json.result.result.message });
	      }
	    });
	  }, 2000);
	}

	/*credentials: 'include'*/

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Auth.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	var require;/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.0.5
	 */

	(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.ES6Promise = factory());
	}(this, (function () { 'use strict';

	function objectOrFunction(x) {
	  return typeof x === 'function' || typeof x === 'object' && x !== null;
	}

	function isFunction(x) {
	  return typeof x === 'function';
	}

	var _isArray = undefined;
	if (!Array.isArray) {
	  _isArray = function (x) {
	    return Object.prototype.toString.call(x) === '[object Array]';
	  };
	} else {
	  _isArray = Array.isArray;
	}

	var isArray = _isArray;

	var len = 0;
	var vertxNext = undefined;
	var customSchedulerFn = undefined;

	var asap = function asap(callback, arg) {
	  queue[len] = callback;
	  queue[len + 1] = arg;
	  len += 2;
	  if (len === 2) {
	    // If len is 2, that means that we need to schedule an async flush.
	    // If additional callbacks are queued before the queue is flushed, they
	    // will be processed by this flush that we are scheduling.
	    if (customSchedulerFn) {
	      customSchedulerFn(flush);
	    } else {
	      scheduleFlush();
	    }
	  }
	};

	function setScheduler(scheduleFn) {
	  customSchedulerFn = scheduleFn;
	}

	function setAsap(asapFn) {
	  asap = asapFn;
	}

	var browserWindow = typeof window !== 'undefined' ? window : undefined;
	var browserGlobal = browserWindow || {};
	var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

	// test for web worker but not in IE10
	var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

	// node
	function useNextTick() {
	  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	  // see https://github.com/cujojs/when/issues/410 for details
	  return function () {
	    return process.nextTick(flush);
	  };
	}

	// vertx
	function useVertxTimer() {
	  if (typeof vertxNext !== 'undefined') {
	    return function () {
	      vertxNext(flush);
	    };
	  }

	  return useSetTimeout();
	}

	function useMutationObserver() {
	  var iterations = 0;
	  var observer = new BrowserMutationObserver(flush);
	  var node = document.createTextNode('');
	  observer.observe(node, { characterData: true });

	  return function () {
	    node.data = iterations = ++iterations % 2;
	  };
	}

	// web worker
	function useMessageChannel() {
	  var channel = new MessageChannel();
	  channel.port1.onmessage = flush;
	  return function () {
	    return channel.port2.postMessage(0);
	  };
	}

	function useSetTimeout() {
	  // Store setTimeout reference so es6-promise will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var globalSetTimeout = setTimeout;
	  return function () {
	    return globalSetTimeout(flush, 1);
	  };
	}

	var queue = new Array(1000);
	function flush() {
	  for (var i = 0; i < len; i += 2) {
	    var callback = queue[i];
	    var arg = queue[i + 1];

	    callback(arg);

	    queue[i] = undefined;
	    queue[i + 1] = undefined;
	  }

	  len = 0;
	}

	function attemptVertx() {
	  try {
	    var r = require;
	    var vertx = __webpack_require__(264);
	    vertxNext = vertx.runOnLoop || vertx.runOnContext;
	    return useVertxTimer();
	  } catch (e) {
	    return useSetTimeout();
	  }
	}

	var scheduleFlush = undefined;
	// Decide what async method to use to triggering processing of queued callbacks:
	if (isNode) {
	  scheduleFlush = useNextTick();
	} else if (BrowserMutationObserver) {
	  scheduleFlush = useMutationObserver();
	} else if (isWorker) {
	  scheduleFlush = useMessageChannel();
	} else if (browserWindow === undefined && "function" === 'function') {
	  scheduleFlush = attemptVertx();
	} else {
	  scheduleFlush = useSetTimeout();
	}

	function then(onFulfillment, onRejection) {
	  var _arguments = arguments;

	  var parent = this;

	  var child = new this.constructor(noop);

	  if (child[PROMISE_ID] === undefined) {
	    makePromise(child);
	  }

	  var _state = parent._state;

	  if (_state) {
	    (function () {
	      var callback = _arguments[_state - 1];
	      asap(function () {
	        return invokeCallback(_state, child, callback, parent._result);
	      });
	    })();
	  } else {
	    subscribe(parent, child, onFulfillment, onRejection);
	  }

	  return child;
	}

	/**
	  `Promise.resolve` returns a promise that will become resolved with the
	  passed `value`. It is shorthand for the following:

	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    resolve(1);
	  });

	  promise.then(function(value){
	    // value === 1
	  });
	  ```

	  Instead of writing the above, your code now simply becomes the following:

	  ```javascript
	  let promise = Promise.resolve(1);

	  promise.then(function(value){
	    // value === 1
	  });
	  ```

	  @method resolve
	  @static
	  @param {Any} value value that the returned promise will be resolved with
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	function resolve(object) {
	  /*jshint validthis:true */
	  var Constructor = this;

	  if (object && typeof object === 'object' && object.constructor === Constructor) {
	    return object;
	  }

	  var promise = new Constructor(noop);
	  _resolve(promise, object);
	  return promise;
	}

	var PROMISE_ID = Math.random().toString(36).substring(16);

	function noop() {}

	var PENDING = void 0;
	var FULFILLED = 1;
	var REJECTED = 2;

	var GET_THEN_ERROR = new ErrorObject();

	function selfFulfillment() {
	  return new TypeError("You cannot resolve a promise with itself");
	}

	function cannotReturnOwn() {
	  return new TypeError('A promises callback cannot return that same promise.');
	}

	function getThen(promise) {
	  try {
	    return promise.then;
	  } catch (error) {
	    GET_THEN_ERROR.error = error;
	    return GET_THEN_ERROR;
	  }
	}

	function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	  try {
	    then.call(value, fulfillmentHandler, rejectionHandler);
	  } catch (e) {
	    return e;
	  }
	}

	function handleForeignThenable(promise, thenable, then) {
	  asap(function (promise) {
	    var sealed = false;
	    var error = tryThen(then, thenable, function (value) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	      if (thenable !== value) {
	        _resolve(promise, value);
	      } else {
	        fulfill(promise, value);
	      }
	    }, function (reason) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;

	      _reject(promise, reason);
	    }, 'Settle: ' + (promise._label || ' unknown promise'));

	    if (!sealed && error) {
	      sealed = true;
	      _reject(promise, error);
	    }
	  }, promise);
	}

	function handleOwnThenable(promise, thenable) {
	  if (thenable._state === FULFILLED) {
	    fulfill(promise, thenable._result);
	  } else if (thenable._state === REJECTED) {
	    _reject(promise, thenable._result);
	  } else {
	    subscribe(thenable, undefined, function (value) {
	      return _resolve(promise, value);
	    }, function (reason) {
	      return _reject(promise, reason);
	    });
	  }
	}

	function handleMaybeThenable(promise, maybeThenable, then$$) {
	  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
	    handleOwnThenable(promise, maybeThenable);
	  } else {
	    if (then$$ === GET_THEN_ERROR) {
	      _reject(promise, GET_THEN_ERROR.error);
	    } else if (then$$ === undefined) {
	      fulfill(promise, maybeThenable);
	    } else if (isFunction(then$$)) {
	      handleForeignThenable(promise, maybeThenable, then$$);
	    } else {
	      fulfill(promise, maybeThenable);
	    }
	  }
	}

	function _resolve(promise, value) {
	  if (promise === value) {
	    _reject(promise, selfFulfillment());
	  } else if (objectOrFunction(value)) {
	    handleMaybeThenable(promise, value, getThen(value));
	  } else {
	    fulfill(promise, value);
	  }
	}

	function publishRejection(promise) {
	  if (promise._onerror) {
	    promise._onerror(promise._result);
	  }

	  publish(promise);
	}

	function fulfill(promise, value) {
	  if (promise._state !== PENDING) {
	    return;
	  }

	  promise._result = value;
	  promise._state = FULFILLED;

	  if (promise._subscribers.length !== 0) {
	    asap(publish, promise);
	  }
	}

	function _reject(promise, reason) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	  promise._state = REJECTED;
	  promise._result = reason;

	  asap(publishRejection, promise);
	}

	function subscribe(parent, child, onFulfillment, onRejection) {
	  var _subscribers = parent._subscribers;
	  var length = _subscribers.length;

	  parent._onerror = null;

	  _subscribers[length] = child;
	  _subscribers[length + FULFILLED] = onFulfillment;
	  _subscribers[length + REJECTED] = onRejection;

	  if (length === 0 && parent._state) {
	    asap(publish, parent);
	  }
	}

	function publish(promise) {
	  var subscribers = promise._subscribers;
	  var settled = promise._state;

	  if (subscribers.length === 0) {
	    return;
	  }

	  var child = undefined,
	      callback = undefined,
	      detail = promise._result;

	  for (var i = 0; i < subscribers.length; i += 3) {
	    child = subscribers[i];
	    callback = subscribers[i + settled];

	    if (child) {
	      invokeCallback(settled, child, callback, detail);
	    } else {
	      callback(detail);
	    }
	  }

	  promise._subscribers.length = 0;
	}

	function ErrorObject() {
	  this.error = null;
	}

	var TRY_CATCH_ERROR = new ErrorObject();

	function tryCatch(callback, detail) {
	  try {
	    return callback(detail);
	  } catch (e) {
	    TRY_CATCH_ERROR.error = e;
	    return TRY_CATCH_ERROR;
	  }
	}

	function invokeCallback(settled, promise, callback, detail) {
	  var hasCallback = isFunction(callback),
	      value = undefined,
	      error = undefined,
	      succeeded = undefined,
	      failed = undefined;

	  if (hasCallback) {
	    value = tryCatch(callback, detail);

	    if (value === TRY_CATCH_ERROR) {
	      failed = true;
	      error = value.error;
	      value = null;
	    } else {
	      succeeded = true;
	    }

	    if (promise === value) {
	      _reject(promise, cannotReturnOwn());
	      return;
	    }
	  } else {
	    value = detail;
	    succeeded = true;
	  }

	  if (promise._state !== PENDING) {
	    // noop
	  } else if (hasCallback && succeeded) {
	      _resolve(promise, value);
	    } else if (failed) {
	      _reject(promise, error);
	    } else if (settled === FULFILLED) {
	      fulfill(promise, value);
	    } else if (settled === REJECTED) {
	      _reject(promise, value);
	    }
	}

	function initializePromise(promise, resolver) {
	  try {
	    resolver(function resolvePromise(value) {
	      _resolve(promise, value);
	    }, function rejectPromise(reason) {
	      _reject(promise, reason);
	    });
	  } catch (e) {
	    _reject(promise, e);
	  }
	}

	var id = 0;
	function nextId() {
	  return id++;
	}

	function makePromise(promise) {
	  promise[PROMISE_ID] = id++;
	  promise._state = undefined;
	  promise._result = undefined;
	  promise._subscribers = [];
	}

	function Enumerator(Constructor, input) {
	  this._instanceConstructor = Constructor;
	  this.promise = new Constructor(noop);

	  if (!this.promise[PROMISE_ID]) {
	    makePromise(this.promise);
	  }

	  if (isArray(input)) {
	    this._input = input;
	    this.length = input.length;
	    this._remaining = input.length;

	    this._result = new Array(this.length);

	    if (this.length === 0) {
	      fulfill(this.promise, this._result);
	    } else {
	      this.length = this.length || 0;
	      this._enumerate();
	      if (this._remaining === 0) {
	        fulfill(this.promise, this._result);
	      }
	    }
	  } else {
	    _reject(this.promise, validationError());
	  }
	}

	function validationError() {
	  return new Error('Array Methods must be provided an Array');
	};

	Enumerator.prototype._enumerate = function () {
	  var length = this.length;
	  var _input = this._input;

	  for (var i = 0; this._state === PENDING && i < length; i++) {
	    this._eachEntry(_input[i], i);
	  }
	};

	Enumerator.prototype._eachEntry = function (entry, i) {
	  var c = this._instanceConstructor;
	  var resolve$$ = c.resolve;

	  if (resolve$$ === resolve) {
	    var _then = getThen(entry);

	    if (_then === then && entry._state !== PENDING) {
	      this._settledAt(entry._state, i, entry._result);
	    } else if (typeof _then !== 'function') {
	      this._remaining--;
	      this._result[i] = entry;
	    } else if (c === Promise) {
	      var promise = new c(noop);
	      handleMaybeThenable(promise, entry, _then);
	      this._willSettleAt(promise, i);
	    } else {
	      this._willSettleAt(new c(function (resolve$$) {
	        return resolve$$(entry);
	      }), i);
	    }
	  } else {
	    this._willSettleAt(resolve$$(entry), i);
	  }
	};

	Enumerator.prototype._settledAt = function (state, i, value) {
	  var promise = this.promise;

	  if (promise._state === PENDING) {
	    this._remaining--;

	    if (state === REJECTED) {
	      _reject(promise, value);
	    } else {
	      this._result[i] = value;
	    }
	  }

	  if (this._remaining === 0) {
	    fulfill(promise, this._result);
	  }
	};

	Enumerator.prototype._willSettleAt = function (promise, i) {
	  var enumerator = this;

	  subscribe(promise, undefined, function (value) {
	    return enumerator._settledAt(FULFILLED, i, value);
	  }, function (reason) {
	    return enumerator._settledAt(REJECTED, i, reason);
	  });
	};

	/**
	  `Promise.all` accepts an array of promises, and returns a new promise which
	  is fulfilled with an array of fulfillment values for the passed promises, or
	  rejected with the reason of the first passed promise to be rejected. It casts all
	  elements of the passed iterable to promises as it runs this algorithm.

	  Example:

	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = resolve(2);
	  let promise3 = resolve(3);
	  let promises = [ promise1, promise2, promise3 ];

	  Promise.all(promises).then(function(array){
	    // The array here would be [ 1, 2, 3 ];
	  });
	  ```

	  If any of the `promises` given to `all` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promises's
	  rejection handler. For example:

	  Example:

	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = reject(new Error("2"));
	  let promise3 = reject(new Error("3"));
	  let promises = [ promise1, promise2, promise3 ];

	  Promise.all(promises).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(error) {
	    // error.message === "2"
	  });
	  ```

	  @method all
	  @static
	  @param {Array} entries array of promises
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all `promises` have been
	  fulfilled, or rejected if any of them become rejected.
	  @static
	*/
	function all(entries) {
	  return new Enumerator(this, entries).promise;
	}

	/**
	  `Promise.race` returns a new promise which is settled in the same way as the
	  first passed promise to settle.

	  Example:

	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });

	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 2');
	    }, 100);
	  });

	  Promise.race([promise1, promise2]).then(function(result){
	    // result === 'promise 2' because it was resolved before promise1
	    // was resolved.
	  });
	  ```

	  `Promise.race` is deterministic in that only the state of the first
	  settled promise matters. For example, even if other promises given to the
	  `promises` array argument are resolved, but the first settled promise has
	  become rejected before the other promises became fulfilled, the returned
	  promise will become rejected:

	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });

	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      reject(new Error('promise 2'));
	    }, 100);
	  });

	  Promise.race([promise1, promise2]).then(function(result){
	    // Code here never runs
	  }, function(reason){
	    // reason.message === 'promise 2' because promise 2 became rejected before
	    // promise 1 became fulfilled
	  });
	  ```

	  An example real-world use case is implementing timeouts:

	  ```javascript
	  Promise.race([ajax('foo.json'), timeout(5000)])
	  ```

	  @method race
	  @static
	  @param {Array} promises array of promises to observe
	  Useful for tooling.
	  @return {Promise} a promise which settles in the same way as the first passed
	  promise to settle.
	*/
	function race(entries) {
	  /*jshint validthis:true */
	  var Constructor = this;

	  if (!isArray(entries)) {
	    return new Constructor(function (_, reject) {
	      return reject(new TypeError('You must pass an array to race.'));
	    });
	  } else {
	    return new Constructor(function (resolve, reject) {
	      var length = entries.length;
	      for (var i = 0; i < length; i++) {
	        Constructor.resolve(entries[i]).then(resolve, reject);
	      }
	    });
	  }
	}

	/**
	  `Promise.reject` returns a promise rejected with the passed `reason`.
	  It is shorthand for the following:

	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    reject(new Error('WHOOPS'));
	  });

	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```

	  Instead of writing the above, your code now simply becomes the following:

	  ```javascript
	  let promise = Promise.reject(new Error('WHOOPS'));

	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```

	  @method reject
	  @static
	  @param {Any} reason value that the returned promise will be rejected with.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	function reject(reason) {
	  /*jshint validthis:true */
	  var Constructor = this;
	  var promise = new Constructor(noop);
	  _reject(promise, reason);
	  return promise;
	}

	function needsResolver() {
	  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	}

	function needsNew() {
	  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}

	/**
	  Promise objects represent the eventual result of an asynchronous operation. The
	  primary way of interacting with a promise is through its `then` method, which
	  registers callbacks to receive either a promise's eventual value or the reason
	  why the promise cannot be fulfilled.

	  Terminology
	  -----------

	  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	  - `thenable` is an object or function that defines a `then` method.
	  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	  - `exception` is a value that is thrown using the throw statement.
	  - `reason` is a value that indicates why a promise was rejected.
	  - `settled` the final resting state of a promise, fulfilled or rejected.

	  A promise can be in one of three states: pending, fulfilled, or rejected.

	  Promises that are fulfilled have a fulfillment value and are in the fulfilled
	  state.  Promises that are rejected have a rejection reason and are in the
	  rejected state.  A fulfillment value is never a thenable.

	  Promises can also be said to *resolve* a value.  If this value is also a
	  promise, then the original promise's settled state will match the value's
	  settled state.  So a promise that *resolves* a promise that rejects will
	  itself reject, and a promise that *resolves* a promise that fulfills will
	  itself fulfill.


	  Basic Usage:
	  ------------

	  ```js
	  let promise = new Promise(function(resolve, reject) {
	    // on success
	    resolve(value);

	    // on failure
	    reject(reason);
	  });

	  promise.then(function(value) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```

	  Advanced Usage:
	  ---------------

	  Promises shine when abstracting away asynchronous interactions such as
	  `XMLHttpRequest`s.

	  ```js
	  function getJSON(url) {
	    return new Promise(function(resolve, reject){
	      let xhr = new XMLHttpRequest();

	      xhr.open('GET', url);
	      xhr.onreadystatechange = handler;
	      xhr.responseType = 'json';
	      xhr.setRequestHeader('Accept', 'application/json');
	      xhr.send();

	      function handler() {
	        if (this.readyState === this.DONE) {
	          if (this.status === 200) {
	            resolve(this.response);
	          } else {
	            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	          }
	        }
	      };
	    });
	  }

	  getJSON('/posts.json').then(function(json) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```

	  Unlike callbacks, promises are great composable primitives.

	  ```js
	  Promise.all([
	    getJSON('/posts'),
	    getJSON('/comments')
	  ]).then(function(values){
	    values[0] // => postsJSON
	    values[1] // => commentsJSON

	    return values;
	  });
	  ```

	  @class Promise
	  @param {function} resolver
	  Useful for tooling.
	  @constructor
	*/
	function Promise(resolver) {
	  this[PROMISE_ID] = nextId();
	  this._result = this._state = undefined;
	  this._subscribers = [];

	  if (noop !== resolver) {
	    typeof resolver !== 'function' && needsResolver();
	    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	  }
	}

	Promise.all = all;
	Promise.race = race;
	Promise.resolve = resolve;
	Promise.reject = reject;
	Promise._setScheduler = setScheduler;
	Promise._setAsap = setAsap;
	Promise._asap = asap;

	Promise.prototype = {
	  constructor: Promise,

	  /**
	    The primary way of interacting with a promise is through its `then` method,
	    which registers callbacks to receive either a promise's eventual value or the
	    reason why the promise cannot be fulfilled.
	  
	    ```js
	    findUser().then(function(user){
	      // user is available
	    }, function(reason){
	      // user is unavailable, and you are given the reason why
	    });
	    ```
	  
	    Chaining
	    --------
	  
	    The return value of `then` is itself a promise.  This second, 'downstream'
	    promise is resolved with the return value of the first promise's fulfillment
	    or rejection handler, or rejected if the handler throws an exception.
	  
	    ```js
	    findUser().then(function (user) {
	      return user.name;
	    }, function (reason) {
	      return 'default name';
	    }).then(function (userName) {
	      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	      // will be `'default name'`
	    });
	  
	    findUser().then(function (user) {
	      throw new Error('Found user, but still unhappy');
	    }, function (reason) {
	      throw new Error('`findUser` rejected and we're unhappy');
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	    });
	    ```
	    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	  
	    ```js
	    findUser().then(function (user) {
	      throw new PedagogicalException('Upstream error');
	    }).then(function (value) {
	      // never reached
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // The `PedgagocialException` is propagated all the way down to here
	    });
	    ```
	  
	    Assimilation
	    ------------
	  
	    Sometimes the value you want to propagate to a downstream promise can only be
	    retrieved asynchronously. This can be achieved by returning a promise in the
	    fulfillment or rejection handler. The downstream promise will then be pending
	    until the returned promise is settled. This is called *assimilation*.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // The user's comments are now available
	    });
	    ```
	  
	    If the assimliated promise rejects, then the downstream promise will also reject.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // If `findCommentsByAuthor` fulfills, we'll have the value here
	    }, function (reason) {
	      // If `findCommentsByAuthor` rejects, we'll have the reason here
	    });
	    ```
	  
	    Simple Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let result;
	  
	    try {
	      result = findResult();
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	    findResult(function(result, err){
	      if (err) {
	        // failure
	      } else {
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findResult().then(function(result){
	      // success
	    }, function(reason){
	      // failure
	    });
	    ```
	  
	    Advanced Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let author, books;
	  
	    try {
	      author = findAuthor();
	      books  = findBooksByAuthor(author);
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	  
	    function foundBooks(books) {
	  
	    }
	  
	    function failure(reason) {
	  
	    }
	  
	    findAuthor(function(author, err){
	      if (err) {
	        failure(err);
	        // failure
	      } else {
	        try {
	          findBoooksByAuthor(author, function(books, err) {
	            if (err) {
	              failure(err);
	            } else {
	              try {
	                foundBooks(books);
	              } catch(reason) {
	                failure(reason);
	              }
	            }
	          });
	        } catch(error) {
	          failure(err);
	        }
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findAuthor().
	      then(findBooksByAuthor).
	      then(function(books){
	        // found books
	    }).catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method then
	    @param {Function} onFulfilled
	    @param {Function} onRejected
	    Useful for tooling.
	    @return {Promise}
	  */
	  then: then,

	  /**
	    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	    as the catch block of a try/catch statement.
	  
	    ```js
	    function findAuthor(){
	      throw new Error('couldn't find that author');
	    }
	  
	    // synchronous
	    try {
	      findAuthor();
	    } catch(reason) {
	      // something went wrong
	    }
	  
	    // async with promises
	    findAuthor().catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method catch
	    @param {Function} onRejection
	    Useful for tooling.
	    @return {Promise}
	  */
	  'catch': function _catch(onRejection) {
	    return this.then(null, onRejection);
	  }
	};

	function polyfill() {
	    var local = undefined;

	    if (typeof global !== 'undefined') {
	        local = global;
	    } else if (typeof self !== 'undefined') {
	        local = self;
	    } else {
	        try {
	            local = Function('return this')();
	        } catch (e) {
	            throw new Error('polyfill failed because global object is unavailable in this environment');
	        }
	    }

	    var P = local.Promise;

	    if (P) {
	        var promiseToString = null;
	        try {
	            promiseToString = Object.prototype.toString.call(P.resolve());
	        } catch (e) {
	            // silently ignored
	        }

	        if (promiseToString === '[object Promise]' && !P.cast) {
	            return;
	        }
	    }

	    local.Promise = Promise;
	}

	// Strange compat..
	Promise.polyfill = polyfill;
	Promise.Promise = Promise;

	return Promise;

	})));
	//# sourceMappingURL=es6-promise.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), (function() { return this; }())))

/***/ },

/***/ 264:
/***/ function(module, exports) {

	/* (ignored) */

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	// the whatwg-fetch polyfill installs the fetch() function
	// on the global object (window or self)
	//
	// Return that as the export for use in Webpack, Browserify etc.
	__webpack_require__(266);
	module.exports = self.fetch.bind(self);


/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(268);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'handleTouchStart',
	    value: function handleTouchStart(event) {
	      var target = event.target;
	      while (target.nodeType != 1) {
	        target = target.parentNode;
	      }if (target.tagName != 'BUTTON' && target.tagName != 'INPUT' && target.tagName != 'A' && target.tagName != 'I' && target.tagName != 'TEXTAREA') event.preventDefault();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'app' },
	        this.props.children
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	exports.default = App;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "App.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	global.apiUrl = "http://ws.7hsj.com/api/v1/shop.aspx";
	global.hostUrl = "http://ws.7hsj.com";

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("G:\\Gitproject\\front-bnjs\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "config.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 275:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 276:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAADjCAYAAACcldoKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNFMzg2MzlBOTAyNDExRTZBQUZERDk1MjI4MzlGM0Y0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNFMzg2MzlCOTAyNDExRTZBQUZERDk1MjI4MzlGM0Y0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0UzODYzOTg5MDI0MTFFNkFBRkREOTUyMjgzOUYzRjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0UzODYzOTk5MDI0MTFFNkFBRkREOTUyMjgzOUYzRjQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Jyxk/AAAVvklEQVR42uxd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"

/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/icon@2x.png";

/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "img/icon@3x.png";

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 361:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 363:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});