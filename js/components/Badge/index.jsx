import React,{Component} from 'react'
import classnames from "classnames"
import objectAssign from 'object-assign'
import './badge.css'
class Badge extends Component{
	render(){
		const {count,s,cn}=this.props
		const style=objectAssign({},s)
		return (
			<span style={style} className={classnames("badge",cn)}>{count}</span>
		) 
	}
}
export default Badge