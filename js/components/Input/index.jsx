import React,{Component} from 'react'
import classnames from 'classnames'
import './input.css'
class Input extends Component{
	onTextChange(event){
		if(!!this.props.handleChange)
			this.props.handleChange(event.target.value) 
	}
	render(){
		const {placeholder,iconName,hasInputBorder,hasChildBorder,type,defaultValue,maxlength}=this.props
		return (
			<div className={classnames("input flex",{borderBottom:hasInputBorder})}>
				<label className={iconName}></label>
				<input maxLength={maxlength} defaultValue={defaultValue} onChange={this.onTextChange.bind(this)} className={classnames("flex-1",{borderBottom:hasChildBorder})} type={type} placeholder={placeholder}/>
			</div>
		)
	}
}
export default Input