import React,{Component} from 'react'
import {UserTop,Panel} from '../components'

class Personal extends Component{
	constructor(props){
		super(props)

		this.state={
			panelObj:{
				weixin:"ly20599860",
				phone:"18862504783",
				carId:"30382198905195120",
			}
		}
	}
	render(){
		let {panelObj}=this.state
		return (
			<div className="personal">
				<UserTop />
				<div className="data_cell">
					<div className="contact borderBottom">
						<Panel title="微信" text={panelObj.weixin} hasBorder={true} />
						<Panel title="手机号" text={panelObj.phone} />
					</div>
					<div className="car borderBottom">
						<Panel title="身份证号码" text={panelObj.carId} hasBorder={true} />
						<Panel title="身份证照片" hasCarImg={true} />
					</div>
				</div>
			</div>
		)
	}
}

export default Personal
