import React,{Component} from 'react'
import './loading.css'

class Loading extends Component{
	render(){
		const {text}=this.props
		return (
			<div className="loading">
				<div className="mask"></div>
				<div className="loading-cell flex-ai">
					<i className="icon"></i>
					<span className="text">{text}</span>
				</div>
			</div>
		)
	}
}
export default Loading