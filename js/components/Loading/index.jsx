import React,{Component} from 'react'
import './loading.css'

class Loading extends Component{
	render(){
		const {text}=this.props
		return (
			<div className="loading">
				<div className="mask"></div>
				<div className="loading_cell flex-center">
					<div className="icon_loading">
						<div className="sk-circle">
						  <div className="sk-circle1 sk-child"></div>
						  <div className="sk-circle2 sk-child"></div>
						  <div className="sk-circle3 sk-child"></div>
						  <div className="sk-circle4 sk-child"></div>
						  <div className="sk-circle5 sk-child"></div>
						  <div className="sk-circle6 sk-child"></div>
						  <div className="sk-circle7 sk-child"></div>
						  <div className="sk-circle8 sk-child"></div>
						  <div className="sk-circle9 sk-child"></div>
						  <div className="sk-circle10 sk-child"></div>
						  <div className="sk-circle11 sk-child"></div>
						  <div className="sk-circle12 sk-child"></div>
						</div>
					</div>
					<div className="icon_text">
						{text}
					</div>
				</div>
			</div>
		)
	}
}
export default Loading