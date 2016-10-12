import React,{Component} from 'react'
import classnames from 'classnames'
import './button.css'
class Button extends Component{
	render(){
		const {text,btnCn}=this.props
		return (
			<button 
				type="button"
				className={classnames("btn flex-1",btnCn)}
			>
				{text}
			</button>
		)
	}
}
export default Button