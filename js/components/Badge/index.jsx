import React,{Component} from 'react'
import './badge.css'
class Badge extends Component{
	render(){
		const {count}=this.props
		return (
			<span style={{top:0,right:0}} className="badge">{count}</span>
		)
	}
}
export default Badge