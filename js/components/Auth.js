import fetch from 'isomorphic-fetch'
module.exports = {
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    pretendRequest(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

  getToken: function () {
    return localStorage.token
  },

  logout: function (cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn: function () {
    return !!localStorage.token
  },

  onChange: function () {}
}

function pretendRequest(email, pass, cb) {
  setTimeout(() => {
    const loginUrl=apiUrl+"/wslogin?username="+email+"&password="+pass
    fetch(loginUrl).then(response=>response.json())
      .then(data=>{
        if(data.result.status=="success"){
          cb({
            authenticated: true,
            token: Math.random().toString(36).substring(7)
          })
        }else{
          cb({ authenticated: false })
        }
      })
  }, 0)
}