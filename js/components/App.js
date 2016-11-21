import React,{Component} from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import './config.js'

class App extends Component{
  render(){
    return (
      <div className="app">
        {this.props.children}
        {this.props.isFetching && 
         <div className="spinner"></div>
        }
      </div>
    )
  }
}

const mapStateToProps=state=>{
  const {posts}=state
  const {
    isFetching,
  }=posts
  return {
    isFetching,
  }
}

const mapDispatchToProps=(dispatch)=>({
  actions:bindActionCreators(actions,dispatch)
})



export default connect(mapStateToProps,mapDispatchToProps)(App)  
