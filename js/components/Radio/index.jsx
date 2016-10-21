import React,{Component} from 'react'
import objectAssign from 'object-assign'
import classnames from 'classnames'
import "./radio.css"

class Radio extends Component{
	onValChange(event){
		if(!!this.props.handleChange)
			this.props.handleChange(event.target.value) 
	}
	render(){
		const {txt,id,defaultChecked,radioName,radioCn,radioStyle,value}=this.props
		const s=objectAssign({},{width:"50%"},radioStyle)
		return (
			<div className={classnames(radioCn,"radio")} style={s}>
				<input onChange={this.onValChange.bind(this)} type="radio" id={id} defaultChecked={defaultChecked} name={radioName} value={value} />
				<label htmlFor={id}>{txt}</label>
			</div>
		)
	}
}

export default Radio