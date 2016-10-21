import fetch from 'isomorphic-fetch'

module.exports = {
  login(loginUrl, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb({loggedIn:true})
      this.onChange(true)
      return
    }
    pretendRequest(loginUrl, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        localStorage.setItem("userData",JSON.stringify(res.userData))
        if (cb) cb({loggedIn:true})
        this.onChange(true)
      } else {
        if (cb) cb({loggedIn:false,errormsg:res.errormsg})
        this.onChange(false)
      }
    })
  },

  getToken: function () {
    return localStorage.token
  },

  getUserData:function(){
    return JSON.parse(localStorage.getItem("userData"))
  },

  logout: function (cb) {
    delete localStorage.token
    delete localStorage.userData
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn: function () {
    return !!localStorage.token
  },

  onChange: function () {},
}

function pretendRequest(loginUrl, cb) {
  setTimeout(() => {
    fetch(loginUrl)
      .then(response=>response.json())
      .then(json=>{
        if(json.result.status==="success"){
          cb({
              authenticated: true,
              token: Math.random().toString(36).substring(7),
              userData:json.result.result
            })
        }else{
          cb({ authenticated: false,errormsg:json.result.result.message })
        }
      })
  }, 2000)
}
