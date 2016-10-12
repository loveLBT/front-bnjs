import React,{Component} from 'react'
import classnames from 'classnames'
import './input.css'
class Input extends Component{
	render(){
		const {placeholder,id,iconName,hasInputBorder,hasChildBorder}=this.props
		return (
			<div className={classnames("input flex",{borderBottom:hasInputBorder})}>
				<label className={iconName} htmlFor={id}></label>
				<input className={classnames("flex-1",{borderBottom:hasChildBorder})} id={id} type="text" placeholder={placeholder}/>
			</div>
		)
	}
}
export default Input