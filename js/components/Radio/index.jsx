import React,{Component} from 'react'
import objectAssign from 'object-assign'
import classnames from 'classnames'
import "./radio.css"

class Radio extends Component{
	constructor(props){
		super(props)

		this.state={
			type:"radio"
		}
	}
	componentWillMount(){
		const {type}=this.props
		if(type){
			this.setState({
				type
			})
		}
	}
	onValChange(event){
		if(!!this.props.handleChange)
			this.props.handleChange(event.target.value) 
	}
	render(){
		const {txt,id,defaultChecked,radioName,radioCn,radioStyle,value}=this.props
		const {type}=this.state
		const s=objectAssign({},{width:"50%"},radioStyle)
		return (
			<div className={classnames(radioCn,"radio")} style={s}>
				<input onChange={this.onValChange.bind(this)} type={type} id={id} defaultChecked={defaultChecked} name={radioName} value={value} />
				<label htmlFor={id}>{txt}</label>
			</div>
		)
	}
}

export default Radio