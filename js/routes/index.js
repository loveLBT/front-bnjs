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
	    { /*onEnter: redirectToDashboard,*/
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
	    { /*onEnter: redirectToDashboard,*/
	      childRoutes: [
	        { path: '/register',
	          getComponent: (nextState, cb) => {
	            require.ensure([], (require) => {
	              cb(null, require('../containers/register'))
	            })
	          }
	        }
	      ]
	    },

	    { /*onEnter: redirectToLogin,*/
	      path: '/',
	      getComponent: (nextState, cb) => {
	        if (Auth.loggedIn()) {
	          return require.ensure([], (require) => {
	            cb(null, require('../containers/Dashboard'))
	          })
	        }
	      },
	      indexRoute: {
	        getComponent: (nextState, cb) => {
	          if (Auth.loggedIn()) {
	            return require.ensure([], (require) => {
	              cb(null, require('../containers/Home'))
	            })
	          }
	          return cb()
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
	            }
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