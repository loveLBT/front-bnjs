import React from 'react'
import {Router,browserHistory} from 'react-router'
import Auth from "../components/Auth"


function redirectToLogin(nextState, replace) {
  if (!Auth.loggedIn()) {
    replace({ 
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function redirectToDashboard(nextState, replace) {
  if (Auth.loggedIn()) {
    replace('/')
  }
}

const rootRoute = {
	component: require('../components/App'),
	childRoutes:[
		{ path: '/logout',
	      getComponent: (nextState, cb) => {
	        require.ensure([], (require) => {
	          cb(null, require('../containers/Logout'))
	        })
	      }
	    },
	    { onEnter: redirectToDashboard,
	      childRoutes: [
	        { path: '/login',
	          getComponent: (nextState, cb) => {
	            require.ensure([], (require) => {
	              cb(null, require('../containers/Login'))
	            })
	          }
	        }
	      ]
	    },
	    { onEnter: redirectToDashboard,
	      childRoutes: [
	        { path: '/register',
	          getComponent: (nextState, cb) => {
	            require.ensure([], (require) => {
	              cb(null, require('../containers/Register'))
	            })
	          }
	        }
	      ]
	    },
	    { onEnter: redirectToLogin,
	      childRoutes: [
	        { path: '/editpwd',
	          getComponent: (nextState, cb) => {
	            require.ensure([], (require) => {
	              cb(null, require('../containers/EditPwd'))
	            })
	          }
	        }
	      ]
	    },
	    { onEnter: redirectToLogin,
	      childRoutes: [
	        { path: '/empower',
	          getComponent: (nextState, cb) => {
	            require.ensure([], (require) => {
	              cb(null, require('../containers/Empower'))
	            })
	          }
	        }
	      ]
	    },
	    { onEnter: redirectToLogin,
	      path: '/',
	      getComponent: (nextState, cb) => {
	        return require.ensure([], (require) => {
              cb(null, require('../containers/Dashboard'))
            })
	      },
	      indexRoute: {
	        getComponent: (nextState, cb) => {
	          return require.ensure([], (require) => {
                cb(null, require('../containers/Home'))
              })
	        }
	      },
	      childRoutes: [
	        { onEnter: redirectToLogin,
	          childRoutes: [
	            { path: '/myorder',
	              getComponent: (nextState, cb) => {
	                require.ensure([], (require) => {
	                  cb(null, require('../containers/MyOrder'))
	                })
	              }
	            },
	            { path: '/userorder',
	              getComponent: (nextState, cb) => {
	                require.ensure([], (require) => {
	                  cb(null, require('../containers/userorder'))
	                })
	              }
	            },
	            { path: '/buyproduct',
	              getComponent: (nextState, cb) => {
	                require.ensure([], (require) => {
	                  cb(null, require('../containers/BuyProduct'))
	                })
	              }
	            },
	            { path: '/myorder/:id',
	              getComponent: (nextState, cb) => {
	                require.ensure([], (require) => {
	                  cb(null, require('../containers/MyOrderDetail'))
	                })
	              }
	            },
	            { path: '/userorder/:id',
	              getComponent: (nextState, cb) => {
	                require.ensure([], (require) => {
	                  cb(null, require('../containers/UserOrderDetail'))
	                })
	              }
	            },
	            { path: '/personal',
	              getComponent: (nextState, cb) => {
	                require.ensure([], (require) => {
	                  cb(null, require('../containers/Personal'))
	                })
	              }
	            },
	            { path: '/apply',
	              getComponent: (nextState, cb) => {
	                require.ensure([], (require) => {
	                  cb(null, require('../containers/Apply'))
	                })
	              }
	            },
	            { path: '/apply/:id',
	              getComponent: (nextState, cb) => {
	                require.ensure([], (require) => {
	                  cb(null, require('../containers/ApplyDetail'))
	                })
	              }
	            },
	            { path: '/upapply/:id',
	              getComponent: (nextState, cb) => {
	                require.ensure([], (require) => {
	                  cb(null, require('../containers/UpApplyDetail'))
	                })
	              }
	            },
	            { path: '/realname',
	              getComponent: (nextState, cb) => {
	                require.ensure([], (require) => {
	                  cb(null, require('../containers/RealName'))
	                })
	              }
	            },
	            { path: '/myaddress',
	              getComponent: (nextState, cb) => {
	                require.ensure([], (require) => {
	                  cb(null, require('../containers/MyAddress'))
	                })
	              }
	            },
	            { path: '/myretail',
	              getComponent: (nextState, cb) => {
	                require.ensure([], (require) => {
	                  cb(null, require('../containers/MyRetail'))
	                })
	              }
	            },
	            { path: '/upgrade',
	              getComponent: (nextState, cb) => {
	                require.ensure([], (require) => {
	                  cb(null, require('../containers/Upgrade'))
	                })
	              }
	            },
	            { path: '/myaccount',
	              getComponent: (nextState, cb) => {
	                require.ensure([], (require) => {
	                  cb(null, require('../containers/MyAccount'))
	                })
	              }
	            },
	            { path: '/mytea',
	              getComponent: (nextState, cb) => {
	                require.ensure([], (require) => {
	                  cb(null, require('../containers/MyTea'))
	                })
	              }
	            },
	            { path: '/retailproduct',
	              getComponent: (nextState, cb) => {
	                require.ensure([], (require) => {
	                  cb(null, require('../containers/RetailProduct'))
	                })
	              }
	            },

	          ]
	        }
	      ]
	    }
	]
}


const routes=(
  <Router 
    history={browserHistory}
    routes={rootRoute}
  />
)

export default routes