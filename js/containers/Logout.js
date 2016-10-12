import React from 'react'
import { withRouter } from 'react-router'
import Auth from '../components/Auth'

const Logout = React.createClass({
  componentDidMount() {
  	const { location } = this.props
    Auth.logout()
    this.props.router.replace('/login')
  },

  render() {
    return <p>You are now logged out</p>
  }
})

module.exports = withRouter(Logout)
