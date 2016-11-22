import {polyfill} from 'es6-promise'
import fetch from 'isomorphic-fetch'

module.exports = {
  login(loginUrl, cb) {
    cb = arguments[arguments.length - 1]
    if (sessionStorage.token) {
      if (cb) cb({loggedIn:true})
      this.onChange(true)
      return
    }
    pretendRequest(loginUrl, (res) => {
      if (res.authenticated) {
        sessionStorage.token = res.token
        sessionStorage.setItem("userData",JSON.stringify(res.userData))
        sessionStorage.newLogin=res.newLogin
        if (cb) cb({loggedIn:true})
        this.onChange(true)
      } else {
        if (cb) cb({loggedIn:false,errormsg:res.errormsg})
        this.onChange(false)
      }
    })
  },

  getToken: function () {
    return sessionStorage.token
  },

  getUserData:function(){
    return JSON.parse(sessionStorage.getItem("userData"))
  },

  logout: function (cb) {
    delete sessionStorage.token
    delete sessionStorage.userData
    delete sessionStorage.newLogin
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn: function () {
    return !!sessionStorage.token
  },

  onChange: function () {},
}

function pretendRequest(loginUrl, cb) {
  setTimeout(() => {
    fetch(loginUrl,{
      credentials: 'include'
    })
      .then(response=>response.json())
      .then(json=>{
        if(json.result.status==="success"){
          cb({
              authenticated: true,
              token: Math.random().toString(36).substring(7),
              userData:json.result.result,
              newLogin:loginUrl
            })
        }else{
          cb({ authenticated: false,errormsg:json.result.result.message })
        }
      })
  }, 2000)
}

/*credentials: 'include'*/