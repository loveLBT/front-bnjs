import React from 'react'
import { Link } from 'react-router'
import Auth from './Auth'

const App = React.createClass({

  getInitialState() {
    return {
      loggedIn: Auth.loggedIn()
    }
  },

  updateAuth(loggedIn) {
    this.setState({
      loggedIn: !!loggedIn
    })
  },

  componentWillMount() {
    Auth.onChange = this.updateAuth
    Auth.login()
  },

  render() {
    return (
      <div>
        <ul>
          <li>
            {this.state.loggedIn ? (
              <Link to="/logout">Log out</Link>
            ) : (
              <Link to="/login">Sign in</Link>
            )}
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/">Home</Link> (changes depending on Auth status)</li>
          <li><Link to="/page2">Page Two</Link> (authenticated)</li>
          <li><Link to="/user/foo">User: Foo</Link> (authenticated)</li>
        </ul>
        {this.props.children}
      </div>
    )
  }

})

module.exports = App
