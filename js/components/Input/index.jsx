import React,{Component} from 'react'
import classnames from 'classnames'
import './input.css'
class Input extends Component{
	onTextChange(event){
		if(!!this.props.handleChange)
			this.props.handleChange(event.target.value) 
	}
	render(){
		const {placeholder,id,iconName,hasInputBorder,hasChildBorder,type,defaultValue}=this.props
		return (
			<div className={classnames("input flex",{borderBottom:hasInputBorder})}>
				<label className={iconName} htmlFor={id}></label>
				<input defaultValue={defaultValue} onChange={this.onTextChange.bind(this)} className={classnames("flex-1",{borderBottom:hasChildBorder})} id={id} type={type} placeholder={placeholder}/>
			</div>
		)
	}
}
export default Input