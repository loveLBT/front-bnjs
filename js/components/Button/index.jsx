import React,{Component} from 'react'
import objectAssign from "object-assign"
import classnames from 'classnames'
import './button.css'
class Button extends Component{
	handleTouchEnd(event){
		event.preventDefault()
		const {handleTouchEnd}=this.props
		if(!!handleTouchEnd)
			this.props.handleTouchEnd()
	}
	render(){
		const {text,btnCn,style}=this.props
		const s=objectAssign({},style)
		return (
			<button 
				onTouchEnd={this.handleTouchEnd.bind(this)}
				type="button"
				className={classnames("btn flex-1",btnCn)}
				style={s}
			>
				{text}
			</button>
		)
	}
}
export default Button