import React,{Component} from 'react'
import './avator.css'
class Avator extends Component{
	constructor(props){
		super(props)

		this.state={
			imgUrl:"../../../assets/img/icon_avator.png"
		}
	}
	render(){
		return (
			<div className="avator">
				<input type="file"/>
				<img width="100%" height="100%" src={this.state.imgUrl} alt="用户头像"/>
			</div>
		)
	}
}
export default Avator