import React,{Component} from 'react'
import './loading.css'

class Loading extends Component{
	render(){
		return (
			<div className="loading">
				<div className="mask"></div>
				<div className="loading-cell flex-ai">
					<i className="icon"></i>
					<span className="text">图片正在上传</span>
				</div>
			</div>
		)
	}
}
export default Loading