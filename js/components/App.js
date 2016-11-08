import React,{Component} from 'react'
import './config.js'

class App extends Component{
  handleTouchStart(event){
    var target = event.target
    while (target.nodeType != 1) target = target.parentNode
    if (target.tagName != 'BUTTON' && target.tagName != 'INPUT' && target.tagName != 'A' &&target.tagName != 'I' &&target.tagName != 'TEXTAREA') 
    event.preventDefault()
  }
  render(){
    return (
      <div className="app">
        {this.props.children}
      </div>
    )
  }
}

export default App
