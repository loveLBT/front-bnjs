import React,{Component} from 'react'
import objectAssign from 'object-assign'
import classnames from 'classnames'
import "./radio.css"

class Radio extends Component{
	render(){
		const {txt,id,defaultChecked,radioCn,radioStyle,radioName}=this.props
		const s=objectAssign({},{width:"50%"},radioStyle)
		return (
			<div className={classnames(radioCn,"radio")} style={s}>
				<input type="radio" id={id} defaultChecked={defaultChecked} name={radioName} />
				<label htmlFor={id}>{txt}</label>
			</div>
		)
	}
}

export default Radio